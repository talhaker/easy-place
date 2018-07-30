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

    componentWillMount = () => {
        // Fetch state from local storage
        localStorage.getItem('guests') && this.setState({
            'guests': JSON.parse(localStorage.getItem('guests')),
            isLoading: false
        });
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
        localStorage.setItem('guests', JSON.stringify(nextState.guests));
        localStorage.setItem('tables', JSON.stringify(nextState.tables));
        localStorage.setItem('categories', JSON.stringify(nextState.categories));
        localStorage.setItem('timestamp', Date.now());
    }

    render() {
        return (
            <div>
                <h1><i>Welcome to EasyPlace</i></h1>
                <h3><i>The Ultimate App for Easily Seating Your Guests!</i></h3>
                <GuestList guests={this.state.guests} />
                <TableList guests={this.state.guests} tables={this.state.tables} />
                <AddGuestModal handleAdd={this.handleAddGuest} categories={this.state.categories} />
                <AddTableModal handleAdd={this.handleAddTable} categories={this.state.categories} />
                <AddCategoryModal handleAdd={this.handleAddCategory} categories={this.state.categories} />

            </div>
        );
    }
}

export default EasyPlace;