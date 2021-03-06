import React, { Component } from 'react'
import { Form, Icon, Input, Button } from 'antd';

import './login.less'
import logo from "./images/logo.png";

export default class Login extends Component {

    handleSubmit = e => {
        //阻止事件的默认行为：表达的提交
        e.preventDefault()
        alert('发送登录的ajax请求')
    }
    render() {
        return (
            <div className="login">
                <div className="login-header">
                    <img src={logo} alt="logo"/>
                    <h1>后台管理系统</h1>
                </div>
                <div className="login-content">
                    <h1>用户登录</h1>

       <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="用户名"
            />
        </Form.Item>
        <Form.Item>
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="密码"
            />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            登 录
          </Button>
        </Form.Item>
      </Form>
                </div>
            </div>
        )
    }
}
