import React, { Component } from "react";
import { Button } from "@material-ui/core";
//when Button has {classes.googleDocsBtn} styling the component is not working

class GoogleDocsBtn extends Component {
  render() {
    return (
      <Button onClick={() => console.log("I clicked this")}>
        Export to Google Docs
      </Button>
    );
  }
}

export default GoogleDocsBtn;
