import React from "react";
import { Table, Input } from "antd";
import DefalutLayout from "../ common/DefalutLayout";

const { Search } = Input;

const UserContent = ({ onSearch, filterData, columns }) => (
  <DefalutLayout>
    <Search
      placeholder="아이디를 검색하세요"
      onSearch={onSearch}
      style={{ width: "100%", marginBottom: 20 }}
    />
    <Table columns={columns} dataSource={filterData || null} />
  </DefalutLayout>
);

export default React.memo(UserContent);
