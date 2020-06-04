import React, { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { connect } from "react-redux";

function App(props) {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [url, setUrl] = useState("");

  const [loggedIn, setLoggedIn] = useState(false);

  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;

  const login = (response) => {
    setName(response.profileObj.name);
    setEmail(response.profileObj.email);
    setUrl(response.profileObj.imageUrl);
    setLoggedIn(true);
    props.dispatch({ type: "SET_TO_LOGGEDIN" });
  };

  const logout = (response) => {
    setName("");
    setEmail("");
    setUrl("");
    setLoggedIn(false);
    props.dispatch({ type: "SET_TO_LOGGEDOUT" });
  };

  const handleLoginFailure = (response) => {
    alert("Failed to log in");
  };

  const handleLogoutFailure = (response) => {
    alert("Failed to log out");
  };

  return (
    <div className="App">
      <h1>Gleaning Report Login</h1>
      {/* <h2>Welcome: {name}</h2>
      <h2>is logged in? {loggedIn.toString()}</h2>
      <h2>Email: {email}</h2>
      <img src={url} alt={name} /> */}
      {loggedIn ? (
        <GoogleLogout
          clientId={CLIENT_ID}
          buttonText="Logout"
          onLogoutSuccess={logout}
          onFailure={handleLogoutFailure}
        ></GoogleLogout>
      ) : (
        <GoogleLogin
          clientId={CLIENT_ID}
          buttonText="Login"
          onSuccess={login}
          onFailure={handleLoginFailure}
          cookiePolicy={"single_host_origin"}
        />
      )}
    </div>
  );
}

export default connect(mapStoreToProps)(App);
