import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, Label, Button } from 'react-bootstrap';
import 'react-select/dist/react-select';
import 'react-virtualized/styles.css'
import 'react-virtualized-select/styles.css'
import Popup from "reactjs-popup";
import './Popup.css';
import uniqueId from 'react-html-id';

let counter = 1;

class AddTableModal extends Component {
    constructor() {
        super();
        this.state = {
            id: 0,
            tableName: "",
            tableSize: 12,
            category: "",
            guests: []
        }
        uniqueId.enableUniqueIds(this);
    }

    addTable = () => {
        let tableInfo = {
            id: counter++,
            tableName: this.state.tableName,
            tableSize: this.state.tableSize,
            category: this.state.category,
            guests: this.state.guests
        }

        this.setState({
            id: counter,
            tableName: "",
            tableSize: 8,
            category: "",
            guests: []
        }, () => this.props.handleAdd(tableInfo));

        console.log(tableInfo)
        console.log(this.props.tablesArr)
    }

    handleTextChange = event => {
        this.setState({[event.target.id]: event.target.value})
    }

    categoryReference = elem => {
        this.inputElem = elem;
    }

    categoryChange = (event) => {
        this.setState({ category: this.inputElem.value });
    }

    modalChildren = () => {
        const options = this.props
            .categories
            .sort()
            .map((category, index) =>
                <option key={index} value={category}>
                    {category}
                </option>
        );

        return (
            <div>
                <form className="modal-main">
                    <span><Label>Table name</Label></span>
                    <FormControl
                        id="tableName"
                        type="text"
                        value={this.state.tableName}
                        placeholder="Enter table name"
                        onChange={this.handleTextChange}
                    />
                    <FormControl.Feedback />
                    <span><Label>Table size</Label></span>
                    <FormControl
                        id="tableSize"
                        type="text"
                        value={this.state.tableSize}
                        placeholder="Enter table size"
                        onChange={this.handleTextChange}
                    />
                    <FormControl.Feedback />
                    <FormGroup>
                        <ControlLabel>Category</ControlLabel>
                        <FormControl
                            id="category"
                            type="text"
                            componentClass="select"
                            placeholder="Select category"
                            inputRef={this.categoryReference}
                            onChange={this.categoryChange}
                            >
                            <option value="select">Select category</option>
                            {options}
                        </FormControl>
                    </FormGroup>
                    <Button bsStyle="primary" onClick={this.addTable}>Add to table list</Button>
                </form>
            </div>
        );
    }


    render() {
        return (
            <Popup
                trigger={<button className="button btn-primary">Add Table</button>}
                modal
                children={this.modalChildren()}
                closeOnDocumentClick
                closeOnEscape
            />
        );
    }
}

export default AddTableModal;
