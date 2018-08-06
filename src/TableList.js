import React, { Component } from 'react';
import Table from './Table';
import styled from 'styled-components'

const Wrapper = styled.div`
margin: 8px;
border-radius: 4px;
min-width: 100px;
min-height: 220px;
display: flex;
flex-direction: column;
width: auto;
transition: width 2s, height 4s;
flex: 1;
`;

class TableList extends Component {

    render() {

        return this.props.tables.map((table, index) => 
            <Wrapper key={index}>
                <Table
                    key={table.id}
                    table={table}
                    tables={this.props.tables}
                    deleteGuest={this.props.deleteGuest}
                    deleteTable={this.props.deleteTable}
                />
            </Wrapper>
        )
    }
}

export default TableList;

