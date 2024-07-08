import { Button, DatePicker, Form, Input, Select } from "antd";
import axios from "axios";
import React, { useContext } from "react";
import { Config } from "../../shared/utils/Config";
import { AppContext } from "../../shared/context/AppContext";

function CreateCompany() {
  const [form] = Form.useForm()

  const { openMessage } = useContext(AppContext)

  const handleCreate = (values) => {
    var postData = {
      category_id: values.categoryid,
      title: values.companyname,
      image: values.imagelink,
      createdAt: values.createdDate,
      updatedAt: values.createdDate,
      status: values.status,
    }

    console.log(postData)

    form.resetFields()

    axios.post(Config.API_ENDPOINT + "/company",
      postData,
      {
      headers: {
        Authorization: `Bearer ${Config.BEARER_TOKEN}`,
      },
    })
    .then((res) => {
      console.log('res out', res.data)
      openMessage('success', 'Added succesfully')
    })
    .catch((error) => {
      console.log('error', error)
      openMessage('error', 'Error')
    })

    
  }

  return (
    <div>
      <Form
        name="basic"
        form={form}
        onFinish={handleCreate}
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        autoComplete="off"
      >
        <Form.Item
          label="Company Name"
          name="companyname"
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
          name="imagelink"
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
          name="categoryid"
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
                value: '64098d52c2b7c95cc1486b13',
                label: '64098d52c2b7c95cc1486b13',
              },
              {
                value: '666167953583c53a22c6f0dc',
                label: '666167953583c53a22c6f0dc'
              },
            ]}
          />
        </Form.Item>

        <Form.Item
          label="Created Date"
          name="createdDate"
          rules={[
            {
              required: true,
              message: "Please input the category id",
            },
          ]}
        >
          <DatePicker  />
        </Form.Item>

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
                label: 'True',
              },
              {
                value: false,
                label: 'False'
              }
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
            Create Company
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default CreateCompany;
