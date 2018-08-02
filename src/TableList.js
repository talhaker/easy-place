import React, { Component } from 'react';
import Table from './Table';
import uniqueId from 'react-html-id';
import styled from 'styled-components'
import { Droppable } from 'react-beautiful-dnd';


const Container = styled.div `
    margin: 8px;
    width: auto;
    display: flex;
    flex-direction: row;
    flex: 1;
`;

const Wrapper = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
    width: auto;
    min-height: 220px;
    display: flex;
    flex-direction: column;
    flex: 1;
`;

class TableList extends Component {
    constructor() {
        super()

        uniqueId.enableUniqueIds(this);
    }


    render() {

        const displayTable = () => {
            const presentTable = this.props.tables.map((table, index) => {
            
            return (
                <Droppable id = {index}>
                {provided => (
                    <Wrapper key = {index}
                    innerRef={provided.innerRef}
                    {...provided.droppableProps}
                    >{provided.placeholder}
                    <Table index={index} key={index} table={table} tables={this.props.tables} deleteGuest={this.props.deleteGuest} />
                    </Wrapper>
                )}
                </Droppable>
            )
        })

        return presentTable;
    }

    return (
        <div>
            <Container>
                {displayTable()}
            </Container>
        </div>
        );
    }
}

export default TableList;