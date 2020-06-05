import React from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, CardMedia, Box } from "@material-ui/core";
import GoogleLogin from "../GoogleLogin/GoogleLogin";

const useStyles = makeStyles({
  box: {
    width: 600,
    marginTop: 80,
  },
  card: {
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
    <Box boxShadow={5} mx="auto" className={classes.box}>
      <Card className={classes.card}>
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
    </Box>
  );
}

export default connect(mapStoreToProps)(LoginCard);
