import React, { Component } from 'react'
import { Prompt } from 'react-router-dom'

class BlockingForm extends Component {

    constructor(props) {
        super(props);
        this.state = {value: '', isBlocking: false};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.focusTextInput = this.focusTextInput.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value,
            isBlocking: event.target.value.length > 0
        });
    }
    focusTextInput() {
        this.textInput.focus();
    }

    handleSubmit(event) {
        alert('A form was submitted', event.target.value);
        event.target.reset()
        this.setState({
            isBlocking: false
        });
        event.preventDefault();
    }

    render() {
        const { isBlocking } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name" >Name:
                    <input type="text" id="name" ref={(input) => this.textInput = input} onChange={this.handleChange}/>
                    {/*<textarea value={this.state.value} onChange={this.handleChange}/> */}
                </label>
                <input type="button" value="focus" onClick={this.focusTextInput}/>
                <input type="submit" value="Submit"/>
                <Prompt
                    when={isBlocking}
                    message={location => (
                        `Are you sure you want to go to ${location.pathname}`
                    )}
                />
                <p>
                    Blocking? {isBlocking ? 'Yes, click a link or the back button' : 'Nope'}
                </p>
                <p>
                    <button>Submit to stop blocking</button>
                </p>
            </form>
        );
    }
}

export default BlockingForm