import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ActionRegion from './ActionRegion';
import AddGuestModal from './AddGuestModal';
import AddTableModal from './AddTableModal';
import AddCategoryModal from './AddCategoryModal';
import GuestList from './GuestList';
import TableList from './TableList';
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
            tables: [],
            categories: []
        }
    }

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
    handleAddTable = (tableInfo) => {
        this.setState(prevState => ({
            tables: prevState
                .tables
                .concat(tableInfo)
        }
        ));

        console.log('handleAddTable: ' + tableInfo);
    }


    // Function used to delete a Table
    deleteTable = () => {
        // Add code here
    }

    // Edit Table info
    editTableInfo = () => {
        // Add code here
    }

    // Function used to create a new Table
    handleAddCategory = (category) => {
        this.setState(prevState => ({
            categories: prevState
                .categories
                .concat(category)
        }
        ));

        console.log('handleAddTable: ' + category);
    }

    // Function used to update local state
    moveGuestToTable = () => {
        // Add code here
    }

    // Function used to update local state
    removeGuestFromTable = () => {
        // Add code here
    }

    componentWillMount = () => {
        // Fetch state from local storage
        localStorage.getItem('guests') && this.setState({
            'guests': JSON.parse(localStorage.getItem('guests')),
            isLoading: false
        });
        localStorage.getItem('tables') && this.setState({
            'tables': JSON.parse(localStorage.getItem('tables')),
            isLoading: false
        });
        localStorage.getItem('categories') && this.setState({
            'categories': JSON.parse(localStorage.getItem('categories')),
            isLoading: false
        });
    }

    componentWillUpdate = (nextProps, nextState) => {
        // Save state to local storage
        localStorage.setItem('guests', JSON.stringify(nextState.guests));
        localStorage.setItem('tables', JSON.stringify(nextState.tables));
        localStorage.setItem('categories', JSON.stringify(nextState.categories));
        localStorage.setItem('timestamp', Date.now());
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                {/* <AddGuestModal handleAdd={this.handleAddGuest} categories={this.state.categories} />
                <AddTableModal handleAdd={this.handleAddTable} categories={this.state.categories} />
                <AddCategoryModal handleAdd={this.handleAddCategory} categories={this.state.categories} /> */}
                <div className="sidebar" >
                    <header>
                    <i class="material-icons">
                                widgets
                                </i><span>&nbsp;&nbsp;</span>
                    <Typography variant="title" gutterBottom>
                    
                            Easy Place
                             </Typography>
                    </header>
                    <ActionRegion handleAddGuest={this.handleAddGuest} handleAddCategory={this.handleAddCategory} handleAddTable={this.handleAddTable} categories={this.state.categories} />

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
                    <TableList tables={this.state.tables} />
                </div>
            </div >
        );
    }
}

export default withStyles(styles)(EasyPlace);
//export default EasyPlace;