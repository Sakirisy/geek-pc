import React, { Component } from 'react'
import { Card } from 'antd'
import './index.css'
export default class Login extends Component {
  render() {
    return (
      <div>
        <Card
          title="Default size card"
          extra={<a href="#">More</a>}
          style={{
            width: 300,
          }}
        >
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </div>
    )
  }
}
