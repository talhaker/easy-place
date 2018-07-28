import React, { Component } from 'react';
import GuestGroup from './GuestGroup';

class TableList extends Component {
    render() {
        const tables = this.props
            .guests
            .map((item, index) =>
                <GuestGroup
                    key={index}
                    tableInfo={item}
                />)
        return (
            <div>
                {tables}
            </div>
        );
    }
}

export default TableList;