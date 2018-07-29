import React, { Component } from 'react';
import Guest from './Guest';

class GuestList extends Component {
    // Add an existing Guest back (from table) to list
    addGuest = () => {
        // Add code here
    }

    // Remove an existing Guest (moved to table) from list
    removeGuest = () => {
        // Add code here
    }

    render() {
        const guests = this.props
            .guests
            .map((item, index) =>
                <Guest
                    key={index}
                    guestInfo={item}
                />)
        return (
            <div>
                {guests}
            </div>
        );
    }
}

export default GuestList;