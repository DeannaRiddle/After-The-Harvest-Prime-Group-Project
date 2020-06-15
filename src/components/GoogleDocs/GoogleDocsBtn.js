import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
// import { google } from "googleapis";

//when Button has {classes.googleDocsBtn} styling the component is not working

class GoogleDocsBtn extends Component {
  createGoogleDoc = () => {
    console.log("create doc");
    // console.log(this.props.store.googleUserReducer);
    // const {client_secret, client_id, redirect_uris} = credentials.installed;
    // const oAuth2Client = new
    // const client_id = this.props.store.googleUserReducer.googleId;
    // const client_id = this.props.store.googleUserReducer.googleId;
    // const accessToken = this.props.store.googleUserReducer.accessToken;
    // const client_secret = this.props.store.googleUserReducer
    //this will send googleInfo needed to access user's google Docs to the server to make that POST request
    this.props.dispatch({
      type: "CREATE_GOOGLE_DOCS",
    });
    // console.log(client_id);
  };

  render() {
    return (
      <Button onClick={this.createGoogleDoc}>Export to Google Docs</Button>
    );
  }
}

export default connect(mapStoreToProps)(GoogleDocsBtn);
