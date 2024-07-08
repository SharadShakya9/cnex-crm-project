import { Input, Select } from "antd";
import Search from "antd/es/transfer/search";
import React, { useState } from "react";
import { DatePicker } from "antd";
import { formatDate } from "../../utils/dateHelper";

const { RangePicker } = DatePicker;

function CompanyFilter({ setFilterData, setSearchParam, setDateParam }) {
  

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: "20px",
        marginTop: "20px",
        marginRight: "20px",
        marginLeft: "20px",
      }}
    >
      <div>
        Showing
        <Select
          style={{ margin: "2px" }}
          placeholder="Row"
          options={[
            { value: "10", label: "10" },
            { value: "50", label: "50" },
            { value: "100", label: "100" },
          ]}
        />
        Per Page
      </div>

      <div style={{ display: "flex", justifyContent: "flex-end", gap: "20px" }}>
        <Search
          placeholder="Search..."
          onChange={(e) => setSearchParam(e.target.value)}
        />

        <RangePicker onChange={(dates, dateString) => {
          console.log(dates, dateString)
          console.log('format', new Date(dateString[0]), new Date(dateString[1]))
          setDateParam({dates : dateString})
        }} />

        <Select
          showSearch
          placeholder="Status"
          filterOption={(input, option) =>
            (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
          }
          onChange={(value) => {
            setFilterData({ status: value });
          }}
          options={[
            { value: true, label: "ON" },
            { value: false, label: "OFF" },
          ]}
        />
      </div>
    </div>
  );
}

export default CompanyFilter;
