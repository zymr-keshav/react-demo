import React, { Component } from 'react';

import Toggle from './Toggle';

function ActionLink () {
     function handleClick (e) {
        e.preventDefault();
        // console.log('Link was clicked');
    }

    return (
        <button onClick={handleClick}>Click me </button>
    );
}

function FormattedDate(props) {
    return <h2>Current Date is {props.date.toString()}</h2>;
}

const MyComponents = {
    DatePicker: (props) => {
        return <div>Using Spread Operator with property color: {props.color} , size: {props.size} and wait: {props.wait ? 'No wait' : 'Infinite Time'}.</div>;
    }
};

function BlueDatePicker() {
    const about = {color:'red', size:5, wait: false};
    return <MyComponents.DatePicker {...about} />;
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
                    <h1>Hello, {this.props.name}</h1>
                    <FormattedDate date={this.state.date} />
                   <ActionLink />
                   <Toggle />
                   <BlueDatePicker />
                </div>
        );
    }
}

Waqt.defaultProps = {
    name : 'Mudra'
};

export default Waqt;

