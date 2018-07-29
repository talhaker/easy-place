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
        this.props.handleAdd(this.state.category);
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
                        onChange={(event) => { this.setState({category: event.target.value}) }}
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
                closeOnDocumentClick
            >
                {this.modalChildren()}
            </Popup>
        );
    }
}

export default AddCategoryModal;