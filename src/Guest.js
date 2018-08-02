import React, { Component } from 'react';
import { Draggble } from 'react-beautiful-dnd';

class Guest extends Component {


    render() {
        return (
            <div>
                <p>Name: {this.props.guest.name}</p>
                <p>Category: {this.props.guest.category}</p>
                <p>Confirmed/Unconfirmed: {this.props.guest.confirmed}/{this.props.guest.unconfirmed}</p>
            </div>
        );
    }
}



export default Guest;