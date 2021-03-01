import React from 'react'
import './Auth.scss'
import { useState, useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (<div onClick={() => loginWithRedirect()}><h1 className="login-title">Log In</h1></div>)
}

export const LogoutButton = () => {
  const { logout } = useAuth0();
  console.log("hey i am out")
  return (
    <div onClick={() => logout({ returnTo: window.location.origin + "/" })}>
      Log Out
    </div>
  );
};

const Auth = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <section className="page-auth">
      {!isAuthenticated ? <LoginButton /> : <LogoutButton />}
    </section>
  );
};

export default React.memo(Auth);