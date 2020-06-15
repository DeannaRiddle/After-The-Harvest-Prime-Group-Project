import React, { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { connect } from "react-redux";

function App(props) {
  const [loggedIn, setLoggedIn] = useState(false);

  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;

  const login = (response) => {
    const userGoogleInfo = response;
    console.log(response.googleId);
    // setLoggedIn(true);
    // props.dispatch({ type: "SET_TO_LOGGEDIN" });
    props.dispatch({ type: "SET_USER_GOOGLE_INFO", payload: userGoogleInfo });
  };

  const logout = (response) => {
    //setLoggedIn(false);
    props.dispatch({ type: "SET_TO_LOGGEDOUT" });
    props.dispatch({ type: "RESET_USER_GOOGLE_INFO" });
  };

  const handleLoginFailure = (response) => {
    alert("Failed to log in");
  };

  const handleLogoutFailure = (response) => {
    alert("Failed to log out");
  };

  return (
    <div className="App">
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
          buttonText="Login to Gleaning Report"
          onSuccess={login}
          // scope="profile email https://www.googleapis.com/auth/documents"
          onFailure={handleLoginFailure}
          cookiePolicy={"single_host_origin"}
        />
      )}
    </div>
  );
}

export default connect(mapStoreToProps)(App);
