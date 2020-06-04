import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../../redux/mapStoreToProps";
import GoogleLogin from "../../GoogleLogin/GoogleLogin";

import "./LandingPage.css";

class LandingPage extends Component {
  render() {
    return (
      <div className="container">
        <GoogleLogin />
      </div>
    );
  }
}

export default connect(mapStoreToProps)(LandingPage);
