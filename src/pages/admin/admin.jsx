import React, { Component } from 'react'
import { Redirect, Switch, Route} from "react-router-dom";
import { Layout } from 'antd';

import memoryUtils from '../../utils/memoryUtils'
import LeftNav from '../../components/left-nav'
import Header from '../../components/header'
import Home from '../home/home'
import Category from '../category/category'
import Product from '../product/product'
import Role from '../role/role'
import User from '../user/user'
import Bar from '../charts/bar'
import Line from '../charts/line'
import Pie from '../charts/pie'

const { Footer, Sider, Content } = Layout;

export default class Admin extends Component {
    render() {
    //读取保存的user，如果不存在 直接跳转到登录界面
    //const user = JSON.parse(localStorage.getItem('user_key') || '{}')
    const user = memoryUtils.user
    if(!user._id){
       // this.props.history.replace('/login') 事件回调函数中进行路由跳转
       return <Redirect to="/login"></Redirect> //自动跳转到指定的路由路径
    }

        return (
            <Layout style={{height: '100%'}}>
             <Sider>
               <LeftNav></LeftNav>
             </Sider>
                <Layout>
                <Header></Header>
                <Content style={{background: 'pink'}}>
                    <Switch>
                        <Route path='/home' component={Home}/>
                        <Route path='/category' component={Category}/>
                        <Route path='/product' component={Product}/>
                        <Route path='/role' component={Role}/>
                        <Route path='/user' component={User}/>
                        <Route path='/charts/bar' component={Bar}/>
                        <Route path='/charts/line' component={Line}/>
                        <Route path='/charts/pie' component={Pie}/>
                        <Redirect to='/home' />
                    </Switch>
                </Content>
                <Footer style={{textAlign: 'center' , color: 'rgba(0,0,0,0.5)'}}>ZH出品，推荐使用谷歌浏览器</Footer>
                </Layout>
            </Layout>
        )
    }
}
