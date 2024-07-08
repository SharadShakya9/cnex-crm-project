import React, { useState } from 'react'
import { Table } from 'antd'

function DataTable({columns, data, rowClass}) {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  return (
    <div>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} rowClassName={rowClass && ((record) => (!record.status ? 'data-table-row' : ''))}/>
    </div>
  )
}

export default DataTable
