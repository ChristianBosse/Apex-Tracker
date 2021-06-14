import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
//Import Auth0 for react to LogIn and Out
import { Auth0Provider } from "@auth0/auth0-react";

//Declare your Auth0 domain and ClientId for the app.
//File is located into an .env file.
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
  //Wrap Auth0 provider to use troughout the app.
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
