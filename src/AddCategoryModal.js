// import React, { Component } from 'react';
// import { Label, FormControl, Button, Row, Col } from 'react-bootstrap';
// import Popup from "reactjs-popup";
// import './Popup.css';

import React, { Component } from 'react';
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
        fontSize: 15,
    },
    menu: {
        width: 200,
    },
    button: {
        margin: theme.spacing.unit,
        width: 160,
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

class AddCategoryModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            category: ""
        }
    }

    addCategory = () => {
        let category = this.state.category;
        this.setState({ category: "", open: false }, () => this.props.handleAddCategory(category));
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleTextChange = event => {
        this.setState({ [event.target.id]: event.target.value })
    }

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
                        Add Category
                    </DialogTitle>
                    {/* <DialogContentText id="alert-dialog-slide-description">
                        Some important textץ
            </DialogContentText> */}
                    <DialogContent>
                        <form className={classes.container} noValidate autoComplete="off">
                            <TextField
                                required
                                id="category"
                                label="Category List"
                                type="text"
                                className={classes.textField}
                                value={this.state.category}
                                onChange={this.handleTextChange}
                                helperText="Some important text"
                                placeholder="Enter table category"
                                margin="normal" />
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
            </Button>
                        <Button onClick={this.addCategory} color="primary">
                            Add
            </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );

    }

    // modalChildren = () => {
    //     return (
    //         <div>
    //             <form className="modal-main">
    //                 <span><Label>Category</Label></span>
    //                 <FormControl
    //                     id="category"
    //                     type="text"
    //                     value={this.state.value}
    //                     placeholder="Enter table category"
    //                     onChange={this.handleTextChange}
    //                 />
    //                 <FormControl.Feedback />
    //                 <Button bsStyle="primary" onClick={this.addCategory}>Add category</Button>
    //             </form>
    //         </div>
    //     );
    // }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <div>
                    <Button
                        variant="contained"
                        color="primary"
                        aria-label="add Category"
                        className={classes.button}
                        onClick={this.handleClickOpen}>
                        <AddIcon className={classes.iconSmall} />
                        add Category </Button>
                </div>
                {this.dialogChildren()}
            </div>
            // <Popup
            //     trigger={<button className="button btn-primary">Add Category</button>}
            //     modal
            //     children={this.modalChildren()}
            //     closeOnDocumentClick
            //     closeOnEscape
            // />
        );
    }
}

export default withStyles(styles)(AddCategoryModal);
