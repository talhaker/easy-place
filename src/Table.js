import React, {Component} from 'react';
import Guest from './Guest';
import { Droppable } from 'react-beautiful-dnd';
//!!Organizing temp layout
import styled from 'styled-components'

//!!Organizing temp layout
const Container = styled.div `
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
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

const GuestLook = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
    width: auto;
    display: flex;
    flex-direction: column;
    flex: 1;
`;

class Table extends Component {

    render() {

        const guests = this
            .props
            .tables[this.props.index].guests
            .map((guest, index) => <GuestLook key={index} ><Guest guest={guest} deleteGuest={this.props.deleteGuest} /></GuestLook>)

        return (
            <div>
                <Wrapper>
                {this.props.table.tableName}
                    {guests}
                </Wrapper>

            </div>
        );
    }
}

export default Table;