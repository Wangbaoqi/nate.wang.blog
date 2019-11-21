

import React, { Component } from 'react'

import PropTypes from 'prop-types'
import { connect } from '../store/connect'
import Navigater from '../components/Nav'


class NavigaterCon extends Component {

  static propTypes = {
    menuTheme: PropTypes.string
  }
  constructor(props) {
    super(props);
    this.state = {
      menuList: [
        {
          path: '/',
          title: '首页'
        },{
          path: '/case',
          title: '案例'
        },{
          path: '/project',
          title: '项目'
        },{
          path: '/about',
          title: '关于Me'
        }
      ]
    }
  }


  
  componentDidMount() {
    
  }


  
  componentDidUpdate(nextProps, nextState) {
    console.log(nextProps, nextState, 'Nav ----- componentDidUpdate');
    
  }
  
  
  render() {    
    const { menuList } = this.state;
    const { menuTheme = '', customStyle } = this.props;
    console.log(menuTheme, 'menuTheme');
    
    return (
      <Navigater 
        menuList={menuList}
        customStyle={customStyle}
      />
        
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    menuTheme: state.menuTheme,
    ...props
  }
}

const mapDispatchToProps = () => {

}

NavigaterCon = connect(mapStateToProps, mapDispatchToProps)(NavigaterCon)

export default NavigaterCon


