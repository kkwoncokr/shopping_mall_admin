import React from "react";
import { useSelector } from "react-redux";
import UserDetail from "../../components/user/UserDetail";

const UserDetailContainer = () => {
  const { user } = useSelector((state) => state.user);
  return <UserDetail user={user} />;
};

export default UserDetailContainer;
