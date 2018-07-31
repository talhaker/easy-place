import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import AddIcon from "@material-ui/icons/Add";
import Icon from "@material-ui/core/Icon";
import DeleteIcon from "@material-ui/icons/Delete";
import NavigationIcon from "@material-ui/icons/Navigation";

import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';


const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    menu: {
        width: 200,
    },
    button: {
        margin: theme.spacing.unit
    },
    extendedIcon: {
        marginRight: theme.spacing.unit
    }
});
const currencies = [
    {
        value: 'USD',
        label: 'Work Team',
    },    
    {
        value: 'BTC',
        label: 'famliy',
    },
    {
        value: 'JPY',
        label: 'friends',
    },
];

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class AlertDialogSlide extends React.Component {
    state = {
        open: false
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Button
                    variant="extendedFab"
                    color="primary"
                    aria-label="Add"
                    className={classes.button}
                    onClick={this.handleClickOpen}>
                    <AddIcon className={classes.extendedIcon} />
                    add guest </Button>
                <Dialog
                    open={this.state.open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description">
                    <DialogTitle id="alert-dialog-slide-title">
                        Add Guest
                    </DialogTitle>
                    {/* <DialogContentText id="alert-dialog-slide-description">
                        Some important textץ
            </DialogContentText> */}
                    <DialogContent>
                        <form className={classes.container} noValidate autoComplete="off">
                            <TextField
                                required
                                id="name"
                                label="Guest name"
                                type="text"
                                className={classes.textField}
                                //value={this.state.value}
                                helperText="Some important text"
                                placeholder="Enter guest name"
                                //onChange={(event) => { this.setState({guestName: event.target.value}) }} 
                                //onChange={this.handleChange('name')}
                                margin="normal" />
                            <TextField
                                required
                                id="Category"
                                label="Category"
                                type="text"
                                select
                                className={classes.textField}
                                // value={this.state.value}
                                placeholder="Enter guest category"
                                // onChange={(event) => { this.setState({category: event.target.value}) }}
                                SelectProps={{
                                    MenuProps: {
                                        className: classes.menu,
                                    },
                                }}
                                margin="normal">
                                {currencies.map(option => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField
                                id="confirmedGuests"
                                label="confirmed Guests"
                                type="number"
                                value={this.state.value}
                                placeholder="Enter number"
                              //  onChange={(event) => { this.setState({ confirmedGuests: event.target.value }) }}

                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                margin="normal" />
                            <TextField
                                id="number"
                                label="unconfirmed Guests"
                                type="number"
                                value={this.state.value}
                                placeholder="Enter number"
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                //onChange={(event) => { this.setState({unconfirmedGuests: event.target.value}) }}
                                margin="normal" />
                            {/* <TextField
          id="search"
          label="Search field"
          type="search"
          className={classes.textField}
          margin="normal"
        /> */}
                        </form>

                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
            </Button>
                        <Button onClick={this.handleClose} color="primary">
                            Add
            </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default withStyles(styles)(AlertDialogSlide);
