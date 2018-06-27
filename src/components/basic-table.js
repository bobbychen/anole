import React, {Component} from 'react';
import {Table, Icon, Button} from 'antd';
import Header from './basic-edit-cell';
import AddNewColumn from './add-new-column';
import TableHeader from './editable-table-header';
import _ from 'lodash';


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
            <div>
                <Button type="primary">Search</Button>
            </div>
        ),
        filterIcon: <Icon type="edit" />
    };
};


const defaultColumns = [{
    title: <TableHeader header={'name'}/>,
    dataIndex: 'name',
    key: 'name',
}, {
    title: <TableHeader header={'Age'}/>,
    dataIndex: 'age',
    key: 'age',
}, {
    title: <TableHeader header={'Address'}/>,
    dataIndex: 'address',
    key: 'address',
}
];


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