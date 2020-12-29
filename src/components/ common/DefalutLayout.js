import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  CreditCardFilled,
  MessageOutlined,
  PieChartOutlined,
  CreditCardOutlined,
  InboxOutlined,
} from "@ant-design/icons";

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

const DefalutLayout = ({ children, location }) => {
  const [collapsed, setCollapsed] = useState(false);
  const onToggle = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">{collapsed ? <p>Luna</p> : <p>Luna,talk</p>}</div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["/"]}
          selectedKeys={[location.pathname]}
        >
          <Menu.Item key="/" icon={<PieChartOutlined />}>
            <Link to="/">대시보드</Link>
          </Menu.Item>
          <Menu.Item key="/user" icon={<UserOutlined />}>
            <Link to="/user">회원관리</Link>
          </Menu.Item>
          <Menu.Item key="/product" icon={<InboxOutlined />}>
            <Link to="/product">상품관리</Link>
          </Menu.Item>
          <Menu.Item key="/coupon" icon={<CreditCardFilled />}>
            <Link to="/coupon">쿠폰관리</Link>
          </Menu.Item>
          <Menu.Item key="/purchase" icon={<CreditCardOutlined />}>
            <Link to="/purchase">주문관리</Link>
          </Menu.Item>
          <SubMenu key="sub1" icon={<MessageOutlined />} title="게시판">
            <Menu.Item key="/notice">
              <Link to="/notice">공지사항</Link>
            </Menu.Item>
            <Menu.Item key="/support">
              <Link to="/support">고객센터</Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: onToggle,
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: "100vh",
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default withRouter(DefalutLayout);
