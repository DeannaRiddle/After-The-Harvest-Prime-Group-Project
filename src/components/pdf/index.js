import React from "react";
import { saveAs } from "file-saver";
import { Button } from "@material-ui/core";

import {
  PDFDownloadLink,
  Document,
  Page,
  StyleSheet,
  BlobProvider,
  pdf,
} from "@react-pdf/renderer";
import Title from "./Title";
import GleaningInfo from "./gleaningInfo";
import FarmInfo from "./farmInfo";

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

// Font.register({
//   family: "Open Sans",
//   src: `${__dirname}/fonts/fonts/Open_Sans/OpenSans-Regular.ttf`,
// });
// Font.register({
//   family: "Lato",
//   src: `${__dirname}/fonts/fonts/Lato/Lato-Regular.ttf`,
// });
// Font.register({
//   family: "Lato Italic",
//   src: `${__dirname}/fonts/fonts/Lato/Lato-Italic.ttf`,
// });
// Font.register({
//   family: "Lato Bold",
//   src: `${__dirname}/fonts/fonts/Lato/Lato-Bold.ttf`,
// });
//Title information will be dynamically rendered

const Report = (props) => (
  <Page {...props} style={styles.page}>
    <Title />
    <FarmInfo />
    <GleaningInfo />
  </Page>
);

const MyDoc = () => (
  <Document
    author="Gleaning Coordinator"
    keywords="awesome, resume, start wars"
    subject="Gleaning Report"
    title="Gleaning Report"
  >
    <Report size="letter" />
  </Document>
);

const generatePdfDocument = () => {
  const blob = pdf(<MyDoc />).toBlob();
  const fileName = "Gleaning Report";
  saveAs(blob, fileName);
};

function PdfButton() {
  return <Button onClick={generatePdfDocument}>Generate PDF</Button>;
}

// ReactPDF.render(<Output />, `${__dirname}/output.pdf`);

export default PdfButton;
