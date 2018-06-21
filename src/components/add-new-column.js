import React, {Component} from 'react';
import {Icon, Dropdown, Menu, Input } from 'antd';

const SubMenu = Menu.SubMenu;

const menuKeys = {
    columnName: 'columnName',
    property: 'property',

};

class AddNewColumn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropDownVisible: null,
            defaultColumnName: 'columnName',
            selectedKey: null,
        };
    }
    onMenuClick = ({ key }) => {
        this.setState({
            selectedKey: key,
        });
        console.error('this.state.selectedKey', this.state.selectedKey);
    };
    render () {
        const menu = (
            <Menu
                multiple
                onClick={this.onMenuClick}
            >
                <Menu.Item key={menuKeys.columnName} disabled>
                    <Input
                        defaultValue={this.state.defaultColumnName}
                    />
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key={menuKeys.property}>
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
            >
                <Icon type="plus" />
            </Dropdown>
        );
    }
}

export default AddNewColumn;
