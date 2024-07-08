import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import IconFactory from "../../shared/components/icons";
import Logos from "../../shared/components/Logo";
import { Avatar } from "antd";
import { Link } from "react-router-dom";

const { Header, Content, Sider } = Layout;

const items2 = [
  {
    key: "1",
    icon: (
      <div>
        <IconFactory type="product" />
      </div>
    ),
    label: "Products",
    children: [
      {
        key: "1 1",
        icon: (
          <div>
            <IconFactory type="bullet-point" />
          </div>
        ),
        label: <Link to="/cnex/categories">Categories</Link>,
        children: null,
      },
      {
        key: "1 2",
        icon: (
          <div>
            <IconFactory type="bullet-point" />
          </div>
        ),
        label: "Variations",
        children: null,
      },
      {
        key: "1 3",
        icon: (
          <div>
            <IconFactory type="bullet-point" />
          </div>
        ),
        label: "Products",
        children: null,
      },
      {
        key: "1 4",
        icon: (
          <div>
            <IconFactory type="bullet-point" />
          </div>
        ),
        label: "Collections",
        children: null,
      },
    ],
  },
  {
    key: 2,
    icon: (
      <div>
        <IconFactory type="cart" />
      </div>
    ),
    label: (
      <Link to="/cnex/order">Orders</Link>
    ),
    children: null,
  },
  {
    key: 3,
    icon: (
      <div>
        <IconFactory type="appointment" />
      </div>
    ),
    label: (
      <Link to="/cnex/appointment">Appointments</Link>
    ),
    children: null,
  },
  {
    key: 4,
    icon: (
      <div>
        <IconFactory type="coupon" />
      </div>
    ),
    label: (
      <Link to="/cnex/coupon">Coupons</Link>
    ),
    children: null,
  },
  {
    key: 5,
    icon: (
      <div>
        <IconFactory type="inventory" />
      </div>
    ),
    label: (
      <Link to="/cnex/inventory">Inventory</Link>
    ),
    children: null,
  },
  {
    key: 6,
    icon: (
      <div>
        <IconFactory type="megaphone" />
      </div>
    ),
    label: (
      <Link to="/cnex/campaign">Campaign (CMS)</Link>
    ),
    children: null,
  },
  {
    key: 7,
    icon: (
      <div>
        <IconFactory type="profile" />
      </div>
    ),
    label: (
      <Link to="/cnex/profile">Customer Profile</Link>
    ),
    children: null,
  },
  {
    key: 8,
    icon: (
      <div>
        <IconFactory type="clock" />
      </div>
    ),
    label: (
      <Link to="/cnex/preorder">Pre-order</Link>
    ),
    children: null,
  },
  {
    key: 9,
    icon: (
      <div>
        <IconFactory type="charge" />
      </div>
    ),
    label: (
      <Link to="/cnex/deliverycharge">Delivery Charge</Link>
    ),
    children: null,
  },
  {
    key: 10,
    icon: (
      <div>
        <IconFactory type="rating" />
      </div>
    ),
    label: (
      <Link to="/cnex/rating">Rating & Reviews</Link>
    ),
    children: null,
  },
  {
    key: 11,
    icon: (
      <div>
        <IconFactory type="rating" />
      </div>
    ),
    label: (
      <Link to="/cnex/company">Company</Link>
    ),
    children: null,
  },
];

const Sidebar = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          boxShadow: "0px 2px 5px 2px #BECCFF",
          borderBottom: "1px solid #DBDBDC",
        }}
      >
        <div className="avatar">
          <Avatar style={{ background: "purple", color: "#FFF" }}>S</Avatar>
          Sharad
        </div>
      </Header>
      <Layout>
        <Sider
          width={264}
          style={{
            background: colorBgContainer,
            borderRight: "1px solid #DBDBDC",
            boxShadow: "0px 2px 5px 2px #BECCFF",
          }}
        >
          <div className="demo-logo">
            <Logos />
          </div>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{
              height: "100%",
              borderRight: 0,
            }}
            items={items2}
          >
          </Menu>
        </Sider>
        <Layout
          style={{
            padding: "24px",
            background: "#EDF6FD",
          }}
        >
          {children}
        </Layout>
      </Layout>
    </Layout>
  );
};
export default Sidebar;
