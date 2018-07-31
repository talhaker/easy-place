import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ActionRegion from './ActionRegion';
import AddGuestModal from './AddGuestModal.js';
import GuestList from './GuestList.js';
import TableList from './TableList.js';
import './App.css';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        alignContent: 'left',
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,

    },
});

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

    // Create a new Guest
    handleAddGuest = (guestInfo) => {
        this.setState(prevState => ({
            guests: prevState
                .guests
                .concat(guestInfo)
        }
        ));

        console.log('handleAddGuest: ' + guestInfo);
    }

    // Delete a Guest from list (not coming)
    deleteGuest = () => {
        // Add code here
    }

    // Edit Guest info
    editGuestInfo = () => {
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
    moveGuestToTable = () => {
        // Add code here
    }

    // Function used to update local state
    removeGuestFromTable = () => {
        // Add code here
    }



    render() {
        const { classes } = this.props;
        return (
            <div>
                <div className="sidebar" >
                    <header>
                        <h1>Easy Place</h1>
                    </header>
                      <ActionRegion/>
                    
                    {/* <Grid container spacing={3}>
                        <Grid item xs={1}>
                            
                        </Grid>
                        <Grid item xs={1}>
                            <Paper className={classes.paper}>
                                <AddGuestModal show={this.state.showAddGuestModal} handleAdd={this.handleAddGuest} />
                            </Paper>
                        </Grid>

                    </Grid> */}
                    <GuestList guests={this.state.guests} />
                </div>

                <div className="teble-canvas" >
                    <TableList guests={this.state.guests} tables={this.state.tables} />
                </div>
            </div >
        );
    }
}

export default withStyles(styles)(EasyPlace);
//export default EasyPlace;