import React, { Component } from 'react';
import Table from './Table';
import styled from 'styled-components'

const Wrapper = styled.div`
    margin: 8px;
    border-radius: 4px;
    min-height: 220px;
    display: flex;
    flex-direction: column;
    transition: width 2s, height 4s;
    width: 250px;
`;

class TableList extends Component {

    render() {
        return this.props.tables.map((table, index) => 
            <Wrapper>
                    <Table
                    key={table.id}
                    table={table}
                    tables={this.props.tables}
                    deleteGuest={this.props.deleteGuest}
                    deleteTable={this.props.deleteTable}
                />
            </Wrapper>)
    }
}

export default TableList;

