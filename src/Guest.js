import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class Guest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            guestName: "",
            category: "",
            confirmed: 0,
            unconfirmed: 0
        }
    }

    // Edit Guest info
    editGuest = () => {
        // Add code here
    }

    render() {
        return (
            <div>
                <p>Name: {this.props.guestInfo.name}</p>
                <p>Category: {this.props.guestInfo.category}</p>
                <p>Confirmed/Unconfirmed: {this.props.guestInfo.confirmed}/{this.props.guestInfo.unconfirmed}</p>
            </div>
        );
    }
}

// Guest.propTypes = {

// };

export default Guest;