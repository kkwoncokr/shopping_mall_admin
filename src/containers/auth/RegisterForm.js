import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import AuthForm from "../../components/auth/AuthForm";
import { registerRequest } from "../../modules/auth";

const RegisterForm = ({ history }) => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state.authReducer);
  const onFinish = (values) => {
    const { email, password, nickname, passwordConfirm } = values;
    if (password !== passwordConfirm) {
      setError("비밀번호가 일치하지 않습니다.");
    }
    dispatch(registerRequest({ email, password, nickname, admin: auth.admin }));
    alert("가입완료");
    history.push("/login");
  };
  return <AuthForm type="register" onFinish={onFinish} error={error} />;
};

export default withRouter(RegisterForm);
