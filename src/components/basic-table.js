import React, {Component} from 'react';
import {Table} from 'antd';
import Header from './basic-edit-cell';
import AddNewColumn from './add-new-column';
import TableHeader from './editable-table-header';
import _ from 'lodash';


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
        columns: defaultColumns
    };
    addColumn = ({name, meta}) => {
        this.setState({
            columns: _.concat(this.state.columns, {
                title: <TableHeader header={name} />,
                dataIndex: name,
                key: name,
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
    getTitle = () => {
        return (
            <Header/>
        );
    };
    render () {
        return (
            <Table
                bordered
                columns={_.concat(this.state.columns, this.generateAddNewColumn())}
                pagination={false}
                size="middle"
                title={this.getTitle}
            />
        );
    }
}

export default BasicTable;