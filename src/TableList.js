import React, { Component } from 'react';
import Table from './Table';

class TableList extends Component {
    render() {
        const tables = this.props
            .tables
            .map((item, index) =>
                <Table
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