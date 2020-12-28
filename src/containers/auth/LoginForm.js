import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import AuthForm from "../../components/auth/AuthForm";
import { loginRequest } from "../../modules/auth";

const LoginForm = ({ history }) => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state.authReducer);
  useEffect(() => {
    if (auth) {
      history.push("/");
    }
  }, [history, auth]);
  const onFinish = (values) => {
    const { email, password } = values;
    dispatch(loginRequest({ email, password }));
  };
  return <AuthForm type="login" onFinish={onFinish} />;
};

export default withRouter(LoginForm);
