import React, { Component } from 'react';
import GuestList from './GuestList.js';
import TableList from './TableList.js';

class EasyPlace extends Component {
    constructor(props) {
        super(props);
        this.state = {
            guests: [],
            tables: []
        }
    }

    // Create a new GuestGroup
    createGuestGrout = () => {
        // Add code here
    }

    // Delete a GuestGroup from list (not coming)
    deleteGuestGrout = () => {
        // Add code here
    }

    // Edit GuestGroup info
    editGuestGroupInfo = () => {
        // Add code here
    }

    // Function used to create a new Table
    createTable = () => {
        // Add code here
    }

    // Function used to delete a Table
    deleteTable = () => {
        // Add code here
    }

    // Edit Table info
    editTableInfo = () => {
        // Add code here
    }

    // Function used to update local state
    moveGuestGroupToTable = () => {
        // Add code here
    }

    // Function used to update local state
    removeGuestGroupFromTable = () => {
        // Add code here
    }

    render() {
        return (
            <div>
                <h2>Welcome to EasyPlace - the ultimate app for easy planning and seating of your guests!</h2>
                <GuestList guests={this.state.guests} />
                <TableList guests={this.state.guests} tables={this.state.tables} /> 
            </div>
        );
    }
}

export default EasyPlace;