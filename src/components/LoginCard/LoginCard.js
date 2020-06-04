import React from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import GoogleLogin from "../GoogleLogin/GoogleLogin";

const useStyles = makeStyles({
  root: {
    margin: "auto",
    marginTop: 80,
    width: 600,
    textAlign: "center",
  },
  media: {
    height: 140,
  },
  button: {
    paddingTop: 10,
  },
});

function LoginCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        alt="After the Harvest logo"
        image={require("./logo-rectangle.jpeg")}
        title="After the Harvest"
        className={classes.media}
      />
      <CardContent>
        {/* <Typography gutterBottom variant="h5" component="h2">
          Gleaning Report Login
        </Typography> */}
        {/* <Typography variant="body2" color="textSecondary" component="p">
          Login with your Google account
        </Typography> */}
        <div className={classes.button}>
          <GoogleLogin />
        </div>
      </CardContent>
    </Card>
  );
}

export default connect(mapStoreToProps)(LoginCard);
