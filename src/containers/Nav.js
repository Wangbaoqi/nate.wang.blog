

import React, { Component } from 'react'

import PropTypes from 'prop-types'
import {connect} from '../store/connect'
import Navigater from '../components/Nav'


class NavigaterCon extends Component {

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
          title: '关于M'
        }
      ]
    }
  }

  
  componentDidMount() {
    console.log(this.context.router, 'useParams');
    
  }

  
  


  render() {
    const { menuList } = this.state;
    return (
      <Navigater 
        menuList={menuList}
      />
        
    )
  }
}

const mapStateToProps = () => {

}

const mapDispatchToProps = () => {

}

NavigaterCon = connect(mapStateToProps, mapDispatchToProps)(NavigaterCon)

export default NavigaterCon


