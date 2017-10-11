import React, { Component } from 'react';

class Toggle extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggledOn: true};
        // necessray step to make `this` work in callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick () {
        this.setState(prevState => ({
            isToggledOn: !prevState.isToggledOn
        }));
    }

    render() {
        return (
                <button onClick={this.handleClick}>
                {this.state.isToggledOn ? 'ON' : 'OFF'}
                </button>
        );
    }
}

export default Toggle;