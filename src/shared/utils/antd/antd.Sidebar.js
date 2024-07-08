import { css } from "styled-components";

export const antdSidebar = css`
  .ant-layout-header {
    background: #fff;
    height: 80px;
  }

  .avatar {
    display: flex;
    gap: 8px;
    align-items: center;
    font-family: "Be Vietnam Pro", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: center;
    color: #363637;
  }

  .ant-layout-sider {
    margin-top: -80px;
  }

  .demo-logo {
    margin: 25px 40px 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .ant-menu {
    font-size: 16px;
    list-style: none;
    font-weight: 500;
    font-family: "Be Vietnam Pro", sans-serif;
  }

  .ant-menu-inline > .ant-menu-item,
  .ant-menu-vertical > .ant-menu-item,
  .ant-menu-inline > .ant-menu-submenu > .ant-menu-submenu-title,
  .ant-menu-vertical > .ant-menu-submenu > .ant-menu-submenu-title {
    height: 48px !important;
    line-height: 24px !important;
  }

  .ant-menu-light .ant-menu-item,
  .ant-menu-light > .ant-menu .ant-menu-item,
  .ant-menu-light .ant-menu-submenu-title,
  .ant-menu-light > .ant-menu .ant-menu-submenu-title {
    color: #86888a !important;
  }

  .ant-menu-light .ant-menu-item-selected,
  .ant-menu-light > .ant-menu .ant-menu-item-selected {
    background-color: #082d4a !important;
    color: #d6ebfb !important;
  }

  .ant-menu-submenu-selected .ant-menu-submenu-title {
    background: #082d4a;
    border-radius: 0% !important;
    color: #d6ebfb !important;

    &:hover {
      background: #082d4a !important;
      color: #d6ebfb !important;
    }
  }

  .ant-menu-item {
    margin: 0 !important;
    margin-top: 20px !important;
  }

  .ant-menu-submenu .ant-menu-item {
    margin-top: 10px !important;
  }

  .ant-menu .ant-menu-item {
    border-radius: 0;
  }

  .ant-menu-item-selected path {
    fill: #d6ebfb;
  }
  .ant-menu-item-selected circle {
    fill: #d6ebfb;
  }
`;
