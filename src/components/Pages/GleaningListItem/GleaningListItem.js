import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

// dependencies for custom material-ui styling
import { makeStyles, withStyles, createStyles } from "@material-ui/core/styles";
// material-ui components
import {
  Button,
  Card,
  CardHeader,
  CardActionArea,
  CardContent,
  Typography,
  ListItemSecondaryAction,
} from "@material-ui/core";

// create custom material styling
const customStyles = (theme) =>
  createStyles({
    printButton: {
      background: "#f04d30",

      color: "#fff",
      "&:hover": {
        color: "#fff",
        background: "#fcb83b",
      },
    },
    googleDocBtn: {
      background: "#B2B335",

      color: "#fff",
      "&:hover": {
        color: "#fff",
        background: "#fcb83b",
      },
    },
    orange: {
      maxWidth: 345,
      background: "#fcb83b",
      boxShadow: "1px 3px rgb(0,0,0,0.3)",
    },
    stuff: {
      background: "#f2efea",
    },
  });

class GleaningListItem extends Component {
  //each item on click goes to the detail page
  clickGleaningDetails = (event, id) => {
    this.props.history.push(`/detail`);
  };

  render() {
    const { item, classes } = this.props;

    return (
      <Card className={classes.orange}>
        {item.link != null ? (
          <Button className={classes.googleDocBtn} href={item.link} fullWidth>
            Go to Google Docs
          </Button>
        ) : (
          <Button
            className={classes.printButton}
            onClick={(event) => this.clickGleaningDetails(event)}
            fullWidth
          >
            Create Gleaning Report
          </Button>
        )}

        <CardHeader title={item.farm} subheader={item.date} />
        <CardContent className={classes.stuff}>
          <Typography variant="body2" color="textSecondary" component="p">
            Field Supervisor: {item.field_supv}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Start Time: {item.start_time}
          </Typography>
        </CardContent>
        <Typography
          variant="body1"
          color="inherit"
          component="p"
          align="center"
        >
          {item.produce}
        </Typography>
      </Card>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default withStyles(customStyles)(
  withRouter(connect(mapStoreToProps)(GleaningListItem))
);
