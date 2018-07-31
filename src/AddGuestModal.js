import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, Label, Button, Row, Col } from 'react-bootstrap';
import Popup from "reactjs-popup";
import './Popup.css';

class AddGuestModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // guestNames: [],
            guestName: "",
            photo: "",
            category: "",
            confirmedGuests: 0,
            unconfirmedGuests: 0
        }
    }

    addGuest = (event) => {
        let guestInfo = {
            name: this.state.guestName,
            photo: this.state.photo,
            category: this.state.category,
            confirmed: this.state.confirmedGuests,
            unconfirmed: this.state.unconfirmedGuests
        }

        this.setState({
            guestName: "",
            photo: "",
            category: "",
            confirmedGuests: 0,
            unconfirmedGuests: 0
        });
        this.props.handleAdd(guestInfo);
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
                    <span><Label>Guest name</Label></span>
                    <FormControl
                        id="guestName"
                        type="text"
                        value={this.state.guestName}
                        placeholder="Enter guest name"
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
                    <span><Label>Number of confirmed Guests</Label></span>
                    <FormControl
                        id="confirmedGuests"
                        type="text"
                        value={this.state.confirmedGuests}
                        placeholder="Enter number of confirmed Guests"
                        onChange={this.handleTextChange}
                    />
                    <FormControl.Feedback />
                    <span><Label>Number of unconfirmed Guests</Label></span>
                    <FormControl
                        id="unconfirmedGuests"
                        type="text"
                        value={this.state.unconfirmedGuests}
                        placeholder="Enter number of unconfirmed Guests"
                        onChange={this.handleTextChange}
                    />
                    <FormControl.Feedback />
                    <Button bsStyle="primary" onClick={this.addGuest}>Add to guest list</Button>
                </form>
            </div>
        );
    }

    render() {
        return (
            <Popup
                trigger={<button className="button btn-primary"> Add Guest </button>}
                modal
                children={this.modalChildren()}
                closeOnDocumentClick
                closeOnEscape
            />
        );
    }
}

export default AddGuestModal;