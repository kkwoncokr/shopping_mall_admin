import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import AuthForm from "../../components/auth/AuthForm";
import { loginRequest } from "../../modules/auth";

const LoginForm = ({ history }) => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state.authReducer);
  useEffect(() => {
    if (auth.email && auth.admin === false) {
      alert("관리자에게 문의하세요");
    } else if (auth.email && auth.password) {
      history.push("/");
    }
  }, [history, auth]);
  const onFinish = (values) => {
    const { email, password } = values;
    dispatch(loginRequest({ email, password, admin: auth.admin }));
  };
  return <AuthForm type="login" onFinish={onFinish} />;
};

export default withRouter(LoginForm);
