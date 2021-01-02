import React, { useState } from "react";
import { useSelector } from "react-redux";
import UserContent from "../../components/user/UserContent";

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
// const date = new Date();
// const data = [
//   {
//     key: "1",
//     number: 1,
//     join: `${date.getFullYear()}년 ${
//       date.getMonth() + 1
//     }월 ${date.getDate()}일`,
//     name: "John Brown",
//     email: "test@test.com",
//     admin: "일반",
//   },
//   {
//     key: "2",
//     number: 2,
//     join: `${date.getFullYear()}년 ${
//       date.getMonth() + 1
//     }월 ${date.getDate()}일`,
//     name: "Jim Green",
//     email: "test2@test.com",
//     admin: "일반",
//   },
//   {
//     key: "3",
//     number: 3,
//     join: `${date.getFullYear()}년 ${
//       date.getMonth() + 1
//     }월 ${date.getDate()}일`,
//     name: "Joe Black",
//     email: "test3@test.com",
//     admin: "일반",
//   },
//   {
//     key: "4",
//     number: 4,
//     join: `${date.getFullYear()}년 ${
//       date.getMonth() + 1
//     }월 ${date.getDate()}일`,
//     name: "Joe1 Black",
//     email: "test4@test.com",
//     admin: "관리자",
//   },
// ];

const UserContainer = () => {
  const { user } = useSelector((state) => state.user);
  console.log(user);
  const [inputData, setInputData] = useState(user);
  const [filterData, setFilterData] = useState(user);
  const onSearch = (value) => {
    setInputData(user);
    const filterDatas = inputData.filter((v) => v.email.includes(value));
    setFilterData(filterDatas);
  };
  return (
    <UserContent
      filterData={filterData}
      onSearch={onSearch}
      columns={columns}
    />
  );
};

export default UserContainer;
