import React, { Component, PropTypes } from 'react';
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Typography from '@material-ui/core/Typography';
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
        fontSize: 15,
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
        this.props.handleAddCategory(category);
        this.handleClose();
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({
            category: "",
            open: false
        });
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
                        Create new category
                    </DialogTitle>
                    <Divider></Divider>
                    {/* <DialogContentText id="alert-dialog-slide-description">
                        Some important textץ
            </DialogContentText> */}
                    <DialogContent>
                        <form className={classes.container} noValidate autoComplete="off">
                            <TextField
                                required
                                id="category"
                                label="Category"
                                type="text"
                                className={classes.textField}
                                value={this.state.category}
                                onChange={this.handleTextChange}
                                placeholder="Enter category"
                                margin="normal" />
                        </form>
                    </DialogContent>
                    <Divider></Divider>
                    <DialogActions>
                        <Button size="small" onClick={this.handleClose}>Cancel</Button>
                        <Button size="small" color="primary" onClick={this.addCategory} > Save </Button>
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
                        <i className="material-icons">
                        bookmark_border
                        </i><span>&nbsp;&nbsp;</span>
                        Add Category
                    </Button>
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
