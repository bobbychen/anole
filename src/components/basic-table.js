import React, {Component} from 'react';
import {Table} from 'antd';
import Header from './basic-edit-cell';

const dataSource = [{
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street'
}, {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street'
}];

const defaultColumns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
}, {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
}, {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
}];


class BasicTable extends Component {
    getTitle = () => {
        return (
            <Header/>
        );
    };

    render () {
        return (
            <Table
                dataSource={dataSource}
                columns={defaultColumns}
                pagination={false}
                size="middle"
                title={this.getTitle}
            />
        );
    }
}

export default BasicTable;