import React from "react";
import { Descriptions, Tabs } from "antd";
import DefalutLayout from "../ common/DefalutLayout";

const { TabPane } = Tabs;

const UserDetail = ({ user }) => {
  const callback = (key) => {
    console.log(key);
  };
  return (
    <DefalutLayout>
      <Descriptions title="회원정보" bordered>
        <Descriptions.Item label="이메일">{user.email}</Descriptions.Item>
        <Descriptions.Item label="이름">{user.name}</Descriptions.Item>
        <Descriptions.Item label="개인정보 동의여부">YES</Descriptions.Item>
        <Descriptions.Item label="회원등급">{user.admin}</Descriptions.Item>
        <Descriptions.Item label="가입일자">{user.join}</Descriptions.Item>
        <Descriptions.Item label="휴대폰번호">{user.phone}</Descriptions.Item>
        <Descriptions.Item label="주소" span={3}>
          {user.adrress}
        </Descriptions.Item>
        <Descriptions.Item label="특이사항">내용</Descriptions.Item>
      </Descriptions>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="주문목록" key="1">
          Content of Tab Pane 1
        </TabPane>
      </Tabs>
    </DefalutLayout>
  );
};
export default UserDetail;
