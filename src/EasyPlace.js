import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ActionRegion from './ActionRegion';
import AddGuestModal from './AddGuestModal';
import AddTableModal from './AddTableModal';
import AddCategoryModal from './AddCategoryModal';
import GuestList from './GuestList';
import TableList from './TableList';
import './App.css';
import { DragDropContext } from 'react-beautiful-dnd';
import styled from 'styled-components'
const Container = styled.div`
  display: flex;
  flex-direction: row;
`;


const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    row: {
        display: 'flex',
        justifyContent: 'center',
    },
    header: {
        color: 'white',
    },
    title: {
        textAlign: 'center',
        color: 'white',
        fontSize: 25,
        marginTop: 15,

    },
    paper: {
        alignContent: 'left',
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    guests: {
        height: '100vh',
        overflowX: 'hidden', /* Hide horizontal scrollbar */
        overflowY: 'auto', /* Add vertical scrollbar */
    }
});

class EasyPlace extends Component {
    constructor(props) {
        super(props);
        this.state = {
            table: [
                {
                    id: 'table-10',
                    guests: [{
                        id: 'guest-101',
                        name: 'yehuda',
                        photo: '',
                        category: 'Family',
                        confirmed: 0,
                        unconfirmed: 2
                    },
                    {
                        id: 'guest-102',
                        name: 'David',
                        photo: '',
                        category: 'Family',
                        confirmed: 0,
                        unconfirmed: 2
                    },
                    {
                        id: 'guest-103',
                        name: 'Shira',
                        photo: '',
                        category: 'Family',
                        confirmed: 0,
                        unconfirmed: 2
                    }],
                },
            ],
            // tables: [],
            // categories: []
            tables: [
                {
                    id: 'table-11',
                    tableName: 'Guest List',
                    tableSize: 3,
                    category: 'Family',
                    guests: [{
                        id: 'guest-100',
                        name: 'Dror',
                        photo: '',
                        category: 'Family',
                        confirmed: 0,
                        unconfirmed: 2
                    },
                    {
                        id: 'guest-101',
                        name: 'Aia',
                        photo: '',
                        category: 'Family',
                        confirmed: 0,
                        unconfirmed: 2
                    },
                    {
                        id: 'guest-102',
                        name: 'Alon',
                        photo: '',
                        category: 'famly',
                        confirmed: 0,
                        unconfirmed: 2
                    }]
                },
                {
                    id: 'table-22',
                    tableName: 'Family',
                    tableSize: 3,
                    category: 'Family',
                    guests: []
                },
                {
                    id: 'table-33',
                    tableName: 'Friends',
                    tableSize: 3,
                    category: '',
                    guests: [
                        {
                            id: 'guest-301',
                            name: 'Tal',
                            photo: '',
                            category: 'Friends',
                            confirmed: 0,
                            unconfirmed: 2
                        }]
                }
            ],
            categories: [],
            tableorder: []
        }
    }
    // Create a new Guest
    handleAddGuest = (guestInfo) => {
        this.setState(prevState => ({
            guests: prevState
                .guests
                .concat(guestInfo)
        }
        ));
    }
    // Delete a Guest from list (not coming)
    deleteGuest = () => {
        // Add code here
    }
    // Edit Guest info
    editGuestInfo = () => {
        // Add code here
    }

    onGuestDragEnd = result => {
        const { destination, source, draggableId } = result;
        if (!destination) {
            const firstGuests = this.state.table[0];
            const draggableIdIndex = firstGuests.guests.findIndex(p => p.id === draggableId)
            const draggableItem = firstGuests.guests[draggableIdIndex]
            const newGuestsArr = Array.from(firstGuests.guests);
            newGuestsArr.splice(source.index, 1);
            // newGuestArr.splice(destination.index, 0, draggableItem);
            const newGuest = {
                ...firstGuests,
                guests: newGuestsArr,
            }
            const newTableArr = this.state.table.map(tableId => {
                if (firstGuests.id === tableId.id) {
                    return newGuest
                } else {
                    return tableId
                }
            })


            const table = this.state.tables[0];
            //const tableStart = this.state.tables[sourceDroppable];
            // const tableEnd = this.state.tables[destinationDroppable];
            // // console.log(tableStart.id, tableEnd.id)
            // if (tableStart.id === tableEnd.id) {
            //     // console.log('WORKING - the droppable table where it moves '+JSON.stringify(table))
            //     const draggableIdIndex = table.guests.findIndex(p => p.id === draggableId)
            //     // console.log('WORKING draggableIdIndex '+draggableIdIndex)
            //     const draggableItem = table.guests[draggableIdIndex]
            //     // console.log('WORKING draggableItem '+JSON.stringify(draggableItem))
            const newGuestArr = Array.from(table.guests);
            // console.log('WORKING newGuestArr '+JSON.stringify(newGuestArr))
            // newGuestArr.splice(source.index, 1);
            newGuestArr.splice(0, 0, draggableItem);
            // console.log('WORKING newGuestArr AFTER SPLICE '+JSON.stringify(newGuestArr))
            // console.log('draggableItem ' + JSON.stringify(draggableItem))
            const newTable = {
                ...table,
                guests: newGuestArr,
            }
            // console.log('WORKING newTable '+JSON.stringify(newTable))
            const newTablesArr = this.state.tables.map(tableId => {
                // console.log('tableId '+ tableId.id, 'droppableId '+ table.id)
                if (table.id === tableId.id) {
                    return newTable
                } else {
                    return tableId
                }
            })
            const newState = {
                ...this.state,
                tables: newTablesArr,
                table: newTableArr
            }
            this.setState(newState);
           return;
        }
        if (destination.droppableId === source.droppableId) {
            if (destination.index === source.index) {
                return;
            }
            else {
                const firstGuests = this.state.table[0];
                const draggableIdIndex = firstGuests.guests.findIndex(p => p.id === draggableId)
                const draggableItem = firstGuests.guests[draggableIdIndex]
                const newGuestArr = Array.from(firstGuests.guests);
                newGuestArr.splice(source.index, 1);
                newGuestArr.splice(destination.index, 0, draggableItem);
                const newGuest = {
                    ...firstGuests,
                    guests: newGuestArr,
                }
                const newTableArr = this.state.table.map(tableId => {
                    if (firstGuests.id === tableId.id) {
                        return newGuest
                    } else {
                        return tableId
                    }
                })
                const newState = {
                    ...this.state,
                    table: newTableArr
                }
                this.setState(newState);
            }
        } else {
            // const startGuests = Array.from(tableStart.guests)
            // startGuests.splice(source.index, 1);
            // const newStart = {
            //     ...tableStart,
            //     guests: startGuests
            // }
            // const finishGuests = Array.from(tableEnd.guests);
            // const draggableIdIndex = table.guests.findIndex(p => p.id === draggableId)
            // // console.log('WORKING draggableIdIndex '+draggableIdIndex)
            // const draggableItem = table.guests[draggableIdIndex]
            // finishGuests.splice(destination.index, 0, draggableItem)
            // const newFinish = {
            //     ...tableEnd,
            //     guests: finishGuests,
            // }
            // const newTableArr = this.state.tables.map(table => {
            //     if (newFinish.id === table.id || newStart.id === table.id) {
            //         if (newFinish.id === table.id) {
            //             return newFinish;
            //         } else if (newStart.id === table.id) {
            //             return newStart;
            //         }
            //     } else {
            //         return table
            //     }
            // })
            // this.setState({ tables: newTableArr })
        }





        //     const sourceDroppable = this.state.table.guests.findIndex(p => p.id === source.droppableId)
        // const destinationDroppable = this.state.table.guests.findIndex(p => p.id === destination.droppableId)

        // console.log('WORKING - sourceDroppable '+sourceDroppable)
        // const guest = this.state.table.guests[sourceDroppable];
        // const guestStart = this.state.table.guests[sourceDroppable];
        // const guestEnd = this.state.table.guests[destinationDroppable];
        // // console.log(tableStart.id, tableEnd.id)
        // if (guestStart.id === guestEnd.id) {
        //     // console.log('WORKING - the droppable table where it moves '+JSON.stringify(table))
        //     const draggableIdIndex = this.state.table.guests.findIndex(p => p.id === draggableId)
        //     // console.log('WORKING draggableIdIndex '+draggableIdIndex)
        //     const draggableItem = this.state.table.guests[draggableIdIndex]
        //     // console.log('WORKING draggableItem '+JSON.stringify(draggableItem))
        //     const newGuestArr = Array.from(this.state.table.guests);
        //     // console.log('WORKING newGuestArr '+JSON.stringify(newGuestArr))
        //     newGuestArr.splice(source.index, 1);
        //     newGuestArr.splice(destination.index, 0, draggableItem);
        //     // console.log('WORKING newGuestArr AFTER SPLICE '+JSON.stringify(newGuestArr))
        //     // console.log('draggableItem ' + JSON.stringify(draggableItem))
        //     const newGuest = {
        //         ...guest,
        //         guests: newGuestArr,
        //     }
        //     // // console.log('WORKING newTable '+JSON.stringify(newTable))
        //     // const newTableArr = this.state.tables.map(tableId => {
        //     //     // console.log('tableId '+ tableId.id, 'droppableId '+ table.id)
        //     //     if (table.id === tableId.id) {
        //     //         return newTable
        //     //     } else {
        //     //         return tableId
        //     //     }
        //     // })
        //     const newState = {
        //         ...this.state,
        //         table: newGuest
        //     }
        //     this.setState(newState);
    }

    // Function used to create a new Table
    handleAddTable = (tableInfo) => {
        this.setState(prevState => ({
            tables: prevState
                .tables
                .concat(tableInfo)
        }
        ));
    }

    // Function used to delete a Table
    deleteTable = () => {
        // Add code here
    }

    // Edit Table info
    editTableInfo = () => {
        // Add code here
    }

    onTableDragEnd = result => {
        const { destination, source, draggableId } = result;

        if (!destination) {
            return;
        }
        if (destination.droppableId === source.droppableId &&
            destination.index === source.index) {
            return;
        }

        const sourceDroppable = this.state.tables.findIndex(p => p.id === source.droppableId)
        const destinationDroppable = this.state.tables.findIndex(p => p.id === destination.droppableId)

        // console.log('WORKING - sourceDroppable '+sourceDroppable)
        const table = this.state.tables[sourceDroppable];
        const tableStart = this.state.tables[sourceDroppable];
        const tableEnd = this.state.tables[destinationDroppable];
        // console.log(tableStart.id, tableEnd.id)
        if (tableStart.id === tableEnd.id) {
            // console.log('WORKING - the droppable table where it moves '+JSON.stringify(table))
            const draggableIdIndex = table.guests.findIndex(p => p.id === draggableId)
            // console.log('WORKING draggableIdIndex '+draggableIdIndex)
            const draggableItem = table.guests[draggableIdIndex]
            // console.log('WORKING draggableItem '+JSON.stringify(draggableItem))
            const newGuestArr = Array.from(table.guests);
            // console.log('WORKING newGuestArr '+JSON.stringify(newGuestArr))
            newGuestArr.splice(source.index, 1);
            newGuestArr.splice(destination.index, 0, draggableItem);
            // console.log('WORKING newGuestArr AFTER SPLICE '+JSON.stringify(newGuestArr))
            // console.log('draggableItem ' + JSON.stringify(draggableItem))
            const newTable = {
                ...table,
                guests: newGuestArr,
            }
            // console.log('WORKING newTable '+JSON.stringify(newTable))
            const newTableArr = this.state.tables.map(tableId => {
                // console.log('tableId '+ tableId.id, 'droppableId '+ table.id)
                if (table.id === tableId.id) {
                    return newTable
                } else {
                    return tableId
                }
            })
            const newState = {
                ...this.state,
                tables: newTableArr
            }
            this.setState(newState);
        } else {
            const startGuests = Array.from(tableStart.guests)
            startGuests.splice(source.index, 1);
            const newStart = {
                ...tableStart,
                guests: startGuests
            }
            const finishGuests = Array.from(tableEnd.guests);
            const draggableIdIndex = table.guests.findIndex(p => p.id === draggableId)
            // console.log('WORKING draggableIdIndex '+draggableIdIndex)
            const draggableItem = table.guests[draggableIdIndex]
            finishGuests.splice(destination.index, 0, draggableItem)
            const newFinish = {
                ...tableEnd,
                guests: finishGuests,
            }
            const newTableArr = this.state.tables.map(table => {
                if (newFinish.id === table.id || newStart.id === table.id) {
                    if (newFinish.id === table.id) {
                        return newFinish;
                    } else if (newStart.id === table.id) {
                        return newStart;
                    }
                } else {
                    return table
                }
            })
            this.setState({ tables: newTableArr })
        }
    }

    // Function used to create a new Table
    handleAddCategory = (category) => {
        this.setState(prevState => ({
            categories: prevState
                .categories
                .concat(category)
        }
        ));
    }

    // Function used to update local state
    moveGuestToTable = () => {
        // Add code here
    }
    // Function used to update local state
    removeGuestFromTable = () => {
        // Add code here
    }

    // componentWillMount = () => {
    //     // Fetch state from local storage
    //     localStorage.getItem('guests') && this.setState({
    //         'guests': JSON.parse(localStorage.getItem('guests')),
    //         isLoading: false
    //     });
    //     localStorage.getItem('tables') && this.setState({
    //         'tables': JSON.parse(localStorage.getItem('tables')),
    //         isLoading: false
    //     });
    //     localStorage.getItem('categories') && this.setState({
    //         'categories': JSON.parse(localStorage.getItem('categories')),
    //         isLoading: false
    //     });
    // }

    // componentWillUpdate = (nextProps, nextState) => {
    //     // Save state to local storage
    //     localStorage.setItem('guests', JSON.stringify(nextState.guests));
    //     localStorage.setItem('tables', JSON.stringify(nextState.tables));
    //     localStorage.setItem('categories', JSON.stringify(nextState.categories));
    //     localStorage.setItem('timestamp', Date.now());
    // }

    render() {
        const { classes } = this.props;
        return (
            <div style={{ display: "flex", height: '100%' }}>
                {/* <AddGuestModal handleAdd={this.handleAddGuest} categories={this.state.categories} />
                <AddTableModal handleAdd={this.handleAddTable} categories={this.state.categories} />
                <AddCategoryModal handleAdd={this.handleAddCategory} categories={this.state.categories} />  */}
                <div className="sidebar" >
                    <Typography variant="title" className={classes.title} gutterBottom>
                        <i className="material-icons"  >
                            widgets
                                </i><span>&nbsp;&nbsp;</span>
                        Easy Place
                    </Typography>
                    <div>
                        <ActionRegion handleAddGuest={this.handleAddGuest} handleAddCategory={this.handleAddCategory} handleAddTable={this.handleAddTable} categories={this.state.categories} />
                    </div>
                    <DragDropContext onDragEnd={this.onGuestDragEnd}>
                        <div className={classes.guests}>
                            <GuestList table={this.state.table} />
                        </div>
                    </DragDropContext>
                </div>
                <DragDropContext onDragEnd={this.onTableDragEnd}>
                    <div className="teble-canvas" >
                        <Container>
                            <TableList tables={this.state.tables} deleteGuest={this.deleteGuest}
                                deleteTable={this.deleteTable} />
                        </Container>
                    </div>
                </DragDropContext>
            </div >
        );
    }
}

export default withStyles(styles)(EasyPlace);
//export default EasyPlace;