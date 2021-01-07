const date = new Date();
const data = [
  {
    key: "1",
    number: 1,
    join: `${date.getFullYear()}년 ${
      date.getMonth() + 1
    }월 ${date.getDate()}일`,
    name: "John Brown",
    email: "test@test.com",
    admin: "일반",
    address: "경기도 부천시 오정구 원종동",
    phone: "01020202020",
    order: [
      {
        key: "order_1",
        productName: "한과",
        count: "2",
        delivery: "배송중",
      },
    ],
  },
  {
    key: "2",
    number: 2,
    join: `${date.getFullYear()}년 ${
      date.getMonth() + 1
    }월 ${date.getDate()}일`,
    name: "Jim Green",
    email: "test2@test.com",
    admin: "일반",
    address: "경기도 부천시 오정구 원종동",
    phone: "01020202020",
  },
  {
    key: "3",
    number: 3,
    join: `${date.getFullYear()}년 ${
      date.getMonth() + 1
    }월 ${date.getDate()}일`,
    name: "Joe Black",
    email: "test3@test.com",
    admin: "일반",
    address: "경기도 부천시 오정구 원종동",
    phone: "01020202020",
  },
  {
    key: "4",
    number: 4,
    join: `${date.getFullYear()}년 ${
      date.getMonth() + 1
    }월 ${date.getDate()}일`,
    name: "Joe1 Black",
    email: "test4@test.com",
    admin: "관리자",
    address: "경기도 부천시 오정구 원종동",
    phone: "01020202020",
  },
];

export default data;
