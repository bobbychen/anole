import React, {Component} from 'react';
import {Button,Icon} from 'antd';

class AddNewRow extends Component {
    render () {
        const {handleAdd} = this.props;
        return (
            <div className='add-new-row'>
                <Button type="dashed" onClick={handleAdd}><Icon type="plus" />Add a Row</Button>
            </div>
        );
    }
}

export default AddNewRow;