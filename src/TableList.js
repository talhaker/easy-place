import React, { Component } from 'react';
import Table from './Table';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components'

const Wrapper = styled.div`
margin: 8px;
border-radius: 4px;
min-width: 100px;
min-height: 220px;
display: flex;
flex-direction: row;
width: 300px;
transition: width 2s, height 4s;
flex: 1;
`;

const styles = theme => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'row',
    },
});

class TableList extends Component {
    render() {
        return this.props.tables.map((table, index) =>
            <Wrapper>
                <Table key={table.id} table={table} tables={this.props.tables}
                    deleteGuest={this.props.deleteGuest} deleteTable={this.props.deleteTable} />
            </Wrapper>)
    }
    // render() {
    //     const { classes } = this.props;
    //     const tables = this.props
    //         .tables
    //         .map((item, index) =>
    //             <Table
    //                 key={index}
    //                 tableInfo={item}
    //             />)
    //     return (
    //         <div >
    //             {tables}
    //         </div>
    //     );
    // }
}
TableList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TableList);