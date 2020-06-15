import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
// import { google } from "googleapis";

//when Button has {classes.googleDocsBtn} styling the component is not working

class GoogleDocsBtn extends Component {
  createGoogleDoc = () => {
    // this.props.dispatch({
    //   type: "CREATE_GOOGLE_DOCS",
    // });
    this.props.dispatch({
      type: "CREATE_DOC_LINK",
      payload:
        "https://docs.google.com/document/d/13oJdNR__GQ74s3fAOTYAuFenyhl0TYknhb6IGIgI-94/edit?usp=sharing",
    });
  };

  render() {
    return (
      <Button onClick={this.createGoogleDoc}>Export to Google Docs</Button>
    );
  }
}

export default connect(mapStoreToProps)(GoogleDocsBtn);
