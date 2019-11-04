import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'


export default class Provider extends Component {

  // valid type of props
  static propTypes = {
    store: PropTypes.object,
    children: PropTypes.any
  }
  // valid type of context store 
  static childContextTypes = {
    store: PropTypes.object
  }
  // define context store and give value
  getChildContext() {
    return {
      store: this.props.store
    }
  }

  render() {
    return (
      <Fragment>
        { this.props.children }
      </Fragment>
    )
  }
}
