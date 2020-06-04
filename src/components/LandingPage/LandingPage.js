import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import GoogleLogin from "../GoogleLogin/GoogleLogin";

import "./LandingPage.css";

class LandingPage extends Component {
  // state = {
  //   heading: "Class Component",
  // };

  // onLogin = (event) => {
  //   this.props.history.push("/login");
  // };

  // onLogout = (event) => {
  //   this.props.dispatch({ type: "LOGOUT" });
  // };

  render() {
    // let loginOrLogout = (
    //   <div className="grid-col grid-col_4">
    //     <h3>Already a Member?</h3>
    //     <button className="btn btn_sizeFull" onClick={this.onLogin}>
    //       Login
    //     </button>
    //   </div>
    // );

    // if (this.props.store.user.id != null) {
    //   loginOrLogout = (
    //     <div className="grid-col grid-col_4">
    //       <h3>All done?</h3>
    //       <button className="btn btn_sizeFull" onClick={this.onLogout}>
    //         Logout
    //       </button>
    //     </div>
    //   );
    // }

    return (
      <div className="container">
        {/* <h2>{this.state.heading}</h2> */}
        {/* 
        <div className="grid">
          <div className="grid-col grid-col_8"> */}
        <GoogleLogin />
        {/* </div> */}
        {/* {loginOrLogout}
        </div> */}
      </div>
    );
  }
}

export default connect(mapStoreToProps)(LandingPage);
