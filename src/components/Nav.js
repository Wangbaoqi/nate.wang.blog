import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom'

export default class Navigater extends Component {

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

  render() {
    const { menuList } = this.state;
    const { customStyle = {} } = this.props;
    const { menuStyle = {}, menuItemStyle = {} } = customStyle;

    const menuItem = menuList.map((item, index) => {
      return (
        <span className='menu-item' key={`menu${index}`} >
          <Link to={item.path} style={menuItemStyle}>{item.title}</Link>
        </span>
      )
    })
    return (
      <nav className='header' style={menuStyle}>
        <span className='logo'>Nate.wang</span>
        <div className='menu'>
          {menuItem}
        </div>
      </nav>
    )
  }
}
