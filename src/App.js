import React from 'react';
import { Space, Table, Button } from 'antd';
const columns = [
    {
        title: 'Account Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <Button type={"primary"}>Add {record.key}</Button>
            </Space>
        ),
    },
    {
        title: 'Account Type',
        dataIndex: 'type',
        key: 'type',
    },
    {
        title: 'Category',
        dataIndex: 'category',
        key: 'category',
    },
    {
        title: 'Use Status',
        dataIndex: 'status',
        key: 'status',
    },
    {
        title: 'Note',
        dataIndex: 'note',
        key: 'note',
    },
];
const data = [
    {
        key : 1, name: "Resource", type: "debit", code : 100, children :[
            {
                key : 2, name: "Resource1", type: "debit", code : 101, parent_code: 100,children: [
                    {
                        key : 4, name: "Resource3", type: "debit", code : 103, parent_code: 101}
                ]
            },
            {
                key : 3, name: "Resource2", type: "debit", code : 102, parent_code: 100
            }
        ]
    },
    {
        key : 5, name: "Resource4", type: "debit", code : 200, children: [
            {
                key : 6, name: "Resource5", type: "debit", code : 201, parent_code: 200
            }
        ]
    },
];
const App = () => <>
    <Table
        size="small"
        indentSize={0}
        columns={columns}
        dataSource={data}
    />
</>;
export default App;