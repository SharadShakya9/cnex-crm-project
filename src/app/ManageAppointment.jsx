import React, { useState } from "react";
import { TableHeader, Title, TitleContainer, SubText } from "./styleTable";
import ButtonFactory from "../shared/components/buttons";
import Wrapper from "../shared/components/Wrapper";
import DataTable from "../shared/components/DataTable";
import styled from "styled-components";
import { Switch } from "antd";
import IconFactory from "../shared/components/icons";
import { Link } from "react-router-dom";

const Details = styled.div`
  display: flex;
  flex-direction: column;
`;

const EditEntry = styled.div`
    width: 82px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    border: 1px solid #DBDBDC;
    font-family: "Be Vietnam Pro", sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: #86888A;
`

const initialData = [];
for (let i = 0; i < 46; i++) {
  initialData.push({
    key: i,
    sn: i+1,
    servicetype: "Hair cutting and styling",
    timeslots: "10:00 AM - 12:00 PM",
    staffs: '05',
    servicefees: 25000,
    editentry: "Edit",
    status: true,
  });
}

function ManageAppointment() {
    const[data, setData] = useState(initialData);


    function toggleSwitch(checked, record)
    {
    console.log(record,'record');
    
      const newRecord = data.map((item)=>
        item.key === record.key ? {...item, status: checked }: item
     
      )
      setData(newRecord);
    
    }
  
    const columns = [
      {
        title: "S.N",
        dataIndex: "sn",
      },
      {
        title: "Service Type",
        dataIndex: "servicetype",
      },
      {
        title: "Time Slots",
        dataIndex: "timeslots",
      },
      {
        title: "Staffs",
        dataIndex: "staffs",
      },
      {
        title: "Service Fees",
        dataIndex: "servicefees",
      },
      {
        title: "Edit Entry",
        dataIndex: "editentry",
        render: (check, record) => (<EditEntry>{record.editentry}</EditEntry>)
      },
      {
        title: "Action",
        dataIndex: "status",
        render: (check, record) => (<Switch checked={record.status} onChange={(checked) => toggleSwitch(checked, record)} />)
      },
    ];

  return (
    <div>
      <div>
      <TableHeader>
        <TitleContainer>
          <Title><Link to="/cnex/appointment"><IconFactory type="arrow-right" /></Link> Manage Appointment</Title>
        </TitleContainer>
        <ButtonFactory type="setup" />
      </TableHeader>

      <Wrapper>
        <DataTable columns={columns} data={data} rowClass={true} />
      </Wrapper>
    </div>
    </div>
  )
}

export default ManageAppointment
