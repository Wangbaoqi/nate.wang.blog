import React, { Component, Fragment } from 'react'

import NavigaterCon from '../containers/Nav'

import { Carousel, Tabs, Card, Icon, Avatar, Row, Col } from 'antd'
import { StickyContainer, Sticky } from 'react-sticky'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'


import '../style/case.css'

const { TabPane } = Tabs;
const { Meta } = Card;


const caseLists = [
  {
    title: 'service worker',
    description: 'service work需要基于https协议',
    img: 'https://cdn.img.wenhairu.com/images/2020/03/05/m7WB6.png ',
    link: 'https://wangbaoqi.github.io/nateCase/serviceWork/index.html'
  },
  {
    title: 'MVC架构模式',
    description: '前端简易实现MVC架构模式',
    img: 'https://cdn.img.wenhairu.com/images/2020/03/05/m7JfX.png',
    link: 'https://wangbaoqi.github.io/nateCase/mvcFront/mvc.html'
  },
  {
    title: 'MVP架构模式',
    description: '前端简易实现MVP架构模式',
    img: 'https://cdn.img.wenhairu.com/images/2020/03/05/mSN5N.png',
    link: 'https://wangbaoqi.github.io/nateCase/mvpFront/index.html'
  }
]

export default class Case extends Component {

  
  componentDidMount() {
    
  }
  

  handleCarouselChange(a, b, c) {
    console.log(a, b, c);

  }

  handleTabChange(active) {
    console.log(active, 'handleTabChange');
  }

  handleNavigate(link) {
    window.location.href = link
  }

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

    const renderTabBar = (props, DefaultTabBar) => (
      <Sticky bottomOffset={80}>
        {({ style }) => (
          <DefaultTabBar {...props} style={{ ...style, zIndex: 1, background: '#fff' }} />
        )}
      </Sticky>
    );


    const cardPanel = caseLists.map((card ,index) => {
      return (
        <Col xs={24} sm={8} md={12} lg={6} xl={6} span={6} key={`col${index}`}>
          <Card
            hoverable='true'
            cover={
              <img
                alt="example"
                src={card.img}
              />
            }
            onClick={this.handleNavigate.bind(this, card.link)}
            
          >
            <Meta
              title={card.title}
              description={card.description}
            />
          </Card>
        </Col>
      )
    })

    return (
      <Fragment>
        <NavigaterCon customStyle={customStyle} />
        <section className='case'>
          <Carousel afterChange={this.handleCarouselChange.bind(this)}>
            <div>
              <img  className='case-Carousel' src="https://cdn.img.wenhairu.com/images/2020/03/05/m7KQp.jpg" alt=""/>
            </div>
          </Carousel>

          <section className='tabCase'>
            <StickyContainer>
              <Tabs defaultActiveKey="1" renderTabBar={renderTabBar} onChange={this.handleTabChange.bind(this)}>
                <TabPane tab="Javascript" key="1" >
                  <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 20]}>
                    {cardPanel}
                  </Row>

                </TabPane>
                <TabPane tab="Css" key="2">
                  this is css case here
                </TabPane>
              </Tabs>
            </StickyContainer>
          </section>
        </section>
      </Fragment>
    )
  }
}
