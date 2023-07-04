import { Avatar, Modal, Button, Table, Form, Input, DatePicker, AutoComplete, Select } from 'antd';
import axios from "axios";
import { useForm } from "antd/es/form/Form";
import React, { FC, useEffect, useState } from "react";
import { Information } from '../../models/information';

const Movie: FC = () => {
    const [dataSource, setDataSource] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [releaseDate, setReleaseDate] = useState<any>();
    const [director, setDirector] = useState<Information>();
    const [form] = useForm();

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        form.submit()
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const onChange = (value: string) => {
        console.log(`selected ${value}`);
    };

    const onSearch = (value: string) => {
        console.log('search:', value);
    };


    const columns = [
        {
            title: "ID",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "Image",
            dataIndex: "image",
            key: "image",
            render: (value: string) => {
                return <Avatar size={150} shape="square" src={<img src={value} alt={value} />} />;
            },
        },
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        }
    ];

    useEffect(() => {
        // async await

        const fetchMovie = async () => {
            // lấy movie từ BE
            try {
                const response = await axios.get("http://localhost:8080/movie");
                setDataSource(response.data);
            } catch (e) {
                console.log(e);
            }
        };

        fetchMovie();
    }, []);

    return (
        <div>
            <Button type="primary" onClick={showModal}>
                New Movie
            </Button>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Form
                    form={form} //để apply những validate khi bấm nút submit
                    name="form"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="name"
                        labelAlign="left" //label căn sát lề trái
                        name="name" //cái property  name này phải trùng với tên column tương ứng trong db
                        rules={[{ required: true, message: 'Please input movie name!' }]}
                    >
                        <Input />
                    </Form.Item>
                </Form>
                <Form
                    form={form}  //để apply những validate khi bấm nút submit
                    name="form"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Image"
                        labelAlign="left" //label căn sát lề trái
                        name="image" //cái property  name này phải trùng với tên column tương ứng trong db
                        rules={[{ required: true, message: 'Please input movie image!' }]}
                    >
                        <Input />
                    </Form.Item>
                </Form>
                <Form
                    form={form}  //để apply những validate khi bấm nút submit 
                    name="form"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Release date"
                        labelAlign="left" //label căn sát lề trái
                        name="releaseDate"
                        rules={[{ required: true, message: 'Please input movie release date!' }]}
                    >
                        <DatePicker
                            value={releaseDate}
                            onChange={(newValue) => {
                                setReleaseDate(newValue)
                            }}
                            format={'DD/MM/YYYY'}
                        />
                    </Form.Item>
                </Form>
                <Form
                    form={form}  //để apply những validate khi bấm nút submit 
                    name="form"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Director"
                        labelAlign="left" //label căn sát lề trái
                        name="director"
                        rules={[{ required: true, message: 'Please input director!' }]}
                    >
                        <Select
                            showSearch
                            placeholder="Select a person"
                            optionFilterProp="children"
                            onChange={onChange}
                            onSearch={onSearch}
                            filterOption={(input, option) =>
                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                            }
                            options={[ //lí do xài ant Select thay vì Autocomplete vì chúng ta có thể log ra id của director thông qua prop value
                                {
                                    value: 1,
                                    label: 'Jack',
                                },
                                {
                                    value: 2,
                                    label: 'Lucy',
                                },
                                {
                                    value: 3,
                                    label: 'Tom',
                                },
                            ]}
                        />
                    </Form.Item>
                </Form>
            </Modal>
            <Table dataSource={dataSource} columns={columns} />
        </div>
    );
};

export default Movie;

function setDataSource(data: any) {
    throw new Error("Function not implemented.");
}
