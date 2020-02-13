// @flow
import * as React from 'react';
import {Layout, Menu, Breadcrumb, Icon} from 'antd';

import {Route, Link} from 'react-router-dom'
import {MovieListComponent} from "./MovieListComponent";


const {SubMenu} = Menu;
const {Header, Content, Footer, Sider} = Layout;

export class MovieComponent extends React.Component {
    render() {
        return (
            <Layout style={{ background: '#fff' ,height:'100%'}}>
                <Sider width={200} style={{background: '#fff'}}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={[window.location.hash.split('/')[2]]}
                        style={{height: '100%'}} >
                        <Menu.Item key="in_theaters"><Link to='/movie/in_theaters/1'>正在热映</Link></Menu.Item>
                        <Menu.Item key="coming_soon"><Link to='/movie/coming_soon/1'>即将上映</Link></Menu.Item>
                        <Menu.Item key="top250"><Link to='/movie/top250/1'>Top250</Link></Menu.Item>

                    </Menu>
                </Sider>
                <Content style={{ minHeight: 280}}>
                    <Route path='/movie/:type/:page' component={MovieListComponent}></Route>
                </Content>
            </Layout>
        );
    };
};