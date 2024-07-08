import React, { useEffect, useState } from "react";
import DataTable from "../shared/components/DataTable";
import { SubText, TableHeader, Title, TitleContainer } from "./styleTable";
import { Select, Switch } from "antd";
import Wrapper from "../shared/components/Wrapper";
import axios from "axios";
import { Config } from "../shared/utils/Config";
import { formatDate } from "../shared/utils/dateHelper";
import CompanyFilter from "../shared/components/Filter/CompanyFilter";
import CategoryFilter from "../shared/components/Filter/CategoryFilter";

// const toggleData = true;

// const data = [];
// for (let i = 0; i < 46; i++) {
//   data.push({
//     key: i,
//     name: `Edward King ${i}`,
//     age: 32,
//     address: `London, Park Lane no. ${i}`,
//     toggle: (
//       <Switch defaultChecked />
//     )
//   });
// }

function Categories() {
  const [data, setData] = useState([]);
  const [cdata, setCData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const [filterData, setFilterData] = useState();
  const [searchParam, setSearchParam] = useState()

  function toggleSwitch(checked, record) {
    console.log(record, "record");

    const newRecord = data.map((item) =>
      item._id === record._id ? { ...item, status: checked } : item
    );
    setData(newRecord);
  }

  const columns = [
    {
      title: "Category Name",
      dataIndex: "title",
    },
    {
      title: "Created Date",
      dataIndex: "createdAt",
      render: (check, record) => <p>{formatDate(record.createdAt)}</p>,
    },
    {
      title: "Updated Date",
      dataIndex: "updatedAt",
      render: (check, record) => <p>{formatDate(record.updatedAt)}</p>,
    },
  ];

  function fetchCompany() {
    axios
      .get(Config.API_ENDPOINT + "/category", {
        headers: {
          Authorization: `Bearer ${Config.BEARER_TOKEN}`,
        },
      })
      .then((res) => {
        setData(res.data);
        setIsLoaded(true);
        setCData(res.data);
      });
  }

  useEffect(() => {
    fetchCompany();
  }, []);

  useEffect(() => {
    const newData = cdata.filter((item) => item.title === filterData.title);
    console.log(newData);
    setData(newData);
  }, [filterData]);

  useEffect(() => {
    const newData = cdata.filter((item) => (
        item.title.toLowerCase().includes(searchParam.toLowerCase())
    ))
    setData(newData)
  }, [searchParam])

  return (
    <>
      <TableHeader>
        <TitleContainer>
          <Title>Categories</Title>
          <SubText>View all categories</SubText>
        </TitleContainer>
      </TableHeader>
      {isLoaded ? (
        <Wrapper>
          <CategoryFilter setFilterData={setFilterData} setSearchParam={setSearchParam} />
          <DataTable columns={columns} data={data} rowClass={false} />
        </Wrapper>
      ) : (
        <>loading ....</>
      )}
    </>
  );
}

export default Categories;
