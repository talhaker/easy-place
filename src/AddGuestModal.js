import React, { Component } from 'react';
// import { Label, FormControl, Button, Row, Col } from 'react-bootstrap';
// import Popup from "reactjs-popup";
// import './Popup.css';

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

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class AddGuestModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,

            // guestNames: [],
            guestName: "",
            photo: "",
            category: "",
            confirmedGuests: 0,
            unconfirmedGuests: 0
        }
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    addGuest = (event) => {
        let guestInfo = {
            name: this.state.guestName,
            photo: this.state.photo,
            category: this.state.category,
            confirmed: this.state.confirmedGuests,
            unconfirmed: this.state.unconfirmedGuests
        }

        this.props.handleAdd(guestInfo)
    }

    // modalChildren = () => {
    //     return (
    //         <div>
    //             <form className="modal-main">
    //                 <span><Label>Guest name</Label></span>
    //                 <FormControl
    //                     id="name"
    //                     type="text"
    //                     value={this.state.value}
    //                     placeholder="Enter guest name"
    //                     onChange={(event) => { this.setState({ guestName: event.target.value }) }}
    //                 />
    //                 <FormControl.Feedback />
    //                 <span><Label>Category</Label></span>
    //                 <FormControl
    //                     id="category"
    //                     type="text"
    //                     value={this.state.value}
    //                     placeholder="Enter guest category"
    //                     onChange={(event) => { this.setState({ category: event.target.value }) }}
    //                 />
    //                 <FormControl.Feedback />
    //                 <span><Label>Number of confirmed Guests</Label></span>
    //                 <FormControl
    //                     id="confirmedGuests"
    //                     type="text"
    //                     value={this.state.value}
    //                     placeholder="Enter number of confirmed Guests"
    //                     onChange={(event) => { this.setState({ confirmedGuests: event.target.value }) }}
    //                 />
    //                 <FormControl.Feedback />
    //                 <span><Label>Number of unconfirmed Guests</Label></span>
    //                 <FormControl
    //                     id="unconfirmedGuests"
    //                     type="text"
    //                     value={this.state.value}
    //                     placeholder="Enter number of unconfirmed Guests"
    //                     onChange={(event) => { this.setState({ unconfirmedGuests: event.target.value }) }}
    //                 />
    //                 <FormControl.Feedback />
    //                 <Button bsStyle="primary" onClick={this.addGuest}>Add to guest list</Button>
    //             </form>
    //         </div>
    //     );
    // }

    dialogChildren = () => {
        const { classes } = this.props;
        return (
            <div>
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
                                value={this.state.value}
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
                                {/* {currencies.map(option => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))} */}
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



    render() {
        const { classes } = this.props;
        // const AddGuestModal = ({ handleClose, show, children }) => {
        // const showHideClassName = this.props.show ? "modal display-block" : "modal display-none";
        return (
            <div>
                <div>
                    <Button
                        variant="extendedFab"
                        color="primary"
                        aria-label="Add"
                        className={classes.button}
                        onClick={this.handleClickOpen}>
                        <AddIcon className={classes.extendedIcon} />
                        add guest </Button>
                </div>
{this.dialogChildren()}
            </div>
            // <Popup
            //     trigger={<button className="button btn-primary"> Add Guest </button>}
            //     modal
            //     closeOnDocumentClick
            // >
            //     {this.modalChildren()}
            // </Popup>
        );
    }
}

export default withStyles(styles)(AddGuestModal);