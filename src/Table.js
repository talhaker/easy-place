import React, {Component} from 'react';
import Guest from './Guest';
import { Droppable } from 'react-beautiful-dnd';
//!!Organizing temp layout
import styled from 'styled-components'

const Wrapper = styled.div`
    margin: 8px;
    width: auto;
    min-height: 220px;
    display: flex;
    flex-direction: column;
    width: 250px;
    transition: width 2s, height 4s;
    transition: background-color 0.2s ease;
    background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'white')}
    flex: 1;
`;

const GuestLook = styled.div`
    margin: 8px;
    display: flex;
    flex-direction: column;
    width:220px;
`;

class Table extends Component {

    render() {

        return (
            <React.Fragment>
                <Droppable droppableId={this.props.table.id}>
                    {(provided, snapshot) => (
                        <Wrapper innerRef={provided.innerRef}
                            {...provided.droppableProps}
                            isDraggingOver={snapshot.isDraggingOver}
                        >
                            {this.props.table.key !== 'table-0' &&
                                <button
                                    type="button"
                                    className="btn-cus btn-danger btn-sm btn"
                                    onClick={()=> this.props.deleteTable(this.props.table.id)}
                                >
                                    X
                                </button>
                            }
                            <div className="tableInfo">
                                <h5><i>{this.props.table.tableName} ({this.props.table.category})</i></h5>
                                <i>Table size: {this.props.table.tableSize}</i>
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
            
                </React.Fragment>

        );
    }
}

export default Table;