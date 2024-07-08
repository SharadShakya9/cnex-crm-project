import React from "react";
import DataTable from "../shared/components/DataTable";
import { SubText, TableHeader, Title, TitleContainer } from "./styleTable";
import ButtonFactory from "../shared/components/buttons";
import Wrapper from "../shared/components/Wrapper";

const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Stock",
      dataIndex: "stock",
    },
  ];
  
  const data = [];
  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      name: `Apple Watch ${i}`,
      price: 32,
      stock: 100 + i,
    });
  }

function Coupon() {
  return (
    <>
      <TableHeader>
        <TitleContainer>
          <Title>Coupons</Title>
          <SubText>Create Coupon Code</SubText>
        </TitleContainer>
        <ButtonFactory type="coupon" />
      </TableHeader>
      <Wrapper>
        <DataTable columns={columns} data={data} />
      </Wrapper>
    </>
  );
}

export default Coupon;
