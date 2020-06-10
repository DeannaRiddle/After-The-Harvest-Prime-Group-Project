import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

// dependencies for custom material-ui styling
import { makeStyles, withStyles, createStyles } from "@material-ui/core/styles";
// material-ui components
import {
  Card,
  CardHeader,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  ListItemSecondaryAction,
} from "@material-ui/core";

// create custom material styling
const customStyles = (theme) =>
  createStyles({
    imgMedia: {
      height: "335px",
      backgroundSizing: "cover",
    },
  });

const useStyles = makeStyles((theme) => ({
  orange: {
    maxWidth: 345,
    background: "#ed6622",
  },
  stuff: {
    background: "#eeeeee",
  },
}));

// const clickDetails = (clickGleaningDetails = (event, id) => {
//   this.props.history.push(`/details/${id}`);
// });
//each item on click goes to the detail page
function GleaningListItem() {
  const { item } = this.props;
  const classes = useStyles();
  // const click = clickDetails();

  return (
    <Card className={classes.orange}>
      <CardHeader title={item.farm} subheader={item.date} />
      {/* <CardActionArea onClick={(event) => this.clickDetails(event)}> */}
      <CardContent className={classes.stuff}>
        <Typography variant="body2" color="textSecondary" component="p">
          Field Supervisor: {item.field_supv}
          Start Time: {item.start_time}
        </Typography>
      </CardContent>
      {/* </CardActionArea> */}
    </Card>
  );
}

const mapStoreToProps = (store) => ({ store });

export default withStyles(customStyles)(
  withRouter(connect(mapStoreToProps)(GleaningListItem))
);
