import React, { Component } from 'react';
import { Label, FormControl, Button, Row, Col } from 'react-bootstrap';
import Popup from "reactjs-popup";
import './Popup.css';

class AddCategoryModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: ""
        }
    }

    addCategory = () => {
        let category = this.state.category;

        this.setState({ category: "" }, () => this.props.handleAdd(category));
    }

    handleTextChange = event => {
        this.setState({[event.target.id]: event.target.value})
    }

    modalChildren = () => {
        return (
            <div>
                <form className="modal-main">
                    <span><Label>Category</Label></span>
                    <FormControl
                        id="category"
                        type="text"
                        value={this.state.value}
                        placeholder="Enter table category"
                        onChange={this.handleTextChange}
                    />
                    <FormControl.Feedback />
                    <Button bsStyle="primary" onClick={this.addCategory}>Add category</Button>
                </form>
            </div>
        );
    }


    render() {
        return (
            <Popup
                trigger={<button className="button btn-primary">Add Category</button>}
                modal
                children={this.modalChildren()}
                closeOnDocumentClick
                closeOnEscape
            />
        );
    }
}

export default AddCategoryModal;
