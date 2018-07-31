import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import AddIcon from "@material-ui/icons/Add";
import Icon from "@material-ui/core/Icon";
import DeleteIcon from "@material-ui/icons/Delete";
import NavigationIcon from "@material-ui/icons/Navigation";

const styles = theme => ({
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

class AlertDialogSlide extends React.Component {
    state = {
        open: false,
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
                    onClick={this.handleClickOpen} >
                    <AddIcon className={classes.extendedIcon} />
                    add guest
        </Button>
                {/* <Button onClick={this.handleClickOpen}>Slide in alert dialog</Button> */}
                <Dialog
                    open={this.state.open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle id="alert-dialog-slide-title">
                        {"Use Google's location service?"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            Let Google help apps determine location. This means sending anonymous location data to
                            Google, even when no apps are running.
            </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Disagree
            </Button>
                        <Button onClick={this.handleClose} color="primary">
                            Agree
            </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default AlertDialogSlide;
