import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { withRouter } from "react-router-dom";
import { Paper, Typography } from "@material-ui/core";

class DetailPage extends Component
//need to add local state
{
  render() {
    return (
      <div>
        <Typography component="h1" variant="h3">
          Gleaning Report - Date - Farm name - Crop
        </Typography>
        <Typography component="h4" variant="h4">
          Field Supervisor:
        </Typography>
        <Typography component="h4" variant="h4">
          Farm:
        </Typography>
        <Typography component="h4" variant="h4">
          Address:
        </Typography>
        <Typography component="h4" variant="h4">
          Contact:
        </Typography>

        <Typography component="h4" variant="h4">
          Gleaning Network Manager Notes:
        </Typography>
        <Paper variant="outlined"></Paper>
        <Typography component="h4" variant="h4">
          Summary:
        </Typography>
        <Paper variant="outlined"></Paper>

        <Typography component="h4" variant="h4">
          Produce Incoming:
        </Typography>
        <Paper variant="outlined"></Paper>

        <Typography component="h4" variant="h4">
          Produce Distribution:
        </Typography>
        <Paper variant="outlined"></Paper>

        <Typography component="h4" variant="h4">
          Volunteer Roster:
        </Typography>
        <Paper variant="outlined"></Paper>
      </div>
    );
  }
}

export default withRouter(connect(mapStoreToProps(DetailPage)));
