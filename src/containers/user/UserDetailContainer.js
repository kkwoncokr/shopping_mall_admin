import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import UserDetail from "../../components/user/UserDetail";
import { userListRequest } from "../../modules/user";

const UserDetailContainer = ({ match }) => {
  const dispatch = useDispatch();
  const { users, user } = useSelector((state) => state.user);
  const { email } = match.params;
  useEffect(() => {
    console.log(users);
    const findUser = users.find((v) => v.email === email);
    dispatch(userListRequest(findUser));
    console.log(findUser);
  }, []);

  if (!user) {
    return null;
  }
  return <>{user ? <UserDetail user={user} /> : <div>준비중</div>}</>;
};

export default withRouter(UserDetailContainer);
