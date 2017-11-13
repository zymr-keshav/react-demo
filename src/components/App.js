import React, { Component } from 'react'
import logo from '../logo.svg'
import '../App.css'

import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <hr/>
        <div className="todo">
            <AddTodo />
            <VisibleTodoList />
            <Footer />
        </div>
      </div>
    );
  }
}

export default App
