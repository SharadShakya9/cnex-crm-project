import { Button, DatePicker, Form, Input, Select } from "antd";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Config } from "../../shared/utils/Config";
import { AppContext } from "../../shared/context/AppContext";

function UpdateCompany({ record }) {
  const [form] = Form.useForm();

  const { openMessage } = useContext(AppContext);

  const handleUpdate = (values) => {
    var putData = {
      category_id: values.category_id,
      title: values.title,
      image: values.image,
      status: values.status,
    };

    axios
      .put(Config.API_ENDPOINT + `/company/${record._id}`, putData, {
        headers: {
          Authorization: `Bearer ${Config.BEARER_TOKEN}`,
        },
      })
      .then((res) => {
        console.log("res out", res.data);
        openMessage("success", "Updated succesfully");
      })
      .catch((error) => {
        console.log("error", error);
        openMessage("error", "Error on update");
      });
  };

  useEffect(() => {
    if (record === null) {
      form.resetFields();
    } else {
      form.setFieldsValue({
        ...record,
      });
    }
  }, [record]);

  return (
    <div>
      <Form
        name="basic"
        form={form}
        onFinish={handleUpdate}
        initialValues={record}
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        autoComplete="off"
      >
        <Form.Item
          label="Company Name"
          name="title"
          rules={[
            {
              required: true,
              message: "Please input company name!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Image Link"
          name="image"
          rules={[
            {
              required: true,
              message: "Please input the image link",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Category Id"
          name="category_id"
          rules={[
            {
              required: true,
              message: "Please input the category id",
            },
          ]}
        >
          <Select
            options={[
              {
                value: "64098d52c2b7c95cc1486b13",
                label: "64098d52c2b7c95cc1486b13",
              },
              {
                value: "666167953583c53a22c6f0dc",
                label: "666167953583c53a22c6f0dc",
              },
            ]}
          />
        </Form.Item>

        {/* <Form.Item
          label="Updated Date"
          name="updatedAt"
          rules={[
            {
              required: true,
              message: "Please input the category id",
            },
          ]}
        >
          <DatePicker />
        </Form.Item> */}

        <Form.Item
          label="Status"
          name="status"
          rules={[
            {
              required: true,
              message: "Please input the category id",
            },
          ]}
        >
          <Select
            options={[
              {
                value: true,
                label: "True",
              },
              {
                value: false,
                label: "False",
              },
            ]}
          />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Update Company
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default UpdateCompany;
