import React, { Component } from 'react';
import { Label, FormControl, Button, Row, Col } from 'react-bootstrap';
import Popup from "reactjs-popup";
import './Popup.css';

class AddTableModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableName: "",
            tableSize: 8,
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

        this.props.handleAdd(tableInfo);
    }

    modalChildren = () => {
        return (
            <div>
                <form className="modal-main">
                    <span><Label>Table name</Label></span>
                    <FormControl
                        id="tableName"
                        type="text"
                        value={this.state.value}
                        placeholder="Enter table name"
                        onChange={(event) => { this.setState({tableName: event.target.value}) }}
                    />
                    <FormControl.Feedback />
                    <span><Label>Table size</Label></span>
                    <FormControl
                        id="tableSize"
                        type="text"
                        value={this.state.value}
                        placeholder="Enter table size"
                        onChange={(event) => { this.setState({tableSize: event.target.value}) }}
                    />
                    <FormControl.Feedback />
                    <span><Label>Category</Label></span>
                    <FormControl
                        id="category"
                        type="text"
                        value={this.state.value}
                        placeholder="Enter table category"
                        onChange={(event) => { this.setState({category: event.target.value}) }}
                    />
                    <FormControl.Feedback />
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
                closeOnDocumentClick
            >
                {this.modalChildren()}
            </Popup>
        );
    }
}

export default AddTableModal;