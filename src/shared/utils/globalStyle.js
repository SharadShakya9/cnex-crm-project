import { createGlobalStyle } from "styled-components";
import { antdSidebar } from "./antd/antd.Sidebar";
import { antdDataTable } from "./antd/antd.Datatable";

export const GlobalStyle = createGlobalStyle`
    ${antdSidebar}
    ${antdDataTable}

    .data-table-row {
        color: red !important;
    }

    .ant-switch-checked {
        background: #03BE7A !important;
    }

    .ant-switch {
        background: #86888A;
    }
    
`