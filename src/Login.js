import React from 'react'

import { Redirect } from 'react-router-dom';

import { FakeAuth } from './FakeAuth'

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { redirectToReferrer: false };
    this.login = this.login.bind(this);
  }

  login() {
    FakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true })
    })
  }

  render() {
    // console.log('this.props', this.props);
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state;
    // console.log("redirectToReferrer", redirectToReferrer);

    if (redirectToReferrer) {
      return (
        <Redirect to={from}/>
      )
    }

    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.login}>Log in</button>
      </div>
    )
  }
}

// this is called default export; use `import Login from './Login'` while import
//export default Login
// this is called named export; use `import { Login } from './Login'`  while import
