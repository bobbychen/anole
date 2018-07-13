import React, {Component} from 'react';
import {Table, Icon, Menu, Input} from 'antd';
import Header from './basic-edit-cell';
import AddNewColumn from './add-new-column';
import AddNewRow from './add-new-row';
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

const generateColumn = (meta, updateColumn, index, deleteColumn) => {
    const {name, property} = meta;
    const updateName = (event) => {
        updateColumn({
            from: name,
            to: event.target.value,
            index
        });
    }
    ;
    const onClick = ({key}) => {
        return key === 'delete'? deleteColumn(index) : null;
    };

    return {
        title: name,
        dataIndex: name,
        key: name,
        filterDropdown: (
            <Menu onClick={onClick}>
                <Menu.Item key='value' disabled>
                    <Input
                        defaultValue={name}
                        onPressEnter={updateName}
                    />
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key='delete' className="ant-menu-delete-item"><span>Delete<Icon type="close" /></span></Menu.Item>
            </Menu>
        ),
        filterIcon: <Icon type="edit" />
    };
};


class BasicTable extends Component {
    state = {
        columns: defaultColumnsArray,
        dataSource: []
    };
    addColumn = ({name, meta}) => {
        this.setState({
            columns: _.concat(this.state.columns, {
                name: name,
                property: 'text',
            }),
        });

    };
    updateColumn = ({from, to, index: elementIndex}) => {
        this.setState({
            columns: _.reduce(this.state.columns, (results, item, index)=> {
                elementIndex === index ? results.push({ ...item,name: to }) : results.push(item);
                return results;
            }, [])
        })
    };
    deleteColumn = (elementIndex) => {
        this.setState({
            columns: _.reduce(this.state.columns, (results, item, index)=> {
                if (elementIndex !== index)  results.push(item) ;
                return results;
            }, [])
        })
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
        return this.state.columns.map((item, index) => generateColumn(item, this.updateColumn, index, this.deleteColumn));

    };

    handleAdd = () => {
        const { dataSource, columns  } = this.state;
        const newData = _.reduce(columns, (result, column) => {
            const {name, type} = column;
            result[name] = '';
            return result;
        }, {});
        newData['key'] = count(dataSource);

        this.setState({
            dataSource: [...dataSource, newData],
        });
    };
    getTitle = () => {
        return (
            <Header/>
        );
    };
    render () {
        return (
            <div>
                <Table
                    bordered
                    columns={_.concat(this.generateColumns(), this.generateAddNewColumn())}
                    dataSource={this.state.dataSource}
                    pagination={false}
                    size="middle"
                    title={this.getTitle}
                />
                <AddNewRow handleAdd={this.handleAdd}/>
            </div>
        );
    }
}

export default BasicTable;