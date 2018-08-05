import React, { Component } from 'react';
import Guest from './Guest';
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
    root: {
        width: 330,
        overflowX: 'hidden', /* Hide horizontal scrollbar */
        overflowY: 'auto', /* Add vertical scrollbar */
        position: 'relative',
        height: 800,
    },
});





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
        const { classes } = this.props;
        const guests = this.props
            .guests
            .map((item, index) =>
                <Guest
                    key={index}
                    guestInfo={item}
                />)
        return (
            <div  className={classes.root}>
                {guests}
            </div>
        );
    }
}
export default withStyles(styles)(GuestList);