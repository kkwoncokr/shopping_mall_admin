import React from "react";
import styled from "styled-components";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";

const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: #333;
    margin-bottom: 1rem;
  }
  button {
    width: 100%;
    height: 45px;
    font-size: 20px;
    letter-spacing: -1px;
  }
`;
const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: #333;
    text-decoration: underline;
    &:hover {
      color: #000;
    }
  }
`;
const textMap = {
  login: "로그인",
  register: "회원가입",
};
const AuthForm = ({ type }) => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  const text = textMap[type];
  return (
    <AuthFormBlock>
      <h3>{text}</h3>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          type="email"
          rules={[
            {
              required: true,
              message: "이메일을 입력하세요",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="이메일"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "패스워드를 입력하세요",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="패스워드"
          />
        </Form.Item>
        {type === "login" && (
          <>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>아이디 저장</Checkbox>
              </Form.Item>
            </Form.Item>
          </>
        )}
        {type === "register" && (
          <>
            <Form.Item
              name="passwordConfirm"
              rules={[
                {
                  required: true,
                  message: "비밀번호가 일치하지 않습니다.",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="비밀번호를 다시 입력하세요"
              />
            </Form.Item>
          </>
        )}
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            {text}
          </Button>
        </Form.Item>
        <Footer>
          {type === "login" ? (
            <Link to="/register">회원가입</Link>
          ) : (
            <Link to="/login">로그인</Link>
          )}
        </Footer>
      </Form>
    </AuthFormBlock>
  );
};

export default AuthForm;
