import React, { Component } from 'react';
import Guest from './Guest';
import { withStyles } from "@material-ui/core/styles";
import { Droppable } from 'react-beautiful-dnd';
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

const styles = theme => ({
    root: {
        width: 330,
        overflowX: 'hidden', /* Hide horizontal scrollbar */
        overflowY: 'auto', /* Add vertical scrollbar */
        position: 'relative',
        //  height: 450,
        justifyContent: 'center',
    },
});
class GuestList extends Component {
    render() {
        const { classes } = this.props;
        let firstGuests = this.props.table[0];
        return (
            <React.Fragment>
                <Droppable droppableId={firstGuests.id}>
                    {(provided, snapshot) => (
                        <Wrapper innerRef={provided.innerRef}
                            {...provided.droppableProps}
                            isDraggingOver={snapshot.isDraggingOver}   >

                            {firstGuests.guests.map((guestItem, index) =>
                                <Guest guestItem={guestItem} index={index} guestId={guestItem.id}  tableId={firstGuests.id}/>
                            )}
                            {provided.placeholder}
                        </Wrapper>
                    )}
                </Droppable>
            </React.Fragment>
        );
    }
}
export default withStyles(styles)(GuestList);