import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import { AuthButton } from './AuthButton'

import { Login } from './Login' // named export; written `export Login` in Login.js
//import Login from './Login' // default export; `export default Login` in Login.js
import { PrivateRoute } from './PrivateRoute'
import BlockingForm from './Form'
import SideBar from './SideBar'

import { store } from './store';

const Public = () => <h3>Public </h3>
const Protected = () => <h3>Protected</h3>
const Home = () => <div><h3>Home</h3><SideBar/></div>

// import registerServiceWorker from '../registerServiceWorker'

// registerServiceWorker();

ReactDOM.render(
    <Router>
    <div>
        <App />
        <AuthButton />
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/form">Form</Link></li>
            <li><Link to="/public" >Public Page</Link></li>
            <li><Link to="/protected">Protected Page</Link></li>
          </ul>
            <hr/>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/public" component={Public} />
              <Route path="/form" component={BlockingForm} />
              <Route path="/login" component={Login} />
              <PrivateRoute path="/protected" component={Protected} />
            </Switch>
    </div>
    </Router>,
  document.getElementById('root')
);