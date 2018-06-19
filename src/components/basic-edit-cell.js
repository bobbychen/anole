import React, {Component} from 'react';
import {Input} from 'antd';

class BasicEditCell extends Component{
    constructor(props) {
        super(props);
        this.state = {
            defaultValue: 'Title',
            editing: false,
        };
    }

    onClick = () => {
        this.setState({
            editing: true,
        })
    };

    onPressEnter = (event) => {
        this.setState({
            defaultValue:event.target.value,
            editing: false,
        });
    };
    render () {
        return (
            <div>
                {
                    this.state.editing ?
                        <Input
                            defaultValue={this.state.defaultValue}
                            onPressEnter={this.onPressEnter}
                        />
                        :
                        <lable onClick={this.onClick}>{this.state.defaultValue}</lable>
                }
            </div>
        );
    }
}

export default BasicEditCell;