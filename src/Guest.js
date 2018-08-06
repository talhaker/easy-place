import React, { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components'


const Container = styled.div `
    margin: 8px;
    background-color: white;
    width:150px;
    width: auto;
    display: flex;
    flex-direction: row;
    background-color: ${props => (props.isDragging ? 'lightgreen' : 'white')}
`;

const Wrapper = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
    min-width: 100px;
    min-height: 150px;
    display: flex;
    flex-direction: column;
    width: auto;
`;

class Guest extends Component {

    render() {

        return (
            <Draggable draggableId={this.props.guest.id} index={this.props.index}>
                {(provided, snapshot) => (
                    <Container
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        innerRef={provided.innerRef}
                        isDragging={snapshot.isDragging}
                    >
                        <Wrapper>
                            <button
                                type="button"
                                className="btn-cus btn-danger btn-sm btn"
                                onClick={()=> this.props.deleteGuest(this.props.guestId, this.props.tableId)}
                            >
                                X
                            </button>
                            <p>Name: {this.props.guest.name}</p>
                            <p>Category: {this.props.guest.category}</p>
                            <p>Confirmed/Unconfirmed: {this.props.guest.confirmed}/{this.props.guest.unconfirmed}</p>
                        </Wrapper>
                    </Container>
                )}
            </Draggable>
        );
    }
}

export default Guest;