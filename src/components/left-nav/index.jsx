import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { Menu, Icon } from 'antd'

import './index.less'
import logo from "../../assets/images/logo.png"
import menuList from '../../config/menuConfig'
import Item from 'antd/lib/list/Item'

const { SubMenu } = Menu

/**
 * 左侧导航
 */

export default class LeftNav extends Component {

    /*
     根据指定菜单数据列表产生<Menu>的子节点数组
     使用 reduce() + 递归
     */

    getMenuNodes2 = (menuList) => {
        return menuList.reduce((pre , item) => {
            if(!item.children){
                pre.push(
                    <Menu.Item key={item.key}>
                    <Link to={item.key}>
                        <Icon type={item.icon}/>
                        <span>{item.title}</span>
                    </Link>
                    </Menu.Item>
                )
            }else{
                pre.push(
                    <SubMenu
                    key={item.key}
                    title={
                    <span>
                        <Icon type={item.icon} />
                        <span>{item.title}</span>
                    </span>
                    }>
                        {
                            this.getMenuNodes2(item.children)
                        }
                    </SubMenu>
                )
            }
            return pre
        }, [])
    }
    /*
     根据指定菜单数据列表产生<Menu>的子节点数组
     使用 map() + 递归
     */
    getMenuNodes = (menuList) => {
        return menuList.map( item => {
            if(!item.children){
                return (
                    <Menu.Item key={item.key}>
                        <Link to={item.key}>
                            <Icon type={item.icon}/>
                            <span>{item.title}</span>
                        </Link>
                    </Menu.Item>
                )
            }
            return (
                <SubMenu
                key={item.key}
                title={
                <span>
                    <Icon type={item.icon} />
                    <span>{item.title}</span>
                </span>
                }>
                    {
                        this.getMenuNodes(item.children)
                    }
                </SubMenu>
            )
        })
    }

    render() {
        return (
            <div className="left-nav">
                <Link className="left-nav-link" to="/home">
                    <img src={logo} alt="logo"/>
                    <h1>ZH后台</h1>
                </Link>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultOpenKeys={['/home']}
                >

                    {
                        this.getMenuNodes2(menuList)
                    }
                    {/* <Menu.Item key="/home">
                        <Link to="/home">
                            <Icon type="home"/>
                            <span>首页</span>
                        </Link>
                    </Menu.Item>
                    <SubMenu
                        key="products"
                        title={
                        <span>
                            <Icon type="mail" />
                            <span>商品</span>
                        </span>
                        }
                    >
                    <Menu.Item key="/category">
                        <Link to="/category">
                            <Icon type="setting"/>
                            <span>品类管理</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="/product">
                        <Link to="/product">
                            <Icon type="appstore"/>
                            <span>商品管理</span>
                        </Link>
                    </Menu.Item>
                    </SubMenu> */}
                </Menu>
            </div>
        )
    }
}
