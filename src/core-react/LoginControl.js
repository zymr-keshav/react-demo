import React from 'react';

import Greeting from './Greeting';

import Map from './map';


import ErrorBoundary from './ErrorBoundary';


class LoginControl extends React.Component {

  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const { isLoggedIn } = this.state;

    return (
      <div>
      <ErrorBoundary >
      <Greeting isLoggedIn = { isLoggedIn } /> { isLoggedIn
        ? ( <LogoutButton onClick = { this.handleLogoutClick } /> )
        : ( <LoginButton onClick = { this.handleLoginClick } /> )
      }
      </ErrorBoundary>
      <Map / >
      </div>
    );
  }
}

function LoginButton(props) {
  return <button onClick = { props.onClick } > Login </button>;
}

function LogoutButton(props) {
  return <button onClick = { props.onClick } > Logout </button>;
}

export default LoginControl;
