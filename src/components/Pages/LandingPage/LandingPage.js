import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../../redux/mapStoreToProps";

import "./LandingPage.css";
import LoginCard from "../../LoginCard/LoginCard";

class LandingPage extends Component {
  render() {
    return (
      <div className="container">
        <LoginCard />
      </div>
    );
  }
}

export default connect(mapStoreToProps)(LandingPage);
