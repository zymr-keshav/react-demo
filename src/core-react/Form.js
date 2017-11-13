import React, { Component } from 'react';

class NameForm extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.focusTextInput = this.focusTextInput.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    focusTextInput() {
        this.textInput.focus();
    }

    handleSubmit(event) {
        alert('A form was submitted', event.target.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Name:
                    <input defaultValue="Keshav" type="text" ref={(input) => this.textInput = input}/>
                    {/*<textarea value={this.state.value} onChange={this.handleChange}/> */}
                </label>
                <input type="button" value="focus" onClick={this.focusTextInput}/>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

export default NameForm;
