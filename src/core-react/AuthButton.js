import React from 'react'
import { withRouter } from 'react-router-dom'
import { FakeAuth } from './FakeAuth'

export const AuthButton = withRouter(({ history }) => (
  FakeAuth.isAuthenticated ? (
    <p>
      Welcome! <button onClick={() => {
        FakeAuth.signout(() => history.push('/'))
      }}>Sign out</button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  )
))