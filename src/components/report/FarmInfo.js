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

// const FarmInfo = () => (
//   <div style={styles.container}>
//     {farmInfoData.map(({ fieldSupervisor, farm, address, contact }) => (
//     <div style={styles.entryContainer}>
//     <p style={styles.title}>Field Supervisor: </p>
//     <p style={styles.details}>{fieldSupervisor}</p>

//     <p style={styles.title}>Farm: </p>
//     <p style={styles.details}>{farm}</p>

//     <p style={styles.title}>Address: </p>
//     <p style={styles.details}>{address}</p>

//     <p style={styles.title}>Contact: </p>
//     <p style={styles.details}>{contact}</p>
//   </div>
//     ))}
//   </div>
// );

// const FarmInfo = ({ fieldSupervisor, farm, address, contact }) => {
//   return (
//     <div style={styles.entryContainer}>
//       <p style={styles.title}>Field Supervisor: </p>
//       <p style={styles.details}>{fieldSupervisor}</p>

//       <p style={styles.title}>Farm: </p>
//       <p style={styles.details}>{farm}</p>

//       <p style={styles.title}>Address: </p>
//       <p style={styles.details}>{address}</p>

//       <p style={styles.title}>Contact: </p>
//       <p style={styles.details}>{contact}</p>
//     </div>
//   );
// };

// const farmInfoData = [
//   {
//     fieldSupervisor: "Mr. Frozen",
//     farm: "Incredible",
//     address: "Kansas City, MO",
//     contact: "1234567",
//   },
// ];

// const FarmInfo = () => (
//   <div style={styles.container}>
//     {farmInfoData.map(({ fieldSupervisor, farm, address, contact }) => (
//       <FarmInfoEntry
//         fieldSupervisor={fieldSupervisor}
//         farm={farm}
//         address={address}
//         key={fieldSupervisor + farm}
//         contact={contact}
//       />
//     ))}
//   </div>
// );

// export default FarmInfo;
