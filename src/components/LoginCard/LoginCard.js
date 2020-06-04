import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import GoogleLogin from "../GoogleLogin/GoogleLogin";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function LoginCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      {/* <CardActionArea> */}
      <CardMedia
        className={classes.media}
        image="../aftertheharvest.png"
        title="After the Harvest"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          After the Harvest Gleaning Report Login
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Login with your Google account
        </Typography>
        <GoogleLogin />
      </CardContent>
      {/* </CardActionArea> */}
      {/* <CardActions> */}
      {/* <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button> */}
      {/* </CardActions> */}
    </Card>
  );
}

export default connect(mapStoreToProps)(LoginCard);
