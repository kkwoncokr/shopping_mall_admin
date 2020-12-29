import React from "react";
import { Layout } from "antd";
import DefalutLayout from "../ common/DefalutLayout";

const { Content } = Layout;

const MainContent = () => (
  <DefalutLayout>
    <Content
      className="site-layout-background"
      style={{
        margin: "24px 16px",
        padding: 24,
        minHeight: "100vh",
      }}
    >
      대시보드
    </Content>
  </DefalutLayout>
);

export default MainContent;
