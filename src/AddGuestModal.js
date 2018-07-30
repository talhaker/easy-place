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
        }, () => this.props.handleAdd(guestInfo));

        ;
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
                        id="names"
                        type="text"
                        value={this.state.value}
                        placeholder="Enter guest name"
                        onChange={(event) => { this.setState({guestName: event.target.value}) }}
                    />
                    <FormControl.Feedback />
                    <FormGroup controlId="formControlsSelect">
                        <ControlLabel>Category</ControlLabel>
                        <FormControl
                            componentClass="select" placeholder="Select category"
                            inputRef={ el => this.inputEl = el }
                            onChange={(event) => { this.setState({category: this.inputEl.value}) }}
                            >
                            <option value="select">Select category</option>
                            {options}
                        </FormControl>
                    </FormGroup>
                    <span><Label>Number of confirmed Guests</Label></span>
                    <FormControl
                        id="confirmedGuests"
                        type="text"
                        value={this.state.value}
                        placeholder="Enter number of confirmed Guests"
                        onChange={(event) => { this.setState({confirmedGuests: event.target.value}) }}
                    />
                    <FormControl.Feedback />
                    <span><Label>Number of unconfirmed Guests</Label></span>
                    <FormControl
                        id="unconfirmedGuests"
                        type="text"
                        value={this.state.value}
                        placeholder="Enter number of unconfirmed Guests"
                        onChange={(event) => { this.setState({unconfirmedGuests: event.target.value}) }}
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