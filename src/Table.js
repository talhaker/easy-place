import React, { Component } from 'react';
import Guest from './Guest';

// import PropTypes from 'prop-types';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableSize: 0,
            tableNumber: 0,
            tableName: "",
            category: "",
            guests: []
        }
    }

    // Add a guest to table
    addGuest = () => {
        // Add code here
    }

    // Remove a guest from table
    removeGuest = () => {
        // Add code here
    }

    render() {
        const displayTableInfo = (
            <div>
                <h4>Table {this.props.tableInfo.name}:</h4>
            </div>
        );

        const guests = this.props
            .guests
            .map((item, index) =>
                <Guest
                    key={index}
                    guestInfo={item}
                />)

        return (
            <div>
                {displayTableInfo}
                {guests}
            </div>
        );
    }
}

Table.propTypes = {

};

export default Table;