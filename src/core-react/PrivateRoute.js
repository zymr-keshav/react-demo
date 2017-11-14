import React from 'react'

import { Route, Redirect } from 'react-router-dom'

import { FakeAuth } from './FakeAuth'


export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    FakeAuth.isAuthenticated ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)