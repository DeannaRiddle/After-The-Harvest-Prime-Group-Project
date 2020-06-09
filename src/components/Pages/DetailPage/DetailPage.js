import React from "react";
import ReactToPrint from "react-to-print";
// import Title from "../../report/Title";
// import "../../report/Title.css";
// import FarmInfo from "../../report/FarmInfo";
// import GleaningInfo from "../../report/GleaningInfo";

class ComponentToPrint extends React.Component {
  render() {
    return (
      <div>
        <p>Gleaning Report - Date - Farm name - Crop</p>
        {/* <FarmInfo /> */}
        {/* <GleaningInfo /> */}
      </div>
    );
  }
}

class Example extends React.Component {
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() => {
            // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
            // to the root node of the returned component as it will be overwritten.
            return <a href="#">Print this out!</a>;
          }}
          content={() => this.componentRef}
        />
        <ComponentToPrint ref={(el) => (this.componentRef = el)} />
      </div>
    );
  }
}

export default Example;
