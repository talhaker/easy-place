import React, { Component } from 'react';
import Guest from './Guest';

// import PropTypes from 'prop-types';

class Table extends Component {

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
                <h3>Table {this.props.tableInfo.tableName}</h3>
                <h4>Size {this.props.tableInfo.tableSize}, Category {this.props.tableInfo.category}</h4>
            </div>
        );

        const guests = this.props
            .tableInfo
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