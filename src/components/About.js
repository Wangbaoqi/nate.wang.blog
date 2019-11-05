import React, { Component, Fragment } from 'react'
import NavigaterCon from '../containers/Nav'

import { Timeline, Icon } from 'antd'

import '../style/about.css'

export default class About extends Component {
  render() {
    const customStyle = {
      menuStyle: {
        color: '#333',
        boxShadow: '0 6px 9px #f0f1f2',
        background: 'rgba(255, 255, 255, 1)'
      },
      menuItemStyle: {
        color: '#333'
      }
    }
    return (
      <Fragment>
        <NavigaterCon customStyle={customStyle}/>
        <section className='about'>
          <Timeline mode="alternate">
            <Timeline.Item>2017-06-01 Graduated from Jiangsu University of science and technology </Timeline.Item>
            <Timeline.Item color="green">Internship starting in TCTrip Company 2016-10-16</Timeline.Item>
            <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>
              During the internship, learn the front-end knowledge, write some simple airline business codes, use angular1. X, and learn vue.js
            </Timeline.Item>
            <Timeline.Item color="red">Internship ending in TCTrip Company 2017-07-01 </Timeline.Item>
            <Timeline.Item color="green">2017-08-01 smoothly come in TCTrip Company and Starting First Job in My Career</Timeline.Item>
            <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>
              During the maintenance period, vue.js is used for domestic air ticket projects, and for the first time, angular is 
              used to continue to maintain air ticket mixed end projects 2018-03-01
            </Timeline.Item>
            <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>
              2018-09-01 We have been involved in the development of wechat small programs and reconstruction of domestic 
              wechat ticket projects, and stepped on many holes during this period 
            </Timeline.Item>
            <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>
              We have been involved in the development of wechat small programs and reconstruction of domestic 
              wechat ticket projects, and stepped on many holes during this period 2018-09-01 
            </Timeline.Item>
          </Timeline>
        </section>
      </Fragment>
    )
  }
}
