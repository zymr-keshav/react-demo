import React, { Component } from 'react';

class Toggle extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggledOn: true, count: 0};
        // necessary step to make `this` work in callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick () {
        this.setState(prevState => ({
            isToggledOn: !prevState.isToggledOn
        }));
    }

    shouldComponentUpdate(nextProps, nextState) {
        // console.log("shouldComponentUpdate", nextProps, nextState);
        if (this.props.color !== nextProps.color) {
          return true;
        }
        if (this.state.count !== nextState.count) {
          return true;
        }
        return false;
    }

    render() {
        return (
                <div>
                    <button onClick={this.handleClick}>
                        {this.state.isToggledOn ? 'ON' : 'OFF'}
                    </button>
                    <button
                        color={this.props.color}
                        onClick={() => this.setState(state => ({count: state.count + 1}))}>
                        Count: {this.state.count}
                    </button>
                    <ListOfThings />
                </div>
        );
    }
}


function Repeat(props) {
    // console.log("props", props);
    let items = [];
    for (let i = props.numTimes; i >= 0; i--) {
        items.push(props.children(i));
    }
    return <div>{items}</div>;
}

function ListOfThings() {
    // console.log("ListOfThings");
    return (
        <Repeat numTimes={10} >
            {(index) => <div key={index}> This is the {index} item in the list.</div>}
        </Repeat>
    );
}


export default Toggle;