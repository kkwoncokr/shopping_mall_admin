import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import UserContent from "../../components/user/UserContent";
import { usersListRequest } from "../../modules/user";

const UserContainer = () => {
  const { users } = useSelector((state) => state.user);
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(usersListRequest());
  }, [dispatch]);
  const columns = [
    {
      title: "회원번호",
      dataIndex: "number",
    },
    {
      title: "이메일",
      dataIndex: "email",
      render: (text) => <Link to={`/user=${text}`}>{text}</Link>,
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
  const onSearch = (value) => {
    const filteruser = users;
    setInputData(filteruser.filter((v) => v.email.includes(value)));
  };
  return (
    <UserContent filterData={inputData} onSearch={onSearch} columns={columns} />
  );
};

export default UserContainer;
