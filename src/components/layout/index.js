import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import './index.css'
import {
  Link
} from "react-router-dom";

const { Header, Content, Footer } = Layout;

class LayoutWeb extends React.Component{
    render(){
        return(
        // <div>
        //  <nav>
        //     <ul>
        //       <li>
        //         <Link to="/">Home</Link>
        //       </li>
        //       <li>
        //         <Link to="/profile">Profile</Link>
        //       </li>
        //       <li>
        //         <Link to="/users">Users</Link>
        //       </li>
        //     </ul>
        //   </nav>
        //   {this.props.children}
        //   </div>
        <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/profile">Profile</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/user">User</Link></Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          {/* <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
          <div style={{ background: '#fff', padding: 24, minHeight: 280, marginTop: 20 }}>{this.props.children}</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
        )
    }
}

export default LayoutWeb