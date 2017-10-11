import React, { Component } from 'react';

class Reservation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    render() {
        return (
            <form action="">
            <label htmlFor="isGoing">
                Is going:
                <input
                    type="checkbox"
                    name="isGoing"
                    id="isGoing"
                    checked={this.state.isGoing}
                    onChange={this.handleInputChange} />
            </label>
            <label htmlFor="numberOfGuests">Number of guests:
                <input
                type="number"
                name="numberOfGuests"
                id="numberOfGuests"
                value={this.state.numberOfGuests}
                onChange={this.handleInputChange} />
            </label>
            </form>
        );
    }
}

export default Reservation;
