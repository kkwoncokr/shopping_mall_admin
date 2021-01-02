import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserContent from "../../components/user/UserContent";
import { userListRequest } from "../../modules/user";

const columns = [
  {
    title: "회원번호",
    dataIndex: "number",
  },
  {
    title: "이메일",
    dataIndex: "email",
  },
  {
    title: "가입일",
    dataIndex: "join",
  },
  {
    title: "이름",
    dataIndex: "name",
  },

  {
    title: "회원등급",
    dataIndex: "admin",
  },
];

const UserContainer = () => {
  const { user } = useSelector((state) => state.user);
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userListRequest());
  }, [dispatch]);

  const onSearch = (value) => {
    const filteruser = user;
    setInputData(filteruser.filter((v) => v.email.includes(value)));
  };
  return (
    <UserContent filterData={inputData} onSearch={onSearch} columns={columns} />
  );
};

export default UserContainer;
