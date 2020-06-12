import React from "react";
import ReactToPrint from "react-to-print";
import "./DetailPage.css";
import { Button, withStyles, createStyles } from "@material-ui/core";
import GoogleDocsBtn from "../../GoogleDocs/GoogleDocsBtn";

const customStyles = (theme) =>
  createStyles({
    printButton: {
      background: "#fcb83b",
      color: "#fff",
      position: "absolute",
      right: "30px",
      "&:hover": {
        color: "#fff",
        background: "#f04d30",
      },
    },
  });

const farmInfoData = [
  {
    fieldSupervisor: "Mr. Frozen",
    farm: "Incredible",
    address: "Kansas City, MO",
    contact: "1234567",
  },
];

const gleaningInfoData = [
  {
    managerNotes: "Mr. Frozen",
    summary: "Incredible",
    produceIncoming: "Kansas City, MO",
    produceDistribution: "1234567",
    volunteerRoster: "Helpful One",
  },
];

class ComponentToPrint extends React.Component {
  render() {
    return (
      <div>
        <div className="reportTitleContainer">
          <p className="reportTitle">
            Gleaning Report - Date - Farm name - Crop
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
        <GoogleDocsBtn />
        <div className="margin">
          <ReactToPrint
            documentTitle="Gleaning_Report"
            trigger={() => {
              // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
              // to the root node of the returned component as it will be overwritten.
              return (
                <Button className={classes.printButton} href="#">
                  Print Document
                </Button>
              );
            }}
            content={() => this.componentRef}
          />
          <ComponentToPrint ref={(el) => (this.componentRef = el)} />
        </div>
      </div>
    );
  }
}

export default withStyles(customStyles)(DetailPage);
