import React, {Component} from 'react';
import {Dropdown, Menu, Button, Modal} from 'antd';

class EditableTableHeader extends Component{
    state = {
        visible: false,
    };
    onClick = () => {
        console.log('Label Clicked')
        // this.setState({
        //     visible: true,
        // })
    };
    render () {
        const menu = (
            <Menu>
                <Menu.Item key="0">
                    <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
                </Menu.Item>
            </Menu>
        );
        const {header} = this.props;
        return (
            <div>
                <label onClick={this.onClick}>{header}</label>
                <Modal
                    visible={this.state.visible}
                    footer={null}
                >
                    <Dropdown overlay={menu} />
                </Modal>
            </div>
        );
    }
}

export default EditableTableHeader;
