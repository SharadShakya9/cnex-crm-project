import React from "react";
import { Outlet } from "react-router-dom";
import DataTable from "../shared/components/DataTable";
import { SubText, TableHeader, Title, TitleContainer } from "./styleTable";
import { Switch } from "antd";
import Wrapper from "../shared/components/Wrapper"

const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
  {
    title: "Toggle",
    dataIndex: 'toggle',
  }
];

// const toggleData = true;

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
    toggle: (
      <Switch defaultChecked />
    )
  });
}

function Orders() {
  return (
    <>
      <TableHeader>
        <TitleContainer>
          <Title>Orders</Title>
          <SubText>View customer orders.</SubText>
        </TitleContainer>
      </TableHeader>
      <Wrapper>
        <DataTable columns={columns} data={data} rowClass={false} />
      </Wrapper>
    </>
  );
}

export default Orders;
