import React, { useState } from "react";
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

const { Header, Sider } = Layout;
const { SubMenu } = Menu;
const DefalutLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">{collapsed ? <p>Luna</p> : <p>Luna,talk</p>}</div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["0"]}>
          <Menu.Item key="0" icon={<PieChartOutlined />}>
            대시보드
          </Menu.Item>
          <Menu.Item key="1" icon={<UserOutlined />}>
            회원관리
          </Menu.Item>
          <Menu.Item key="2" icon={<InboxOutlined />}>
            상품관리
          </Menu.Item>
          <Menu.Item key="3" icon={<CreditCardFilled />}>
            쿠폰관리
          </Menu.Item>
          <Menu.Item key="4" icon={<CreditCardOutlined />}>
            주문관리
          </Menu.Item>
          <SubMenu key="sub1" icon={<MessageOutlined />} title="게시판">
            <Menu.Item key="5">공지사항</Menu.Item>
            <Menu.Item key="6">고객센터</Menu.Item>
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
        {/* <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: "100vh",
          }}
        >
          Content
        </Content> */}
        {children}
      </Layout>
    </Layout>
  );
};

export default DefalutLayout;
