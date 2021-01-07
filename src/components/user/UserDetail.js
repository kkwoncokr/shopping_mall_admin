import React, { useState } from "react";
import { Descriptions, Tabs, Table, Button, Input } from "antd";
import DefalutLayout from "../ common/DefalutLayout";

const { TextArea } = Input;

const { TabPane } = Tabs;

const UserDetail = ({ user }) => {
  const [contentInput, setContentInput] = useState("");
  const [onToggle, setOnToggle] = useState(false);
  const columns = [
    {
      title: "상품명",
      dataIndex: "productName",
      key: "productName",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "갯수",
      dataIndex: "count",
      key: "count",
    },
    {
      title: "배송상태",
      dataIndex: "delivery",
      key: "delivery",
    },
    {
      title: "결제취소",
      key: "action",
      render: () => <Button type="primary">결제취소</Button>,
    },
  ];
  const callback = (key) => {
    console.log(key);
  };
  const onChange = (e) => {
    setContentInput(e.target.value);
    console.log(contentInput);
  };
  const onToggleBtn = () => {
    setOnToggle(!onToggle);
  };
  const onSubmit = () => {
    user.content = contentInput;
    setOnToggle(!onToggle);
    console.log(user);
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
          {user.address}
        </Descriptions.Item>
        <Descriptions.Item label="특이사항">
          {user.content === "" ? "특이사항이 없습니다." : user.content}
        </Descriptions.Item>
      </Descriptions>
      {!onToggle ? (
        <Button type="primary" onClick={onToggleBtn}>
          특이사항 수정
        </Button>
      ) : (
        <>
          <TextArea
            style={{ resize: "none", width: "100%" }}
            rows={4}
            onChange={onChange}
            defaultValue={user.content}
          />
          <Button type="primary" onClick={onSubmit}>
            수정하기
          </Button>
        </>
      )}
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="주문목록" key="1">
          <Table columns={columns} dataSource={user.order} />
        </TabPane>
      </Tabs>
    </DefalutLayout>
  );
};
export default UserDetail;
