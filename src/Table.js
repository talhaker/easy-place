import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Table extends Component {
    constructor(props) {
        super(this.props);
        this.state = {
            tableSize: 0,
            tableNumber: 0,
            tableName: "",
            category: "",
            guestGroups: []
        }
    }

    // Add a guestGroup to table
    addGuestGroup = () => {
        // Add code here
    }

    // Remove a guestGroup from table
    removeGuestGroup = () => {
        // Add code here
    }

    render() {
        const displayTableInfo = (
            <div>
                <h4>Table {this.props.tableInfo.name}:</h4>
            </div>
        );

        const guestGroups = props
            .guests
            .map((item, index) =>
                <GuestGroup
                    key={index}
                    groupInfo={item}
                />)

        return (
            <div>
                {displayTableInfo}
                {guestGroups}
            </div>
        );
    }
    }
}

Table.propTypes = {

};

export default Table;