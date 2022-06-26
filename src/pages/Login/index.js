import React, { Component } from 'react'
import { Card } from 'antd'
import { Button, Checkbox, Form, Input } from 'antd'
import './index.scss'
import logo from 'assets/logo.png'
export default class Login extends Component {
  render() {
    return (
      <div className="login">
        <Card className="login-container">
          <img src={logo} alt="" className="login-logo" />
          <Form
            size="large"
            onFinish={this.onFinish}
            initialValues={{
              mobile: '13911111111',
              code: '246810',
              agree: 'true',
            }}
          >
            <Form.Item
              // label="Username"
              name="mobile"
              validateTrigger={['onChange', 'onBlur']}
              rules={[
                {
                  required: true,
                  message: '手机号不能为空',
                },
                {
                  pattern: /^1[3-9]\d{9}$/,
                  message: '手机号格式错误',
                },
              ]}
            >
              <Input placeholder="输入手机号" autoComplete="off" />
            </Form.Item>
            <Form.Item
              // label="Password"
              // name="password"
              // rules={[
              //   {
              //     required: true,
              //     message: 'Please input your password!',
              //   },
              // ]}
              name="code"
              rules={[
                {
                  required: true,
                  message: '验证码不能为空',
                },
                {
                  pattern: /^\d{6}$/,
                  message: '验证码格式错误',
                },
              ]}
            >
              {/* <Input.Password /> */}
              <Input placeholder="输入密码" autoComplete="off"></Input>
            </Form.Item>

            <Form.Item
              valuePropName="checked"
              name="agree"
              validateTrigger={['onChange', 'onBlur']}
              rules={[
                {
                  validator(rule, value) {
                    if (value) {
                      return Promise.resolve()
                    } else {
                      return Promise.reject(new Error('请阅读并同意协议'))
                    }
                  },
                },
              ]}
            >
              <Checkbox>已阅读同意[xxxx]和[xxxx]</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                登录
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    )
  }

  onFinish = (values) => {
    console.log(values)
  }
}
