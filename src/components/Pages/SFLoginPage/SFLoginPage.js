import React from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../../redux/mapStoreToProps";

//material-ui components
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, CardMedia, Box, Button } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    height: 200,
  },
  details: {
    display: "flex",
    alignItems: "center",
  },
  box: {
    width: 480,
    marginTop: 80,
  },
  content: {
    flex: "1 0 auto",
    alignItems: "center",
  },
  media: {
    width: 200,
    backgroundSize: "120%",
    backgroundPosition: "center center",
  },
  button: {
    display: "flex",
    boxShadow:
      "rgba(0, 0, 0, 0.24) 0px 2px 2px 0px, rgba(0, 0, 0, 0.24) 0px 0px 1px 0px",
  },

  image: {
    display: "flex",
  },
});

function SFLoginPage(props) {
  const classes = useStyles();

  //function to login with salesforce user id

  return (
    <Box boxShadow={5} mx="auto" className={classes.box}>
      <Card className={classes.root}>
        <div className={classes.image}>
          <CardMedia
            className={classes.media}
            image={require("./salesforce.jpg")}
            title="Salesforce Login"
          />
        </div>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Button
              // variant="outlined"
              color="primary"
              size="large"
              className={classes.button}
              onClick={() => {
                props.dispatch({ type: "FETCH_SALESFORCE_USER" });
                console.log(props.history);
                props.history.push("/gleaning");
              }}
            >
              Login with Salesforce
            </Button>
          </CardContent>
        </div>
      </Card>
    </Box>
  );
}

export default connect(mapStoreToProps)(SFLoginPage);
