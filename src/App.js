import React from 'react';
import './App.css';
import {HashRouter, Route, Link} from 'react-router-dom'
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

export default class App extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return <HashRouter>
            <Layout className="layout" style={{height:'100%'}}>
                <Header>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1" ><Link to='/home'> 首页</Link></Menu.Item>
                        <Menu.Item key="2"><Link to='/movie'>电影</Link></Menu.Item>
                        <Menu.Item key="3"><Link to='/about'>关于</Link></Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ height:'100%',backgroundColor:'white'}}>

                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>,
        </HashRouter>
    }

};
