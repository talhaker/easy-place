// import React, { Component } from 'react';
// import { FormGroup, FormControl, ControlLabel, Label, Button, Row, Col } from 'react-bootstrap';
// import Popup from "reactjs-popup";
// import './Popup.css';
import React, { Component, PropTypes } from 'react';
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { withStyles } from "@material-ui/core/styles";

import AddIcon from "@material-ui/icons/Add";
import Icon from "@material-ui/core/Icon";
import DeleteIcon from "@material-ui/icons/Delete";
import NavigationIcon from "@material-ui/icons/Navigation";
import Divider from '@material-ui/core/Divider';
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
        fontSize: 15
    },
    menu: {
        width: 200,
    },
    button: {
        margin: theme.spacing.unit,
        width: 160
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

class AddTableModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            tableName: "",
            tableSize: 12,
            category: "",
            guests: []
        }
    }

    addTable = () => {
        let tableInfo = {
            tableName: this.state.tableName,
            tableSize: this.state.tableSize,
            category: this.state.category,
            guests: this.state.guests
        }
        this.props.handleAddTable(tableInfo);
        this.handleClose();
        
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({
            tableName: "",
            tableSize: 12,
            category: "",
            guests: [],
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
    //         );

    //     return (
    //         <div>
    //             <form className="modal-main">
    //                 <span><Label>Table name</Label></span>
    //                 <FormControl
    //                     id="tableName"
    //                     type="text"
    //                     value={this.state.tableName}
    //                     placeholder="Enter table name"
    //                     onChange={this.handleTextChange}
    //                 />
    //                 <FormControl.Feedback />
    //                 <span><Label>Table size</Label></span>
    //                 <FormControl
    //                     id="tableSize"
    //                     type="text"
    //                     value={this.state.tableSize}
    //                     placeholder="Enter table size"
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
    //                     >
    //                         <option value="select">Select category</option>
    //                         {options}
    //                     </FormControl>
    //                 </FormGroup>
    //                 <Button bsStyle="primary" onClick={this.addTable}>Add to table list</Button>
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
                        Create new table
                    </DialogTitle>
                    <Divider></Divider>
                    {/* <DialogContentText id="alert-dialog-slide-description">
                        Some important textץ
            </DialogContentText> */}
                    <DialogContent>
                        <form className={classes.container} noValidate autoComplete="off">
                            <TextField
                                id="tableName"
                                label="Table name"
                                type="text"
                                className={classes.textField}
                                value={this.state.tableName}
                                placeholder="Enter table name"
                                onChange={this.handleTextChange}
                                margin="normal" />
                            <TextField
                                required
                                select
                                id="Category"
                                label="Table Category"
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
                                id="tableSize"
                                label="Table Size"
                                type="number"
                                value={this.state.tableSize}
                                placeholder="Enter number of pleces"
                                onChange={this.handleTextChange}
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                margin="normal" />
                        </form>

                    </DialogContent>
                    <Divider></Divider>
                    <DialogActions>
                        <Button size="small" onClick={this.handleClose}>Cancel</Button>
                        <Button size="small" color="primary" onClick={this.addTable} > Save </Button>
                        {/* <Button onClick={this.handleClose} color="primary">
                            Cancel
            </Button>
                        <Button  color="primary">
                            Add
            </Button> */}
                    </DialogActions>
                </Dialog>
            </div>
        );

    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <div>
                    <Button
                        variant="contained"
                        color="primary"
                        aria-label="add Category "
                        className={classes.button}
                        onClick={this.handleClickOpen}>
                        <AddIcon className={classes.iconSmall} />
                        Add Table </Button>
                </div>
                {this.dialogChildren()}
            </div>
            // <Popup
            //     trigger={<button className="button btn-primary">Add Table</button>}
            //     modal
            //     children={this.modalChildren()}
            //     closeOnDocumentClick
            //     closeOnEscape
            // />
        );
    }
}

export default withStyles(styles)(AddTableModal);
