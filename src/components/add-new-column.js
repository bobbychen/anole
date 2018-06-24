import React, {Component} from 'react';
import {Icon, Dropdown, Menu, Input } from 'antd';

const SubMenu = Menu.SubMenu;

const menuKeys = {
    columnName: 'columnName',
    property: 'property',

};

class AddNewColumn extends Component {
    state = {
        dropDownVisible: false,
        defaultColumnName: 'columnName',
        selectedKey: 'text',
    };
    handleVisibleChange = (flag) => {
        this.setState(
            {
                dropDownVisible: flag
            });
    };
    onMenuClick = ({ key }) => {
        this.setState({
            selectedKey: key,
            dropDownVisible: false,
        });
        console.error('this.state.selectedKey', this.state.selectedKey);
    };
    onColumnNamePressEnter = (event) => {
        console.log('onColumnNamePressEnter', event.target.value)
        this.setState(
            {
                dropDownVisible: false,
            });
    };

    render () {
        const menu = (
            <Menu
                multiple={true}
                onClick={this.onMenuClick}
            >
                <Menu.Item key={menuKeys.columnName} disabled>
                    <Input
                        defaultValue={this.state.defaultColumnName}
                        onPressEnter={this.onColumnNamePressEnter}
                    />
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key={menuKeys.property} disabled>
                    PROPERTY TYPE
                </Menu.Item>
                <SubMenu key="subMenu" title={<span><Icon type="bars" /><span>Text</span></span>}>
                    <Menu.Item key="text"><span><Icon type="bars" /><span>Text</span></span></Menu.Item>
                    <Menu.Divider />
                    <Menu.Item key="attachment"><span><Icon type="link" /><span>Attachment</span></span></Menu.Item>
                </SubMenu>
            </Menu>
        );

        return (
            <Dropdown
                overlay={menu}
                placement='bottomCenter'
                onVisibleChange={this.handleVisibleChange}
                visible={this.state.dropDownVisible}
            >
                <Icon type="plus" />
            </Dropdown>
        );
    }
}

export default AddNewColumn;
