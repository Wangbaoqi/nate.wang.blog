import React, { Component, Fragment } from 'react'


import { Navigater } from './index'



export default class Home extends Component {
  render() {
    return (
      <Fragment>
        {/* <Navigater /> */}

        <section className='container'>
          <div className='content'>
            <h1>成长源于不断学习，技术源于不断练习</h1>
            <p>关于大前端技术，每天学习一个新的知识点，不积跬步无以至千里</p>
            <a className='btn btn-primary' href='http://49.233.132.251/dist/'>进入博客</a>
          </div>
        </section>
      </Fragment>
    )
  }
}
