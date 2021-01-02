import React from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import UserDetail from "../../components/user/UserDetail";

const UserDetailContainer = ({ match }) => {
  const { user } = useSelector((state) => state.user);
  const { email } = match.params;
  const findUser = user.find((v) => v.email === email);
  return <UserDetail user={findUser} />;
};

export default withRouter(UserDetailContainer);
