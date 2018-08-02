import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Paper,
    Typography,
    TextField,
    Button,
    withStyles,
    Divider,
    Badge
} from '@material-ui/core'




import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

//import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Chip from '@material-ui/core/Chip';
import IconButton from '@material-ui/core/IconButton';
import MailIcon from '@material-ui/icons/Mail';
import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
    root: {
        width: 280,
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        maxWidth: 100,
        height: 30
    },
    heading: {
        height: 30,
        fontSize: theme.typography.pxToRem(5),
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    icon: {
        verticalAlign: 'center',
        height: 10,
        width: 10,
    },
    details: {
        alignItems: 'center',
    },
    column: {
        horizontalAlign: 'center',
        verticalAlign: 'center',
        flexBasis: '33.33%',
    },
    row: {
        display: 'flex',
        justifyContent: 'center',
    },
    helper: {
        borderLeft: `2px solid ${theme.palette.divider}`,
        padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
    },
    link: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
    avatar: {
        fontSize: theme.typography.pxToRem(15),
        margin: theme.spacing.unit * 0.01,
        height: 30,
        width: 30,
    },
    badge: {
        width: 20,
        marginLeft: 20,
    },
    panal: {
        marginTop: 8,
        marginLeft: 4,
        marginRight: 4,
    },
    chip: {
        width: 60
    },
});

//function DetailedExpansionPanel(props) {
class Guest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            guestName: "",
            category: "",
            confirmed: 0,
            unconfirmed: 0
        }
    }
    render() {
        const { classes } = this.props;
        let sum = Number(this.props.guestInfo.confirmed) + Number(this.props.guestInfo.unconfirmed);
        let category = this.props.guestInfo.category.charAt(0).toUpperCase() + this.props.guestInfo.category.slice(1).toLowerCase();
        return (
            <div className={classes.root}>
                {/* defaultExpanded */}
                <ExpansionPanel className={classes.panal} >
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <div className={classes.column}>
                            <Badge color="primary" badgeContent={sum}>
                                <Chip label={this.props.guestInfo.name} className={classes.chip} />
                            </Badge>
                        </div>
                        <div className={classes.column}>
                            <Chip label={category} className={classes.chip}/>
                        </div>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.details}>
                        <div>
                            <TextField
                                label='name'
                                value={this.props.guestInfo.name}
                                className={classNames(classes.textField)}
                                margin="normal"
                                InputProps={{
                                    readOnly: true,
                                }} />

                            <TextField
                                label='Category'
                                value={this.props.guestInfo.category}
                                className={classes.textField}
                                margin="normal"
                                InputProps={{
                                    readOnly: true,
                                }} />
                        </div>
                        <div >
                            <TextField
                                label='Confirmed'
                                value={this.props.guestInfo.confirmed}
                                className={classNames(classes.textField)}
                                margin="normal"
                                InputProps={{
                                    readOnly: true,
                                }} />

                            <TextField
                                label='Unconfirmed'
                                value={this.props.guestInfo.unconfirmed}
                                className={classes.textField}
                                margin="normal"
                                InputProps={{
                                    readOnly: true,
                                }} />
                        </div>

                        {/* <Typography>
                                Category: {this.props.guestInfo.category}

                            </Typography> 
                      <Chip label="uncom" className={classes.chip} onDelete={() => { }} />

                        <div className={classNames(classes.helper)}>
                            <Typography variant="caption">
                                /: /
                                {}
                            </Typography>
                        </div> */}
                    </ExpansionPanelDetails>

                    {/*<Divider />
                     <a href="#sub-labels-and-columns" className={classes.link}>
                                    Learn more
                                    </a> 
                    <ExpansionPanelActions>
                        <Button size="small">Cancel</Button>
                        <Button size="small" color="primary">  Save </Button>
                    </ExpansionPanelActions> */}
                </ExpansionPanel>
            </div>
        );
    }
}



// class Guest extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             guestName: "",
//             category: "",
//             confirmed: 0,
//             unconfirmed: 0
//         }
//     }

//     // Edit Guest info
//     editGuest = () => {
//         // Add code here
//     }

//     render() {
//         return (
//             <div>
//                 <p>Name: {this.props.guestInfo.name}</p>
//                 <p>Category: {this.props.guestInfo.category}</p>
//                 <p>Confirmed/Unconfirmed: {this.props.guestInfo.confirmed}/{this.props.guestInfo.unconfirmed}</p>
//             </div>
//         );
//     }
// }

// Guest.propTypes = {
//  classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(Guest);