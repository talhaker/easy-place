import React, { Component } from 'react';
import GuestDrog from './GuestDrog';

import Guest from './Guest';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components'
import CardsContainer from './CardsContainer';
import Paper from '@material-ui/core/Paper';

import Divider from '@material-ui/core/Divider';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
// import PropTypes from 'prop-types';

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


const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        margin: theme.spacing.unit * 2,
        width: 180,
    },
    control: {
        padding: theme.spacing.unit * 2,
    },
});

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
                            <button type="button" className="btn-cus btn-danger btn-sm btn"
                                onClick={() => this.props.deleteTable(this.props.table.id)}>X</button>
                            <div className="tableInfo">
                                tableName: {this.props.table.tableName} -
                            Size:  {this.props.table.tableSize}
                            </div>
                            {this.props.table.guests.map((guestItem, index) =>
                            <GuestLook key={guestItem.id} >
                                <Guest guestItem={guestItem} index={index}
                                    deleteGuest={this.props.deleteGuest}
                                    guestId={guestItem.id} tableId={this.props.table.id} />
                            </GuestLook>
                            )}
                            {provided.placeholder}
                        </Wrapper>
                    )}
                </Droppable>

            </React.Fragment>

        );
    }

    // render() {
    //     const {classes, tableInfo } = this.props;
    //     const displayTableInfo = (
    //         <div>

    //             <Paper style={{height: this.props.tableInfo.tableSize * 5, }} className={classes.paper}>
    //             <h3>Table {this.props.tableInfo.tableName}</h3>
    //             <Divider />
    //             </Paper>
    //             {/*
    //             <h4>Size {this.props.tableInfo.tableSize}, Category {this.props.tableInfo.category}</h4> */}
    //         </div>
    //     );

    //     const guests = this.props
    //         .tableInfo
    //         .guests
    //         .map((item, index) =>
    //             <Guest
    //                 key={index}
    //                 guestInfo={item}
    //                 />)

    //     return (
    //         <div>

    //            {displayTableInfo}
    //              {/* {guests} */}
    //             {/* <CardsContainer tableInfo={this.props.tableInfo}>

    //             </CardsContainer> */}
    //         </div>
    //     );
    // }
}

Table.propTypes = {

};



export default withStyles(styles)(Table);