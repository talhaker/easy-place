import React, { Component } from 'react';

import AddGuestModal from './AddGuestModal.js';
import AddTableModal from './AddTableModal.js';
import AddCategoryModal from './AddCategoryModal.js';
import GuestList from './GuestList.js';
import TableList from './TableList.js';

class EasyPlace extends Component {
    constructor(props) {
        super(props);
        this.state = {
            guests: [],
            tables: [],
            categories: []
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

        console.log('handleAddGuest: ' + guestInfo);
    }

    // Delete a Guest from list (not coming)
    deleteGuest = () => {
        // Add code here
    }

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


    // Function used to delete a Table
    deleteTable = () => {
        // Add code here
    }

    // Edit Table info
    editTableInfo = () => {
        // Add code here
    }

    // Function used to create a new Table
    handleAddCategory = (category) => {
        this.setState(prevState => ({
            categories: prevState
                .categories
                .concat(category)
            }
        ));

        console.log('handleAddTable: ' + category);
    }

    // Function used to update local state
    moveGuestToTable = () => {
        // Add code here
    }

    // Function used to update local state
    removeGuestFromTable = () => {
        // Add code here
    }

    render() {
        return (
            <div>
                <h1><i>Welcome to EasyPlace</i></h1>
                <h3><i>The Ultimate App for Easily Seating Your Guests!</i></h3>
                <GuestList guests={this.state.guests} />
                <TableList guests={this.state.guests} tables={this.state.tables} />
                <AddGuestModal handleAdd={this.handleAddGuest} />
                <AddTableModal handleAdd={this.handleAddTable} />
                <AddCategoryModal handleAdd={this.handleAddCategory} />

            </div>
        );
    }
}

export default EasyPlace;