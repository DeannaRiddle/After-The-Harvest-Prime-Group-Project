import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
class SFLoginPage extends Component {
  //function to login with salesforce user id
  render() {
    return (
      <div>
        <h1>Login</h1>
      </div>
    );
  }
}
export default connect(mapStoreToProps)(SFLoginPage);
