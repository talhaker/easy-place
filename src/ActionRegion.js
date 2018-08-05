import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SwipeableViews from 'react-swipeable-views';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';
import green from '@material-ui/core/colors/green';
import AddGuestModal from './AddGuestModal';
import AddCategoryModal from './AddCategoryModal';
import AddTableModal from './AddTableModal';

function TabContainer(props) {
  const { children, dir } = props;

  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 330,
    position: 'relative',
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit,
    right: theme.spacing.unit,
  },
  fabGreen: {
    color: theme.palette.common.white,
    backgroundColor: green[500],
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
  }
});

class ActionRegion extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;
    const transitionDuration = {
      enter: theme.transitions.duration.enteringScreen,
      exit: theme.transitions.duration.leavingScreen,
    };

    // const fabs = [
    //   {
    //     color: 'primary',
    //     className: classes.fab,
    //     icon: <AddIcon />,
    //   },
    //   {
    //     color: 'secondary',
    //     className: classes.fab,
    //     icon: <EditIcon />,
    //   },
    //   {
    //     color: 'inherit',
    //     className: classNames(classes.fab, classes.fabGreen),
    //     icon: <UpIcon />,
    //   },
    // ];

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
          >
            <Tab label="Guests" />
            <Tab label="Tebles" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>
            <div className={classes.row}>
              <AddGuestModal handleAddGuest={this.props.handleAddGuest} categories={this.props.categories} />
              <AddCategoryModal handleAddCategory={this.props.handleAddCategory} categories={this.props.categories}></AddCategoryModal>
            </div>
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <AddTableModal handleAddTable={this.props.handleAddTable} categories={this.props.categories}></AddTableModal>
          </TabContainer>
        </SwipeableViews>
        {/* {fabs.map((fab, index) => (
          <Zoom
            key={fab.color}
            in={this.state.value === index}
            timeout={transitionDuration}
            style={{
              transitionDelay: `${this.state.value === index ? transitionDuration.exit : 0}ms`,
            }}
            unmountOnExit
          >
            <Button variant="fab" className={fab.className} color={fab.color}>
              {fab.icon}
            </Button>
          </Zoom>
        ))} */}
      </div>
    );
  }
}

ActionRegion.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ActionRegion);
