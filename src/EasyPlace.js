import React, { Component } from 'react';

import AddGuestModal from './AddGuestModal.js';
import GuestList from './GuestList.js';
import TableList from './TableList.js';

class EasyPlace extends Component {
    constructor(props) {
        super(props);
        this.state = {
            guests: [],
            tables: []
            // ,
            // showAddGuestModal: false
        }
    }

    // showAddGuestModal = () => {
    //     this.setState({ showAddGuestModal: true });
    // };
    
    // hideAddGuestModal = () => {
    //     this.setState({ showAddGuestModal: false });
    // };

    // Create a new GuestGroup
    handleAddGuest = (guestInfo) => {
        this.setState(prevState => ({
            guests: prevState
                .guests
                .concat(guestInfo)
            }
        ));

        console.log('handleAddGuest: ' + guestInfo);
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
                <h3>Welcome to EasyPlace - the ultimate app for easily seating your guests!</h3>
                <GuestList guests={this.state.guests} />
                <TableList guests={this.state.guests} tables={this.state.tables} />
                <AddGuestModal show={this.state.showAddGuestModal} handleAdd={this.handleAddGuest}>
                </AddGuestModal>

            </div>
        );
    }
}

export default EasyPlace;