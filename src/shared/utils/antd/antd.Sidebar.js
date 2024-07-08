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

  :where(.css-dev-only-do-not-override-m4timi).ant-menu {
    font-size: 16px;
    list-style: none;
    font-weight: 500;
    font-family: "Be Vietnam Pro", sans-serif;
  }

  :where(.css-dev-only-do-not-override-m4timi).ant-menu-inline > .ant-menu-item,
  :where(.css-dev-only-do-not-override-m4timi).ant-menu-vertical
    > .ant-menu-item,
  :where(.css-dev-only-do-not-override-m4timi).ant-menu-inline
    > .ant-menu-submenu
    > .ant-menu-submenu-title,
  :where(.css-dev-only-do-not-override-m4timi).ant-menu-vertical
    > .ant-menu-submenu
    > .ant-menu-submenu-title {
    height: 48px;
    line-height: 24px;
  }

  :where(.css-dev-only-do-not-override-m4timi).ant-menu-light .ant-menu-item,
  :where(.css-dev-only-do-not-override-m4timi).ant-menu-light
    > .ant-menu
    .ant-menu-item,
  :where(.css-dev-only-do-not-override-m4timi).ant-menu-light
    .ant-menu-submenu-title,
  :where(.css-dev-only-do-not-override-m4timi).ant-menu-light
    > .ant-menu
    .ant-menu-submenu-title {
    color: #86888a;
  }

  :where(.css-dev-only-do-not-override-m4timi).ant-menu-light
    .ant-menu-item-selected,
  :where(.css-dev-only-do-not-override-m4timi).ant-menu-light
    > .ant-menu
    .ant-menu-item-selected {
    background-color: #082d4a;
    color: #D6EBFB;
  }

  .ant-menu-submenu-selected .ant-menu-submenu-title {
    background: #082d4a;
    border-radius: 0% !important;
    color: #D6EBFB !important;

    &:hover {
      background: #082d4a !important;
      color: #D6EBFB !important;
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
    fill: #D6EBFB;
  }
  .ant-menu-item-selected circle {
    fill: #D6EBFB;
  }
`;
