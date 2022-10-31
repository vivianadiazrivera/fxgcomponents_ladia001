import React, { useState } from 'react';
import { Divider, Radio, Table as ReactTable } from 'antd';

import PropTypes from 'prop-types';


  const columns = [
    {
      title: 'Nom',
      dataIndex: 'nom',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
  ];
  const data = [
    {
      key: '1',
      nom: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      nom: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      nom: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    }
  ];
  
  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record) => ({
      disabled: record.nom === 'Disabled User',
      // Column configuration not to be checked
      nom: record.nom,
    }),
  };
   const Table = ( {width, selectionType}) => {
  //const [selectionType, setSelectionType] = useState('checkbox');
  

  return (
    <>

<div>
      <ReactTable
        style={{width: `${width}`}}
        rowSelection={{
          type: selectionType
        }}
        columns={columns}
        dataSource={data}
      />
    </div>
    </>
  );
}
Table.propTypes = {
  selectionType: PropTypes.string,
  width: PropTypes.string
};

export default Table