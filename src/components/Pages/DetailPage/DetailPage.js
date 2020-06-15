import React from "react";
import ReactToPrint from "react-to-print";
import "./DetailPage.css";
import {
  Button,
  withStyles,
  createStyles,
  Paper,
  Container,
} from "@material-ui/core";
import GoogleDocsBtn from "../../GoogleDocs/GoogleDocsBtn";

const customStyles = (theme) =>
  createStyles({
    printButton: {
      background: "#f04d30",
      color: "#fff",
      position: "absolute",
      right: "30px",
      "&:hover": {
        color: "#fff",
        background: "#fcb83b",
      },
    },
    googleDocsBtn: {
      background: "#fcb83b",
      color: "#fff",
      "&:hover": {
        color: "#fff",
        background: "#f04d30",
      },
    },
    buttonContainer: {
      textAlign: "center",
    },
    paper: {
      background: "#f2efea",
      maxWidth: "80%",
      paddingTop: "15px",
      paddingBottom: "15px",
      margin: "35px auto 50px",
    },
  });

const farmInfoData = [
  {
    fieldSupervisor: "Cary Rivard",
    farm: "K-State Research and Extension Center",
    address: "35230 W. 135th Street, Olathe, KS 66061",
    contact: "Cary Rivard 785-320-3033 mobile",
    startTime: "8:00 am",
  },
];

const gleaningInfoData = [
  {
    managerNotes: "half of team will be washing lettuce",
    summary: "muddy in the fields, wear boots",
    produceIncoming: "Kansas City, MO",
    produceDistribution: `Catholic Charities of Olathe
    333 E. Poplar Street
    Olathe, KS 66061
    Dianna 913 782-4077

    In As Much Ministry
    2050 Plumbers Way
    Liberty MO 64068
    Bee Young 816 781-6357

    Lee’s Summit Social Services
    108 Southeast 4th Street
    Lee’s Summit MO 64063
    Friend 816 525-4357`,
    volunteerRoster:
      "https://aftertheharvestkc.formtitan.com/shift-input?fld3=a0a3m00000BtYOh&fld13=a0Y3m00000FSCFf#/",
  },
];

class ComponentToPrint extends React.Component {
  // state = { googleData:  };
  render() {
    // const { classes } = this.props;

    return (
      <div>
        <div className="reportTitleContainer">
          <p className="reportTitle">
            Gleaning Report - 6/12/2020 - K-State Research and Extension Center
            - lettuce
          </p>
        </div>
        {farmInfoData.map(({ fieldSupervisor, farm, address, contact }) => (
          <div className="container">
            <p className="title">Field Supervisor: </p>
            <p className="detail">{fieldSupervisor}</p>

            <p className="title">Farm: </p>
            <p className="detail">{farm}</p>

            <p className="title">Address: </p>
            <p className="detail">{address}</p>

            <p className="title">Contact: </p>
            <p className="detail">{contact}</p>
          </div>
        ))}
        {gleaningInfoData.map(
          ({
            managerNotes,
            summary,
            produceIncoming,
            produceDistribution,
            volunteerRoster,
          }) => (
            <div className="container">
              <p className="title">Gleaning Network Manager Notes:</p>
              <p className="detail">{managerNotes}</p>

              <p className="title">Summary: </p>
              <p className="detail">{summary}</p>

              <p className="title">Produce Incoming: </p>
              <p className="detail">{produceIncoming}</p>

              <p className="title">Produce Distribution: </p>
              <p className="detail">{produceDistribution}</p>

              <p className="title">Volunteer Roster: </p>
              <p className="detail">{volunteerRoster}</p>
            </div>
          )
        )}
      </div>
    );
  }
}

class DetailPage extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Paper variant="elevation" elevation={3} className={classes.paper}>
          <Container maxWidth="false" className={classes.buttonContainer}>
            <GoogleDocsBtn className={classes.googleDocsBtn} />
          </Container>
        </Paper>

        <Paper variant="elevation" elevation={3} className={classes.paper}>
          <Container maxWidth="false">
            <ReactToPrint
              documentTitle="Gleaning_Report"
              trigger={() => {
                // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
                // to the root node of the returned component as it will be overwritten.
                return (
                  // <Button className={classes.printButton} href="#">
                  //   Print Document
                  // </Button>
                  <div></div>
                );
              }}
              content={() => this.componentRef}
            />
            <ComponentToPrint ref={(el) => (this.componentRef = el)} />
          </Container>
        </Paper>
      </div>
    );
  }
}

export default withStyles(customStyles)(DetailPage);
