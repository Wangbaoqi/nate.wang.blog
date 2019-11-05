
import React, { Component } from 'react'
import PropTypes from 'prop-types'


// connect is pure function 
// connect receive a component and return a new component
// connect receive props(exclude simple value and handle click)
// 

export const connect = (mapStateToProps, mapDispatchToProps) => (WrappedComponent) => {


  class Connect extends Component {

    // valid context value
    static contextTypes = {
      store: PropTypes.object
    }

    constructor(props) {
      super(props);
      this.state = {
        allProps: {}
      }
    }

    
    componentDidMount() {
      const { store } = this.context;
      // action of update render page state
      this._updateStateToProps();
      // subscribe update render state method
      store.subscribe(() => this._updateStateToProps());
    }
    
    _updateStateToProps() {
      const { store } = this.context;
      const stateProps = mapStateToProps ? mapStateToProps(store.getState(), this.props) : {};
      const dispatchProps = mapDispatchToProps ? mapDispatchToProps(store.dispatch) : {};

      this.setState({
        allProps: {
          ...stateProps,
          ...dispatchProps,
          ...this.props
        }
      })
    }

    render() {
      const { allProps } = this.state;
      return (
        <WrappedComponent {...allProps} />
      )
    }
  }

  return Connect
}





