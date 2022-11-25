import React, { useState } from 'react';
import { Space, Table, Button, Modal, Form, Input, Select } from 'antd';
import { useSelector, useDispatch } from "react-redux";
import { createAccount } from "./redux/actions/accountAction";
function App () {
    const data = useSelector(state => state.accounts);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [parentId, setParentID] = useState(0);
    const dispatch = useDispatch();
    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setParentID(0);
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setParentID(0);
        setIsModalOpen(false);
    };

    const setID = (id) => {
        setParentID(id);
    };

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
                    <Button type={"primary"} onClick={()=> {showModal(); setID(record.code)}} >Add {record.key}</Button>
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

    const min = 1;
    const max = 1000;
    const rand = Math.ceil(min + Math.random() * (max - min));
    const [values, setValues] = useState({
        name: '', type: '', category: '', status: '', notes: '', parent_code: parentId, code: rand
    });
    const set = name => {
        return ({ target: { value } }) => {
            setValues(oldValues => ({...oldValues, [name]: value }));
        }
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            dispatch(createAccount(values))
            setValues({
                name: '', type: '', category: '', status: '', notes: '', parent_code: 0, code: 0
            });
        } catch (e) {
            //show errors
        }
    }
    return (
        <>
            <Table
                size="small"
                indentSize={0}
                columns={columns}
                dataSource={data}
            />
            <Modal title="Add Child Account" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Form id="child-account" onSubmit={onSubmit}>
                    <Input size="large" placeholder="Account Name" name="name" onChange={set('name')} required />
                    <Input size="large" placeholder="Type" name="type" onChange={set('type')} required />
                    <Input size="large" placeholder="Category" name="category" onChange={set('category')}  required />
                    <Select defaultValue="true" size="large" placeholder="Use Status" onChange={set('status')} name="status" options={[
                        {
                            value: 'true',
                            label: 'True',
                        },
                        {
                            value: 'false',
                            label: 'False',
                        },
                    ]} required />
                    <Input size="large" placeholder="Note" onChange={set('note')} name="note" required />
                    <Input size="large" placeholder="Parent Code Id" name="parent_code" value={parentId} readonly="readonly" />

                    <Button type="primary" htmlType="submit">Submit</Button>
                </Form>
            </Modal>
        </>
    );
}
export default App;