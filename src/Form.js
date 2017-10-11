import React, { Component } from 'react';

class NameForm extends Component {

    constructor(props) {
        super(props);
        // this.state = {value: 'Please write textarea essay here'};
        this.state ={value: 'coconut'};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A essay was submitted', this.state.value);
        console.log(this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Name:
                    {/* <input type="text" value={this.state.value} onChange={this.handleChange}/> */}
                    {/*<textarea value={this.state.value} onChange={this.handleChange}/> */}
                    Pick your favorite La Croix flavor:
                  <select value={this.state.value} onChange={this.handleChange}>
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                  </select>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

export default NameForm;
