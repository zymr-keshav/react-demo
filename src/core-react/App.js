import React, { Component } from 'react';

import logo from './logo.svg';
import '../App.css';

import Waqt from './Clock';
import LoginControl from './LoginControl';
import Page from './Page';
import NameForm from './Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <section>
          <LoginControl />
        </section>
        <hr/>
          <Page />
          <NameForm />
          <Waqt/>
      </div>
    );
  }
}

export default App;
