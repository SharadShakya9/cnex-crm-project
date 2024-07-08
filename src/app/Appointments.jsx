import React, { useState } from "react";
import { TableHeader, Title, TitleContainer, SubText } from "./styleTable";
import ButtonFactory from "../shared/components/buttons";
import Wrapper from "../shared/components/Wrapper";
import DataTable from "../shared/components/DataTable";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Cascader, Select } from "antd";

const Details = styled.div`
  display: flex;
  flex-direction: column;
`;

const Paid = styled.div`
  width: 90px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  font-family: "Be Vietnam Pro", sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #03be7a;
  background: #c3fee8;
`;

const Failed = styled.div`
  width: 90px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  font-family: "Be Vietnam Pro", sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #fb3748;
  background: #ffe6e8;
`;

const RedText = styled.p`
  font-family: "Be Vietnam Pro", sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  text-align: center;
  color: #fb3748;
`;

const GreenText = styled.p`
  font-family: "Be Vietnam Pro", sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  text-align: center;
  color: #03be7a;
`;

const TableTop = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  height: 40px;
  align-items: center;
  margin: 5px;
`;

const initialData = [];
for (let i = 0; i < 46; i++) {
  initialData.push({
    key: i,
    sn: i + 1,
    name: (
      <Details>
        {["Esther Alexander", "+977 9812345678", "esther000@gmail.com"].map(
          (item, i) => {
            return <div key={i}>{item}</div>;
          }
        )}
      </Details>
    ),
    date: "15 Jan, 2024",
    timeslots: "10:00 AM - 12:00 PM",
    servicetype: "Hair cutting and styling",
    fees: 25000,
    payment: "Paid",
    status: "Confirmed",
  });
}

const options = [
  {
    value: "didnotanswer",
    label: <RedText>Did Not Answer</RedText>,
  },
  {
    value: "cancelled",
    label: <RedText>Cancelled</RedText>,
  },
  {
    value: "confirmed",
    label: <GreenText>Confirmed</GreenText>,
  },
];

function Appointments() {
  const columns = [
    {
      title: "S.N",
      dataIndex: "sn",
    },
    {
      title: "Name / Phone / Email",
      dataIndex: "name",
    },
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Time Slots",
      dataIndex: "timeslots",
    },
    {
      title: "Service type",
      dataIndex: "servicetype",
    },
    {
      title: "Fees",
      dataIndex: "fees",
    },
    {
      title: "Payment",
      dataIndex: "payment",
      render: (check, record) =>
        record.payment === "Paid" ? (
          <Paid>{record.payment}</Paid>
        ) : (
          <Failed>{record.payment}</Failed>
        ),
    },
    {
      title: "Appointment Status",
      dataIndex: "status",
      render: (check, record) => (
        <Cascader defaultValue={record.status} options={options} />
      ),
    },
  ];

  return (
    <div>
      <TableHeader>
        <TitleContainer>
          <Title>Appointments</Title>
          <SubText>View all appointments</SubText>
        </TitleContainer>
        <Link to="/cnex/manage">
          <ButtonFactory type="appointment" />
        </Link>
      </TableHeader>

      <Wrapper>
        <TableTop>
          <div>
            Show
            <Select
              defaultValue="10"
              style={{
                width: 60,
              }}
              options={[
                {
                  value: "10",
                  label: 10,
                },
                {
                  value: "50",
                  label: 50,
                },
                {
                  value: "100",
                  label: 100,
                },
              ]}
            />
            per page
          </div>
        </TableTop>
        <DataTable columns={columns} data={initialData} rowClass={false} />
      </Wrapper>
    </div>
  );
}

export default Appointments;
