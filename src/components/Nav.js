import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom'

export default class Navigater extends Component {

  render() {
    const { menuList = [], customStyle = {} } = this.props;
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
