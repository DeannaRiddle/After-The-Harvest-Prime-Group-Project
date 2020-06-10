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
    orange: {
      maxWidth: 345,
      background: "#ed6622",
      boxShadow: "1px 3px rgb(0,0,0,0.3)",
    },
    stuff: {
      background: "#ffffff",
    },
  });

class GleaningListItem extends Component {
  //each item on click goes to the detail page
  clickGleaningDetails = (event, id) => {
    this.props.history.push(`/details/${id}`);
  };
  render() {
    const { item, classes } = this.props;

    return (
      <Card className={classes.orange}>
        <CardHeader title={item.farm} subheader={item.date} />
        <CardContent className={classes.stuff}>
          <Typography variant="body2" color="textSecondary" component="p">
            Field Supervisor: {item.field_supv}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Start Time: {item.start_time}
          </Typography>
        </CardContent>
        <CardActionArea onClick={(event) => this.clickGleaningDetails(event)}>
          <Typography
            variant="h5"
            color="textSecondary"
            component="p"
            align="center"
          >
            {item.produce}
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            component="p"
            align="center"
          >
            click for details
          </Typography>
        </CardActionArea>
      </Card>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default withStyles(customStyles)(
  withRouter(connect(mapStoreToProps)(GleaningListItem))
);
