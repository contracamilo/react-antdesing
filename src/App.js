import React from 'react';
import './App.css';

import { Layout, Menu, Breadcrumb } from 'antd';
import { FormFormik } from './pages/FormFormik';
// import FormSizeDemo from './pages/Form';
import AccountBalance from './components/AccountBalance';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <div className="App">
       <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">
        <FormFormik />
        {/*<FormSizeDemo />*/}
      </div>
      <h2>Hook practice</h2>
      <AccountBalance />
    </Content>
    <Footer style={{ textAlign: 'center' }}>Practice</Footer>
  </Layout>
    </div>
  );
}

export default App;
