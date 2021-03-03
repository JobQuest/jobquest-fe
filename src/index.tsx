import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './modules/App';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

const router = 
<Auth0Provider
  domain="dev-dsbofkr3.us.auth0.com"
  clientId="wUwcYZWK3OyKpTI2UiDKgLXavKwqOAiL"
  redirectUri={window.location.origin + "/profile"}>
  <BrowserRouter basename={'/'}>
    <App />
  </BrowserRouter>
</Auth0Provider>

ReactDOM.render(
  router,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

