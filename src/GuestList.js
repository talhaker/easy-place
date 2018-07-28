import React, { Component } from 'react';
import GuestGroup from './GuestGroup';

class GuestList extends Component {
    // Add an existing GuestGroup back (from table) to list
    addGuestGrout = () => {
        // Add code here
    }

    // Remove an existing GuestGroup (moved to table) from list
    removeGuestGroup = () => {
        // Add code here
    }

    render() {
        const guestGroups = this.props
            .guests
            .map((item, index) =>
                <GuestGroup
                    key={index}
                    groupInfo={item}
                />)
        return (
            <div>
                {guestGroups}
            </div>
        );
    }
}

export default GuestList;