import React, { Component } from "react";
import { Button, withStyles, createStyles } from "@material-ui/core";

const customStyles = (theme) =>
  createStyles({
    googleDocsBtn: {
      background: "#fcb83b",
      color: "#fff",
      position: "absolute",
      right: "30px",
      "&:hover": {
        color: "#fff",
        background: "#f04d30",
      },
    },
  });

class GoogleDocsBtn extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Button className={classes.googleDocsBtn}>Export to Google Docs</Button>
    );
  }
}

export default GoogleDocsBtn;
