import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// import LogOutButton from "../LogOutButton/LogOutButton";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import GoogleLogin from "react-google-login";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    maxWidth: 160,
  },
  appBar: {
    background: "#F04D30",
  },
  title: {
    flexGrow: 1,
  },
  linkText: {
    textDecoration: "none",
    color: "#fff",
    marginRight: "20px",
  },
}));

const Nav = (props) => {
  const classes = useStyles();

  let loginLinkData = {
    path: "/",
    text: "Login / Register",
  };

  if (props.store.user.id != null) {
    loginLinkData.path = "/admin";
    loginLinkData.text = "Home";
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <div></div>
          <Link to="/" className={classes.linkText}>
            <Typography variant="h6" component="h1" className={classes.title}>
              Gleaning Report
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default connect(mapStoreToProps)(Nav);
