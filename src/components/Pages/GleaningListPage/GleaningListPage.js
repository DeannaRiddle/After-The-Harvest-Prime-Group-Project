import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

// material-ui components
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

// Custom Components
import GleaningListItem from "../GleaningListItem/GleaningListItem";

class GleaningList extends Component {
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
    return (
      <Container maxWidth={false}>
        <Grid container spacing={2}>
          {/* {gleaningItem.map((item, index) => ( */}
          <Grid item xs={12} sm={4} md={3} lg={2}>
            <GleaningListItem />
          </Grid>
          {/* ))} */}
        </Grid>
      </Container>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default withRouter(connect(mapStoreToProps)(GleaningList));
