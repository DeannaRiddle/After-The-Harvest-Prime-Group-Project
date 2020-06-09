import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";

import { withStyles, createStyles } from "material-ui/core/styles";
//material-ui components
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@material-ui/core";

const sfStyles = theme =>
  createSFStyles ({
    imgMedia: {
      height: '330px'
      backgroundSizing: 'cover',
    }
  })

class SFLoginPage extends Component {
  //function to login with salesforce user id
  render() {
    return (
      <Card>
        <CardActionArea
          onClick={(event) => {
            this.props.dispatch({ type: "FETCH_SALESFORCE_USER" });
          }}
        >
          <CardMedia className={classes.imgMedia} image={F&V.jpg} title={item.title} />
          <CardContent>
            <Typography component="h3" variant="h6">
              Please click to Access Salesforce
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}
export default withStyles() connect(mapStoreToProps)(SFLoginPage);
