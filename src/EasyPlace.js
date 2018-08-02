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
                    id: 0,
                    tableName: 'Guest List',
                    tableSize: 3,
                    category: '',
                    guests: [
                        {
                            id: 0,
                            name: 'Dror',
                            photo: '',
                            category: '',
                            confirmed: 0,
                            unconfirmed: 2
                        },
                        
                        {
                            id: 1,
                            name: 'Aia',
                            photo: '',
                            category: '',
                            confirmed: 0,
                            unconfirmed: 2
                        },               
                        {
                            id: 2,
                            name: 'Tal',
                            photo: '',
                            category: '',
                            confirmed: 0,
                            unconfirmed: 2
                        }
                    ]
                },
                {
                    id: 1,
                    tableName: 'Family',
                    tableSize: 3,
                    category: '',
                    guests: []
                },
                {
                    id: 2,
                    tableName: 'Friends',
                    tableSize: 3,
                    category: '',
                    guests: []
                }
            ],
            categories: [],
            tableorder:[]

            //!add to function-> when new table is created it is add up to table order
            //?If I add the Guest Arr as a table, i need to do all the nesting in all the code, and change the map to map from tables[1] only
            //?Maybe assign the guest array to a var?
        }
    }

    onDragEnd = result => {

    }

    // Create a new Guest
    handleAddGuest = (guestInfo) => {
        let tables = [...this.state.tables];
        tables[0].guests.push(guestInfo);
        this.setState({tables: tables});
    }

    // Delete a Guest from table
    deleteGuest = (guestId) => {
        console.log(console.log('deleteGuest - guestId: ', guestId));
        // Create a separate copy of the guests array
        const tables = [...this.state.tables];
        let guests;
        let tableIx = 0;
        let guestIx = -1;
        while (tableIx < tables.length) {
            guests = [...this.state.tables[tableIx].guests];
            guestIx = guests.findIndex(guest => {guest.id == guestId});
            if (guestIx !== -1) {
                break; 
            }
            tableIx++;
        }

        if (tableIx !== -1 && guestIx !== -1) {
            guests.splice(guestIx, 1);

            this.setState({ tables: tables }, () => {
                console.log('deleteGuest: ', this.state.tables);
            })
        }
    };

    // Edit Guest info
    editGuestInfo = () => {
        // Add code here
    }

    // Function used to create a new Table
    handleAddTable = (tableInfo) => {
        this.setState(prevState => ({
            tables: prevState
                .tables
                .concat(tableInfo)
        }
        ));

        console.log('handleAddTable: ' + tableInfo);
    }


    // // Function used to delete a Table
    // deleteTable = index => {
    //     console.log(this.state.tables);
    //     return function() {
    //         // Create a separate copy of the tables array
    //         let tables = new [this.state.tables];
    //         console.log('deleteTable - before splice: ', tables, 'index: ', index);
    //         // tables.splice(index, 1);
    //         tables = tables.filter(function(table, i) { 
    //             return i !== index;
    //         })
    //         // console.log('deleteTable - after splice: ', tables, 'index: ', index);

    //         this.setState({ tables: tables }, () => {
    //             console.log('deleteTable: ', this.state.tables);
    //         })
    //     }
    // };

    deleteTable = (event) => {
        // // Create a separate copy of the tables array
        // let tables = [...this.state.tables];
        // console.log('deleteTable - before splice: ', tables, 'index: ', index);
        // // tables.splice(index, 1);
        // tables = tables.filter(function(table, i) { 
        //     return i !== index;
        // })
        // // console.log('deleteTable - after splice: ', tables, 'index: ', index);

        // this.setState({ tables: tables, tableIndex: index }, () => {
        //     console.log('deleteTable: ', this.state.tables);
        // })
    };

    // Edit Table info
    editTableInfo = () => {
        // Add code here
    }

    // Function used to create a new Table
    handleAddCategory = (category) => {
        this.setState(prevState => {
            categories: prevState
                .categories
                .concat(category)
        });
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
    //     localStorage.setItem('tables', JSON.stringify(nextState.tables));
    //     localStorage.setItem('categories', JSON.stringify(nextState.categories));
    //     localStorage.setItem('timestamp', Date.now());
    // }

    render() {
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <div className='App'>
                <Container>
                    <TableList tables={this.state.tables} deleteGuest={this.deleteGuest.bind(this)} />
                </Container>    
                    <AddGuestModal handleAddGuest={this.handleAddGuest} categories={this.state.categories} guestArr={this.state.tables[0]}/>
                    <AddTableModal handleAdd={this.handleAddTable} categories={this.state.categories} tablesArr={this.state.tables}/>
                    <AddCategoryModal handleAdd={this.handleAddCategory} categories={this.state.categories} />
                </div>
            </DragDropContext>
        );
    }
}

export default EasyPlace;