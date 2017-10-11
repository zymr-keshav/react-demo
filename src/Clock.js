import React, { Component } from 'react';

import Toggle from './Toggle';

function ActionLink () {
     function handleClick (e) {
        e.preventDefault();
        console.log('Link was clicked');
    }

    return (
            <button  onClick={handleClick}>Click me </button>
    );
}

function FormattedDate(props) {
    return <h2>Current Date is {props.date.toString()}</h2>
}

class Waqt extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
        () => this.tick(),
        1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
                <div>
                    <h1>Hello, Moto</h1>
                    <FormattedDate date={this.state.date} />
                    <h2>it is {this.state.date.toLocaleTimeString()}.</h2>
                   <ActionLink />
                   <Toggle />
                </div>
        );
    }
}

export default Waqt;

