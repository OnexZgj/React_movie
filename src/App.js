import React from 'react';
import './App.css';
import {HashRouter, Route, Link} from 'react-router-dom'
import { Layout, Menu, Breadcrumb } from 'antd';


import {AboutComponent} from "./component/about/AboutComponent";
import {HomeComponent} from "./component/home/HomeComponent";
import {MovieComponent} from "./component/movie/MovieComponent";

const { Header, Content, Footer } = Layout;



export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <HashRouter>
            <Layout className="layout" style={{ height: '100%' }}>
                <Header>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={[window.location.hash.split('/')[1]]}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="home" ><Link to='/home'> 首页</Link></Menu.Item>
                        <Menu.Item key="movie"><Link to='/movie/in_theaters/1'>电影</Link></Menu.Item>
                        <Menu.Item key="about"><Link to='/about'>关于</Link></Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ flex:'1',backgroundColor:'white'}}>
                    <Route path='/home' component={HomeComponent}></Route>
                    <Route path='/about' component={AboutComponent}></Route>
                    <Route path='/movie' component={MovieComponent}></Route>
                </Content>
                <Footer style={{ textAlign: 'center'}}> OnexZgj ©2018 Created by onexzgj</Footer>
            </Layout>,
        </HashRouter>
    }

};
