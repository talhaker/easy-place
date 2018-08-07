import React, { Component } from 'react';

import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

import { withStyles } from "@material-ui/core/styles";

import AddIcon from "@material-ui/icons/Add";
import Icon from "@material-ui/core/Icon";
import DeleteIcon from "@material-ui/icons/Delete";
import NavigationIcon from "@material-ui/icons/Navigation";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';

import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import uniqueId from 'react-html-id';

let counter = 0;

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
        fontSize: 15
    },
    menu: {
        width: 200,
    },
    button: {
        backgroundColor: '#4A6572',
        // margin: theme.spacing.unit,
        width: 160,
        fontSize: 13,
    },
    extendedIcon: {
        marginRight: theme.spacing.unit
    },
    iconSmall: {
        fontSize: 15,
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
            id: '',
            guestName: "",
            photo: "",
            category: "",
            confirmedGuests: 0,
            unconfirmedGuests: 0
        }
        uniqueId.enableUniqueIds(this);
    }

    addGuest = (event) => {
        let guestInfo = {
            id: 'guest-'+counter++,
            name: this.state.guestName,
            photo: this.state.photo,
            category: this.state.category,
            confirmed: this.state.confirmedGuests,
            unconfirmed: this.state.unconfirmedGuests
        }
        this.handleClose();
        this.props.handleAddGuest(guestInfo);
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({
            id: '',
            guestName: "",
            photo: "",
            category: "",
            confirmedGuests: "",
            unconfirmedGuests: "",
            open: false
        });
    };

    handleTextChange = event => {
        this.setState({ [event.target.id]: event.target.value })
    }

    categoryReference = elem => {
        this.inputElem = elem;
    }

    categoryChange = (event) => {
        this.setState({ category: event.target.value });
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    // modalChildren = () => {
    //     const options = this.props
    //         .categories
    //         .sort()
    //         .map((category, index) =>
    //             <option key={index} value={category}>
    //                 {category}
    //             </option>
    //     );

    //     return (
    //         <div>
    //             <form className="modal-main">
    //                 <span><Label>Guest name</Label></span>
    //                 <FormControl
    //                     id="guestName"
    //                     type="text"
    //                     value={this.state.guestName}
    //                     placeholder="Enter guest name"
    //                     onChange={this.handleTextChange}
    //                 />
    //                 <FormControl.Feedback />
    //                 <FormGroup>
    //                     <ControlLabel>Category</ControlLabel>
    //                     <FormControl
    //                         id="category"
    //                         type="text"
    //                         componentClass="select"
    //                         placeholder="Select category"
    //                         inputRef={this.categoryReference}
    //                         onChange={this.categoryChange}
    //                         >
    //                         <option value="select">Select category</option>
    //                         {options}
    //                     </FormControl>
    //                 </FormGroup>
    //                 <span><Label>Number of confirmed Guests</Label></span>
    //                 <FormControl
    //                     id="confirmedGuests"
    //                     type="text"
    //                     value={this.state.confirmedGuests}
    //                     placeholder="Enter number of confirmed Guests"
    //                     onChange={this.handleTextChange}
    //                 />
    //                 <FormControl.Feedback />
    //                 <span><Label>Number of unconfirmed Guests</Label></span>
    //                 <FormControl
    //                     id="unconfirmedGuests"
    //                     type="text"
    //                     value={this.state.unconfirmedGuests}
    //                     placeholder="Enter number of unconfirmed Guests"
    //                     onChange={this.handleTextChange}
    //                 />
    //                 <FormControl.Feedback />
    //                 <Button bsStyle="primary" onClick={this.addGuest}>Add to guest list</Button>
    //             </form>

    //          </div>
    //      );
    //  }

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
                        Add guest
                    </DialogTitle>
                    <Divider></Divider>
                    {/* <DialogContentText id="alert-dialog-slide-description">
                        Some important textץ
            </DialogContentText> */}
                    <DialogContent>
                        <form className={classes.container} noValidate autoComplete="off">
                            <TextField
                                required
                                id="guestName"
                                label="Guest name"
                                type="text"
                                className={classes.textField}
                                value={this.state.guestName}
                                placeholder="Enter guest name"
                                //onChange={this.handleChange('name')}
                                onChange={this.handleTextChange}
                                margin="normal" />
                            <TextField
                                required
                                select
                                id="category"
                                label="Category"
                                type="text"
                                className={classes.textField}
                                value={this.state.category}
                                placeholder="Select category"
                                onChange={this.categoryChange}
                                SelectProps={{
                                    MenuProps: {
                                        className: classes.menu,
                                    },
                                }}
                                margin="normal">
                                {this.props.categories
                                    .sort().map((category, index) =>
                                        <MenuItem key={index} value={category}>
                                            {category}
                                        </MenuItem>
                                    )}
                            </TextField>
                            <TextField
                                id="confirmedGuests"
                                label="confirmed Guests"
                                type="number"
                                value={this.state.confirmedGuests}
                                placeholder="Enter number"
                                onChange={this.handleTextChange}
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                margin="normal" />
                            <TextField
                                id="unconfirmedGuests"
                                label="unconfirmed Guests"
                                type="number"
                                value={this.state.unconfirmedGuests}
                                placeholder="Enter number"
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onChange={this.handleTextChange}
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
                    <Divider />
                    <DialogActions>
                        <Button size="small" onClick={this.handleClose}>Cancel</Button>
                        <Button size="small" color="primary" onClick={this.addGuest} > Save </Button>
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
                        variant="contained"
                        color="primary"
                        aria-label="add Category "
                        className={classes.button}
                        onClick={this.handleClickOpen}>
                        <i className="material-icons">
                            supervised_user_circle
                        </i> <span>&nbsp;&nbsp;</span>Add Guest
                    </Button>
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