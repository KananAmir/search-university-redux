import { Space, Spin } from 'antd';
import 'antd/es/spin/style/css';
import './index.scss'
import React from 'react';

const Spinner = () => (
    <div id="spinner">
        <Space size="middle">
            <Spin size="small" />
            <Spin />
            <Spin size="large" />
        </Space>
    </div>
);

export default Spinner;