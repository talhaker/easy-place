import React, { Component } from 'react';

import AddGuestModal from './AddGuestModal.js';
import AddTableModal from './AddTableModal.js';
import AddCategoryModal from './AddCategoryModal.js';
import TableList from './TableList';

import { DragDropContext } from 'react-beautiful-dnd';
//!!Organizing temp layoesut
import styled from 'styled-components'

//!!Organizing temp layout
const Container = styled.div`
    display: flex;
    flex-direction: row;
`;

class EasyPlace extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tables: [
                {
                    id: 'table-0',
                    tableName: 'Guest List',
                    tableSize: 500,
                    category: '',
                    guests: [
                        {
                            id: 'guest-0',
                            name: 'Dror',
                            photo: '',
                            category: '',
                            confirmed: 2,
                            unconfirmed: 2
                        },
                        {
                            id: 'guest-1',
                            name: 'Aia',
                            photo: '',
                            category: '',
                            confirmed: 1,
                            unconfirmed: 2
                        },               
                        {
                            id: 'guest-2',
                            name: 'Tal',
                            photo: '',
                            category: '',
                            confirmed: 5,
                            unconfirmed: 2
                        }
                    ]
        }
            ],
            // tables: [
            //     {
            //         id: 'table-0',
            //         tableName: 'Guest List',
            //         tableSize: 3,
            //         category: '',
            //         guests: [
            //             {
            //                 id: 'guest-0',
            //                 name: 'Dror',
            //                 photo: '',
            //                 category: '',
            //                 confirmed: 2,
            //                 unconfirmed: 2
            //             },
                        
            //             {
            //                 id: 'guest-1',
            //                 name: 'Aia',
            //                 photo: '',
            //                 category: '',
            //                 confirmed: 1,
            //                 unconfirmed: 2
            //             },               
            //             {
            //                 id: 'guest-2',
            //                 name: 'Tal',
            //                 photo: '',
            //                 category: '',
            //                 confirmed: 5,
            //                 unconfirmed: 2
            //             }
            //         ]
            //     },
            //     {
            //         id: 'table-1',
            //         tableName: 'Family',
            //         tableSize: 12,
            //         category: '',
            //         guests: []
            //     },
            //     {
            //         id: 'table-2',
            //         tableName: 'Friends',
            //         tableSize: 12,
            //         category: '',
            //         guests: []
            //     }
            // ],
            categories: [],
            tableorder:[]

            //!add to function-> when new table is created it is add up to table order
            //?If I add the Guest Arr as a table, i need to do all the nesting in all the code, and change the map to map from tables[1] only
            //?Maybe assign the guest array to a var?
        }
    }

    onDragEnd = result => {
        const { destination, source, draggableId } = result;

        if (!destination) {
            return;
        }

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        const sourceDroppable = this.state.tables.findIndex(p=> p.id===source.droppableId)
        const destinationDroppable = this.state.tables.findIndex(p=> p.id===destination.droppableId)

        // console.log('WORKING - sourceDroppable '+sourceDroppable)
        const table = this.state.tables[sourceDroppable];

        const tableStart = this.state.tables[sourceDroppable];
        const tableEnd = this.state.tables[destinationDroppable];
        // console.log(tableStart.id, tableEnd.id)

        if (tableStart.id===tableEnd.id) {

            // console.log('WORKING - the droppable table where it moves '+JSON.stringify(table))
            const draggableIdIndex = table.guests.findIndex(p => p.id===draggableId)
            // console.log('WORKING draggableIdIndex '+draggableIdIndex)
            const draggableItem = table.guests[draggableIdIndex]
            // console.log('WORKING draggableItem '+JSON.stringify(draggableItem))

    
            const newGuestArr = Array.from(table.guests);
            // console.log('WORKING newGuestArr '+JSON.stringify(newGuestArr))

            
            newGuestArr.splice(source.index, 1);
            newGuestArr.splice(destination.index, 0, draggableItem);
            // console.log('WORKING newGuestArr AFTER SPLICE '+JSON.stringify(newGuestArr))
                console.log('draggableItem '+JSON.stringify(draggableItem))
    
            const newTable = {
                ...table,
                    guests: newGuestArr,
            }
            // console.log('WORKING newTable '+JSON.stringify(newTable))
            const newTableArr = this.state.tables.map(tableId => {
                // console.log('tableId '+ tableId.id, 'droppableId '+ table.id)
                if(table.id === tableId.id){
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
        }
        else {

            const startGuests = Array.from(tableStart.guests)
            startGuests.splice(source.index, 1);
            const newStart = {
                ...tableStart,
                guests: startGuests
            }

            const finishGuests = Array.from(tableEnd.guests);
            const draggableIdIndex = table.guests.findIndex(p => p.id===draggableId)
            // console.log('WORKING draggableIdIndex '+draggableIdIndex)
            const draggableItem = table.guests[draggableIdIndex]
            finishGuests.splice(destination.index, 0, draggableItem)

            const newFinish = {
                ...tableEnd,
                guests: finishGuests,
            }

            const newTableArr = this.state.tables.map(table=> {
                if(newFinish.id === table.id || newStart.id === table.id) {
                    if(newFinish.id === table.id) {
                        return newFinish;
                    }
                    else if (newStart.id === table.id) {
                        return newStart;
                    }
                }
                else {
                    return table
                }
            })

            this.setState({tables: newTableArr})
        }
    }

    // Create a new Guest
    handleAddGuest = (guestInfo) => {
        let tables = [...this.state.tables];
        tables[0].guests.push(guestInfo);
        this.setState({tables: tables});
    }

    // Edit Guest info
    editGuestInfo = () => {
        // Add code here
    }

    // Function used to create a new Table
    handleAddTable = (tableInfo) => {
        let tables = [...this.state.tables];
        tables.push(tableInfo);
        this.setState({tables: tables});

        console.log('handleAddTable: ' + tableInfo);
    }


    // Function used to create a new Table
    handleAddCategory = (category) => {
        let categories = [...this.state.categories];
        categories.push(category);
        this.setState({categories: categories});
    }

    deleteGuest = (guestId, tableId) => {
        let stateArr = [...this.state.tables]
        const afterDeleteArr = stateArr.map((table, tableIndex) => {
            if (table.id === tableId) {
                table.guests.forEach((guest ,guestIndex) => {
                    if(guest.id === guestId) {
                        stateArr[tableIndex].guests.splice(guestIndex ,1) 
                    }
                }) 
            } return table; 
        })
            this.setState({tables: afterDeleteArr});
    };

    deleteTable = (tableId) => {
        let stateArr = {...this.state}

        const afterDeleteArr = stateArr.tables.map((table, tableIndex) => {
            if(table.id === tableId) {
                stateArr.tables.splice(tableIndex, 1)
            }else {
                return table;
            }
        }) 
        this.setState(afterDeleteArr);
    } 

    componentWillMount = () => {
        // Fetch state from local storage
        localStorage.getItem('tables') && this.setState({
            'tables': JSON.parse(localStorage.getItem('tables')),
            isLoading: false
        });
        localStorage.getItem('categories') && this.setState({
            'categories': JSON.parse(localStorage.getItem('categories')),
            isLoading: false
        });
    }

    componentWillUpdate = (nextProps, nextState) => {
        // Save state to local storage
        localStorage.setItem('tables', JSON.stringify(nextState.tables));
        localStorage.setItem('categories', JSON.stringify(nextState.categories));
        localStorage.setItem('timestamp', Date.now());
    }

    render() {
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <div className='App'>
                    <Container>
                        <TableList
                            tables={this.state.tables}
                            deleteGuest={this.deleteGuest}
                            deleteTable={this.deleteTable}
                        />
                    </Container>
                    <AddGuestModal handleAdd={this.handleAddGuest} categories={this.state.categories} guestArr={this.state.tables[0]} theState={this.state}/>
                    <AddTableModal handleAdd={this.handleAddTable} categories={this.state.categories} tablesArr={this.state.tables}/>
                    <AddCategoryModal handleAdd={this.handleAddCategory} categories={this.state.categories} />
                </div>
            </DragDropContext>
        );
    }
}

export default EasyPlace;

