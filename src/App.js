import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import Waqt from './Clock';
import LoginControl from './LoginControl';
import Page from './Page';
import NameForm from './Form';
import Calculator from './Calculator';

function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

function WelcomeDialog() {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        Welcome
      </h1>
      <p className="Dialog-message">
        Thank you for visiting our spacecraft!
      </p>
    </FancyBorder>
  );
}

function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  );
}

function SideBar() {
  return (
    <SplitPane
      left={
        <WelcomeDialog />
      }
      right={
        <Waqt />
      } />
  );
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <SideBar />
        <section>
          <Waqt />
          <LoginControl />
          </section>
          <hr/>
          <Page />
          <NameForm />
          <article>
          <Calculator />
          </article>
      </div>
    );
  }
}

export default App;
