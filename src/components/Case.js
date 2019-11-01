import React, { Component, Fragment } from 'react'

import { Navigater } from './index'

import '../style/case.css'

export default class Case extends Component {
  render() {

    const customStyle = {
      menuStyle: {
        color: '#333',
        boxShadow: '0 2px 8px #f0f1f2'
      },
      menuItemStyle: {
        color: '#333'
      }
      
    }

    return (
      <Fragment>
        <Navigater customStyle={customStyle}/>
        <section className='case'>
          this is a case page
        </section>
      </Fragment>
    )
  }
}
