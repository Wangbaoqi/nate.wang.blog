import React, { Component, Fragment } from 'react'

import { Navigater } from './index'
import { Carousel, Tabs, Card, Icon, Avatar, Row, Col } from 'antd'
import { StickyContainer, Sticky } from 'react-sticky'


import '../style/project.css'

const { TabPane } = Tabs;
const { Meta } = Card;


export default class Project extends Component {


  handleCarouselChange(a, b, c) {
    console.log(a, b, c);

  }

  handleTabChange(active) {
    console.log(active, 'handleTabChange');
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


    const cardPanel = [0, 1, 2, 3, 4].map((card ,index) => {
      return (
        <Col xs={24} sm={8} md={12} lg={6} xl={6} span={6} key={`col${index}`}>
          <Card
            hoverable='true'
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            
          >
            <Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title="Card title"
              description="This is the description"
            />
          </Card>
        </Col>
      )
    })

    return (
      <Fragment>
        {/* <Navigater customStyle={customStyle} /> */}
        <section className='case'>
          <Carousel afterChange={this.handleCarouselChange.bind(this)}>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
          </Carousel>

          <section className='tabCase'>
            <StickyContainer>
              <Tabs defaultActiveKey="1" renderTabBar={renderTabBar} onChange={this.handleTabChange.bind(this)}>
                <TabPane tab="Vue" key="1" >
                  <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 20]}>
                    {cardPanel}
                  </Row>

                </TabPane>
                <TabPane tab="React" key="2">
                  Content of Tab Pane 2
                </TabPane>
                <TabPane tab="微信小程序" key="3">
                  Content of Tab Pane 3
                </TabPane>
              </Tabs>
            </StickyContainer>
          </section>
        </section>
      </Fragment>
    )
  }
}
