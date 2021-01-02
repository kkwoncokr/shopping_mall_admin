import React from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import UserDetail from "../../components/user/UserDetail";

const UserDetailContainer = ({ match }) => {
  const { user } = useSelector((state) => state.user);
  const { email } = match.params;
  if (!user) {
    return null;
  }
  const findUser = user.find((v) => v.email === email);
  console.log(findUser);
  return <>{user ? <UserDetail user={findUser} /> : <div>준비중</div>}</>;
};

export default withRouter(UserDetailContainer);
