import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DeleteIcon from '@material-ui/icons/Delete';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
    withStyles,
    createMuiTheme,
    MuiThemeProvider,
    TextField,
    Button,
    Badge,
    Chip,
    Divider,
    IconButton,
    Icon,
    ExpansionPanel,
    ExpansionPanelDetails,
    ExpansionPanelSummary,
    ExpansionPanelActions
} from "@material-ui/core"
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components'
const theme = createMuiTheme({
    palette: {
        primary: { main: '#4A6572' }, //
    },
});

const styles = theme => ({
    root: {
        // width: 310,
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        maxWidth: 100,
        height: 30
    },
    icon: {
        verticalAlign: 'center',
        height: 10,
        width: 10,
    },
    summary: {
        height: 20,
    },
    details: {
        height: 100,
        alignItems: 'center',
    },
    actions: {
        height: 50,
        alignItems: 'left',
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
        backgroundColor: '#4A6572',
    },
    panal: {
        marginTop: 8,
        marginLeft: 4,
        marginRight: 4,
        marginBottom: 8,
        justifyContent: 'center',
    },
    chip: {
        width: 60,

    },
});


const Container = styled.div `
  margin: 8px;
  background-color: white;
  width:150px;
  width: auto;
  display: flex;
  flex-direction: row;
  background-color: ${props => (props.isDragging ? 'lightgreen' : 'white')}
  `;

  const Wrapper = styled.div`
margin: 8px;
border: 1px solid lightgrey;
border-radius: 2px;
min-width: 100px;
min-height: 150px;
display: flex;
flex-direction: column;
width: auto;
`;


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
        let sum = Number(this.props.guestItem.confirmed) + Number(this.props.guestItem.unconfirmed);
        let category = this.props.guestItem.category.charAt(0).toUpperCase() + this.props.guestItem.category.slice(1).toLowerCase();
        return (
            <Draggable draggableId={this.props.guestItem.id} index={this.props.index}>
                {(provided, snapshot) => (
                    <Container className={classes.root} {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    innerRef={provided.innerRef}
                    isDragging={snapshot.isDragging}>
                        {/* defaultExpanded */}
                        <ExpansionPanel className={classes.panal} >
                    <ExpansionPanelSummary className={classes.summary} expandIcon={<ExpandMoreIcon />}>
                        <div className={classes.column}>
                            <MuiThemeProvider theme={theme}>
                                <Badge color="primary" badgeContent={sum}  >
                                    <Chip label={this.props.guestItem.name} className={classes.chip} />
                                </Badge>
                            </MuiThemeProvider>
                        </div>
                        <div className={classes.column}>
                            <Chip label={category} className={classes.chip} />
                        </div>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.details}>
                        <div>
                            <TextField
                                label='name'
                                value={this.props.guestItem.name}
                                className={classNames(classes.textField)}
                                margin="normal"
                                InputProps={{
                                    readOnly: true,
                                }} />
                            <TextField
                                label='Category'
                                value={this.props.guestItem.category}
                                className={classes.textField}
                                margin="normal"
                                InputProps={{
                                    readOnly: true,
                                }} />
                        </div>
                        <div >
                            <TextField
                                label='Confirmed'
                                value={this.props.guestItem.confirmed}
                                className={classNames(classes.textField)}
                                margin="normal"
                                InputProps={{
                                    readOnly: true,
                                }} />
                            <TextField
                                label='Unconfirmed'
                                value={this.props.guestItem.unconfirmed}
                                className={classes.textField}
                                margin="normal"
                                InputProps={{
                                    readOnly: true,
                                }} />
                        </div>
                    </ExpansionPanelDetails>
                  <Divider />
                    <ExpansionPanelActions className={classes.actions}>
                        <IconButton className={classes.button} aria-label="Delete">
                            <DeleteIcon />
                        </IconButton>
                        <IconButton className={classes.button} aria-label="Edit">
                        <Icon>edit_icon</Icon>
                        </IconButton>                        
                    </ExpansionPanelActions> 
                </ExpansionPanel>
                        {provided.placeholder}
                    </Container>
                )}
            </Draggable>
        );
    }
}


export default withStyles(styles)(Guest);



// import Button from "@material-ui/core/Button";
// import TextField from "@material-ui/core/TextField";
// import Badge from "@material-ui/core/Badge";
// import Chip from "@material-ui/core/Chip";
// import ExpansionPanel from "@material-ui/core/ExpansionPanel";
// import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
// import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
// import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
//import { withStyles } from '@material-ui/core/styles';
//import { MuiThemeProvider, createMuiTheme, withStyles} from '@material-ui/core/styles';

// Guest.propTypes = {
//  classes: PropTypes.object.isRequired,
// };
