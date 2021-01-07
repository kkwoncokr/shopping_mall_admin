import React from "react";
import { Card } from "antd";
import { Bar } from "react-chartjs-2";
import styled from "styled-components";

import DefalutLayout from "../ common/DefalutLayout";

const ContentBlock = styled.article`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
`;

const MainContent = ({ data }) => (
  <DefalutLayout>
    <ContentBlock>
      <table className="mainTable">
        <thead>
          <tr>
            <th>입금전</th>
            <th>배송전</th>
            <th>배송중</th>
            <th>교환(신청/진행중)</th>
            <th>반품(신청/진행중)</th>
            <th>환불(신청/진행중)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0/0</td>
            <td>0/0</td>
            <td>0/0</td>
          </tr>
        </tbody>
      </table>
      <Card
        title="주문현황"
        extra={<a href="#">More</a>}
        style={{ width: "100%", marginBottom: 50 }}
      >
        <Bar data={data} width={100} height={50} options={{}} />
      </Card>
      <Card
        title="상품 문의"
        style={{ width: "49%", float: "left", marginRight: "2%" }}
      >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
      <Card title="1대1 문의" style={{ width: "49%", float: "left" }}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </ContentBlock>
  </DefalutLayout>
);
export default React.memo(MainContent);
