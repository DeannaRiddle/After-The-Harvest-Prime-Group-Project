import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

// dependencies for custom material-ui styling
import { withStyles, createStyles } from "@material-ui/core/styles";
// material-ui components
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

// create custom material styling
const customStyles = (theme) =>
  createStyles({
    imgMedia: {
      height: "335px",
      backgroundSizing: "cover",
    },
  });

class GleaningListItem extends Component {
  componentDidMount() {
    // load up all information from the server
    this.props.dispatch({
      type: "GET_ALL_GLEANING",
    });
  }

  clickGleaningDetails = (event, id) => {
    this.props.history.push(`/details/${id}`);
  };

  render() {
    const { item, classes } = this.props;

    return (
      <Card>
        <CardActionArea
          onClick={(event) => this.clickGleaningDetails(event, item.id)}
        >
          {/* <CardMedia
            className={classes.imgMedia}
            image={item.color}
            title={item.title}
          /> */}
          <CardContent>
            <Typography component="h3" variant="h6">
              {/* {item.title} */}Words Here
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default withStyles(customStyles)(
  withRouter(connect(mapStoreToProps)(GleaningListItem))
);
