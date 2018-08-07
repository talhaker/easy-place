import React, {Component} from 'react';
import Guest from './Guest';
import { Droppable } from 'react-beautiful-dnd';
//!!Organizing temp layout
import styled from 'styled-components'

const Wrapper = styled.div`
    margin: 8px;
    min-height: 280px;
    display: flex;
    border-radius: 5px;
    flex-direction: column;
    transition: width 2s, height 4s;
    transition: background-color 0.2s ease;
    background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'white')}
    flex: 1 0 auto;
    width: 220px;
    opacity: 0.8;
`;

const GuestLook = styled.div`
    margin: 8px;
    display: flex;
    flex-direction: column;
    width: auto;
    flex: 1;
`;

class Table extends Component {

    render() {

        return (
            <div className="table">
                <Droppable droppableId={this.props.table.id}>
                    {(provided, snapshot) => (
                        <Wrapper innerRef={provided.innerRef}
                            {...provided.droppableProps}
                            isDraggingOver={snapshot.isDraggingOver}
                        >
                            {(this.props.table.id !== 'table-0') &&
                                <button
                                    type="button"
                                    className="btn-cus btn-sm btn"
                                    onClick={()=> this.props.deleteTable(this.props.table.id)}
                                >
                                    X
                                </button>
                            }
                            <div className="table-info">
                                <div className="table-name">
                                    {this.props.table.tableName}
                                </div>
                                <div className="table-size">
                                    {this.props.table.tableSize}
                                </div>
                            </div>
                            {this.props.table.guests.map((guest, index) =>
                                <GuestLook key={guest.id} >
                                    <Guest
                                        key={index}
                                        guest={guest}
                                        index={index}
                                        deleteGuest={this.props.deleteGuest}
                                        guestId={guest.id}
                                        tableId={this.props.table.id}
                                    />
                                </GuestLook>)}
                            {provided.placeholder}
                        </Wrapper>
                    )}
                </Droppable>
            </div>
        );
    }
}

export default Table;