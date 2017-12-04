import React, { Component } from 'react';
import ReactDOM from 'react-dom';


export class Counter extends Component {

    constructor(props) {
        super(props);
        this.addOne = this.addOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            count: 0
        };
    }

    addOne() {
      this.setState( (prevState) => {
        return {
            count: prevState.count + 1
        }
      });
    }

    minusOne() {
      this.setState( (prevState) => {
        return {
            count: prevState.count - 1
        }
      });
    }

    reset() {
       this.setState( (prevState) => {
        return {
            count: prevState.count + 1
        }
       });
       this.setState(() => {
        return {
            count: 0
        };
       });
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count} </h1>
                <button onClick={this.addOne}>+1</button>
                <button onClick={this.minusOne}>-1</button>
                <button onClick={this.reset}>reset</button>
            </div>
        );
    }
}

const appRoot =   document.getElementById('root');
ReactDOM.render(<Counter />, appRoot);