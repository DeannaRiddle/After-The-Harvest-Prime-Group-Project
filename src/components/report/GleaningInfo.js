// import React from "react";

// import { Text, View, StyleSheet } from "@react-pdf/renderer";

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 30,
//     paddingLeft: 15,
//     "@media max-width: 400": {
//       paddingTop: 10,
//       paddingLeft: 0,
//     },
//   },
//   entryContainer: {
//     marginBottom: 10,
//   },
//   details: {
//     fontSize: 10,
//     fontFamily: "Lato",
//   },
//   title: {
//     fontSize: 11,
//     color: "black",
//     textDecoration: "none",
//     fontFamily: "Lato Bold",
//   },
// });

// const GleaningInfoEntry = ({
//   managerNotes,
//   summary,
//   produceIncoming,
//   produceDistribution,
//   volunteerRoster,
// }) => {
//   return (
//     <div style={styles.entryContainer}>
//       <p style={styles.title}>Gleaning Network Manager Notes: </p>
//       <p style={styles.details}>{managerNotes}</p>

//       <p style={styles.title}>Summary: </p>
//       <p style={styles.details}>{summary}</p>

//       <p style={styles.title}>Produce Incoming: </p>
//       <p style={styles.details}>{produceIncoming}</p>

//       <p style={styles.title}>Produce Distribution: </p>
//       <p style={styles.details}>{produceDistribution}</p>

//       <p style={styles.title}>Volunteer Roster: </p>
//       <p style={styles.details}>{volunteerRoster}</p>
//     </div>
//   );
// };

// const gleaningInfoData = [
//   {
//     managerNotes: "Mr. Frozen",
//     summary: "Incredible",
//     produceIncoming: "Kansas City, MO",
//     produceDistribution: "1234567",
//     volunteerRoster: "Helpful One",
//   },
// ];

// const GleaningInfo = () => {
//   return (
//     <div style={styles.container}>
//       {gleaningInfoData.map(
//         ({
//           managerNotes,
//           summary,
//           produceIncoming,
//           produceDistribution,
//           volunteerRoster,
//           index,
//         }) => (
//           <GleaningInfoEntry
//             managerNotes={managerNotes}
//             summary={summary}
//             produceIncoming={produceIncoming}
//             key={index}
//             produceDistribution={produceDistribution}
//             volunteerRoster={volunteerRoster}
//           />
//         )
//       )}
//     </div>
//   );
// };

// export default GleaningInfo;
