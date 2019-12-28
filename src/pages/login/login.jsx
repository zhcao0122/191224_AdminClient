import React, { Component } from 'react'
import { Form, Icon, Input, Button } from 'antd';

import './login.less'
import logo from "./images/logo.png";

class Login extends Component {

    handleSubmit = e => {
        //阻止事件的默认行为：表达的提交
        e.preventDefault()

        //取出输入的相关数据
        // const form = this.props.form
        // const values = form.getFieldsValue()

        //对表单所有字段进行统一验证
        this.props.form.validateFields((err, values) => {
          if (!err) {
            alert(`发送登录的ajax请求,username=${values.username},password=${values.password}`)
          }else{
            alert('验证失败!')
          }
        })
    }

    validatorPsd = (rule, value, callback) =>{
      value=value.trim()
      if(!value){
        callback('密码不能为空')
      }else if(value.length<4 || value.length>12){
        callback('密码必须是4-12位')
      }else if(!/^[a-zA-Z0-9_]+$/.test(value)){
        callback('密码必须是英文、数字或下划线组成')
      }else{
        callback() //表示验证通过
      }
    }
    render() {

      const { getFieldDecorator } = this.props.form;

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
          {
        getFieldDecorator('username',{//配置对象：属性名是一些特定的名称
          initialValue: '',//初始值
          rules:[//申明式验证：使用插件已经定义好的规则验证
            //用户名/密码的的合法性要求
            //  1). 必须输入
            //  2). 必须大于等于4位
            //  3). 必须小于等于12位
            //  4). 必须是英文、数字或下划线组成
            { required: true, whitespace: true, message: '用户名是必须的!' },
            { min: 4, message: '用户名不能小于4位'},
            { max: 12, message: '用户名不能大于12位'},
            { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是英文、数字或下划线组成'},
          ]
        })(
          <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="用户名"
            />
        )
          }
        </Form.Item>
        <Form.Item>
        {
        getFieldDecorator('password',{//配置对象：属性名是一些特定的名称
          initialValue: '',//初始值
          rules:[
            {validator: this.validatorPsd}
          ]
        })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="密码"
            />
        )
          }
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

/**
 * 理解Form组件：包含<Form>的组件
 * 利用Form.create()包装Form组件，生成一个新的组件
 * 新组件会向form组件传递一个强大的属性，属性名：form，属性值对象
 */

 /**
  * 高阶函数：
  * 接受的参数是函数或者返回值是函数
  * 常见的：数组遍历相关的方法/定时器/Promise/高阶组件
  * 作用：实现一个更加强大的，动态的功能
  * 
  * 高阶组件：
  * 本质是一个函数
  * 接收一个组件，返回一个新的组件
  * Form.create()返回的就是一个高阶组件
  */

const WrapperForm = Form.create()(Login)

export default WrapperForm
/*
用户名/密码的的合法性要求
  1). 必须输入
  2). 必须大于等于4位
  3). 必须小于等于12位
  4). 必须是英文、数字或下划线组成
 */
