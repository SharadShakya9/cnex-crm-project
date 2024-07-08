import React, { useContext, useEffect, useState } from "react";
import DataTable from "../../shared/components/DataTable";
import { SubText, TableHeader, Title, TitleContainer } from "../styleTable";
import { Button, Modal, Switch } from "antd";
import Wrapper from "../../shared/components/Wrapper";
import axios from "axios";
import { Config } from "../../shared/utils/Config";
import { formatDate } from "../../shared/utils/dateHelper";
import CompanyFilter from "../../shared/components/Filter/CompanyFilter";
import CreateCompany from "./CreateCompany";
import IconFactory from "../../shared/components/icons";
import UpdateCompany from "./UpdateCompany";
import { AppContext } from "../../shared/context/AppContext";

function Company() {
  const [data, setData] = useState([])
  const [editData, setEditData] = useState([]);
  const [cdata, setCData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const [filterData, setFilterData] = useState();
  const [searchParam, setSearchParam] = useState();
  const [dateParam, setDateParam] = useState();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdateOpen, setIsUpdateOpen] = useState(false);

  const { openMessage } = useContext(AppContext);

  function toggleSwitch(checked, record) {
    console.log(record, "record");

    const newRecord = data.map((item) =>
      item._id === record._id ? { ...item, status: checked } : item
    );
    setData(newRecord);
  }

  function handleDelete(record) {
    axios
      .delete(Config.API_ENDPOINT + `/company/${record._id}`, {
        headers: {
          Authorization: `Bearer ${Config.BEARER_TOKEN}`,
        },
      })
      .then((res) => {
        console.log("res out", res.data);
        openMessage("success", "Company deleted succesfully");
      })
      .catch((error) => {
        console.log("error", error);
        openMessage("error", "Error on delete");
      });
  }

  const columns = [
    {
      title: "Company Name",
      dataIndex: "title",
    },
    {
      title: "Image",
      dataIndex: "image",
      render: (check, record) => (
        <img style={{ width: "40px", height: "40px" }} src={record.image} />
      ),
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
    {
      title: "Status",
      dataIndex: "status",
      render: (check, record) => (
        <Switch
          checked={record.status}
          onChange={(checked) => toggleSwitch(checked, record)}
        />
      ),
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (check, record) => (
        <div style={{ display: "flex", gap: "4px" }}>
          <div
            onClick={() => {
              setIsUpdateOpen(true);
              setEditData(record);
            }}
          >
            <IconFactory type="edit" />
          </div>
          <div onClick={() => handleDelete(record)}>
            <IconFactory type="delete" />
          </div>
        </div>
      ),
    },
  ];

  const fetchCompany = async () => {
    axios
      .get(Config.API_ENDPOINT + "/company", {
        headers: {
          Authorization: `Bearer ${Config.BEARER_TOKEN}`,
        },
      })
      .then((res) => {
        console.log(res.data)
        setIsLoaded(true);
        setData(res.data);
        setCData(res.data);
      })
      .catch((error) => {
        console.log('Error', error)
      })
  };
  
  useEffect(() => {
    fetchCompany();
  }, [isLoaded]);

  useEffect(() => {
    fetchCompany();
  }, []);

  useEffect(() => {
    const newData = cdata.filter((item) => item.status === filterData.status);
    setData(newData)
  }, [filterData]);

  useEffect(() => {
    const newData = cdata.filter((item) => {
      new Date(item.createdAt) >= new Date(dateParam.dates[0]) &&
        new Date(item.createdAt) <= new Date(dateParam.dates[1]);
    });
    setData(newData);
  }, [dateParam]);

  useEffect(() => {
    const newData = cdata.filter((item) =>
      item.title.toLowerCase().includes(searchParam.toLowerCase())
    );
    setData(newData);
  }, [searchParam]);

  

  return (
    <>
      <TableHeader>
        <TitleContainer>
          <Title>Company</Title>
          <SubText>List of all companies</SubText>
        </TitleContainer>
        <Button onClick={() => setIsModalOpen(true)}>Add company</Button>
      </TableHeader>
      <Wrapper>
        <CompanyFilter
          setFilterData={setFilterData}
          setSearchParam={setSearchParam}
          setDateParam={setDateParam}
        />
        <DataTable columns={columns} data={data} rowClass={true} />
      </Wrapper>

      <Modal
        title="Add company"
        centered
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        <CreateCompany />
      </Modal>

      <Modal
        title="Update company"
        centered
        open={isUpdateOpen}
        onCancel={() => setIsUpdateOpen(false)}
        footer={null}
      >
        <UpdateCompany record={editData} />
      </Modal>
    </>
  );
}

export default Company;
