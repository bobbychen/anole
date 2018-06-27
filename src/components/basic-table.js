import React, {Component} from 'react';
import {Table, Icon, Menu, Input} from 'antd';
import Header from './basic-edit-cell';
import AddNewColumn from './add-new-column';
import _ from 'lodash';

import './basic-table.less';


const defaultColumnsArray = [
    {
        name: 'name',
        property: 'text'
    },
    {
         name: 'Age',
         property: 'text'
    },
    {
        name: 'Address',
        property: 'text'
    }
];

const generateColumn = (meta) => {
    const {name, property} = meta;
    return {
        title: name,
        dataIndex: name,
        key: name,
        filterDropdown: (
            <Menu>
                <Menu.Item key='value' disabled>
                    <Input
                        defaultValue={name}
                    />
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item className="ant-menu-delete-item"><span>Delete<Icon type="close" /></span></Menu.Item>
            </Menu>
        ),
        filterIcon: <Icon type="edit" />
    };
};


class BasicTable extends Component {
    state = {
        columns: defaultColumnsArray
    };
    addColumn = ({name, meta}) => {
        this.setState({
            columns: _.concat(this.state.columns, {
                name: name,
                property: 'text',
            }),
        });

    };
    generateAddNewColumn = () => {
      return {
          title:  <AddNewColumn addColumn={this.addColumn} />,
          key: 'addNewColumn',
          width: 50,
          fixed: 'right'
      };
    };

    generateColumns = () => {
        return this.state.columns.map((item) => generateColumn(item));

    };
    getTitle = () => {
        return (
            <Header/>
        );
    };
    render () {
        return (
            <Table
                bordered
                columns={_.concat(this.generateColumns(), this.generateAddNewColumn())}
                pagination={false}
                size="middle"
                title={this.getTitle}
            />
        );
    }
}

export default BasicTable;