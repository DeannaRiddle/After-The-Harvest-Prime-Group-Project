import React from "react";

import { Document, Font, Page, StyleSheet } from "@react-pdf/renderer";
import Title from "./Title";
import PDFDownloadLink from "@react-pdf/renderer";
import gleaningInfo from "./gleaningInfo";
import farmInfo from "./farmInfo";

const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    "@media max-width: 400": {
      flexDirection: "column",
    },
  },
  image: {
    marginBottom: 10,
  },
  leftColumn: {
    flexDirection: "column",
    width: 170,
    paddingTop: 30,
    paddingRight: 15,
    "@media max-width: 400": {
      width: "100%",
      paddingRight: 0,
    },
    "@media orientation: landscape": {
      width: 200,
    },
  },
  footer: {
    fontSize: 12,
    fontFamily: "Lato Bold",
    textAlign: "center",
    marginTop: 25,
    paddingTop: 10,
    borderWidth: 3,
    borderColor: "gray",
    borderStyle: "dashed",
    "@media orientation: landscape": {
      marginTop: 10,
    },
  },
});

Font.register({
  family: "Open Sans",
  src: `${__dirname}/fonts/fonts/Open_Sans/OpenSans-Regular.ttf`,
});
Font.register({
  family: "Lato",
  src: `${__dirname}/fonts/fonts/Lato/Lato-Regular.ttf`,
});
Font.register({
  family: "Lato Italic",
  src: `${__dirname}/fonts/fonts/Lato/Lato-Italic.ttf`,
});
Font.register({
  family: "Lato Bold",
  src: `${__dirname}/fonts/fonts/Lato/Lato-Bold.ttf`,
});
//Title information will be dynamically rendered

const Report = (props) => (
  <Page {...props} style={styles.page}>
    <Title />
    <farmInfo />
    <gleaningInfo />
  </Page>
);

const Output = () => (
  <Document
    author="Gleaning Coordinator"
    keywords="awesome, resume, start wars"
    subject="Gleaning Report"
    title="Gleaning Report"
  >
    <Report size="letter" />
  </Document>
);

const MyDoc = () => <Output />;

const App = () => (
  <div>
    <PDFDownloadLink document={<MyDoc />} fileName="gleaningReport.pdf">
      {({ blob, url, loading, error }) =>
        loading ? "Loading document..." : "Download now!"
      }
    </PDFDownloadLink>
  </div>
);

// ReactPDF.render(<Output />, `${__dirname}/output.pdf`);

export default App;
