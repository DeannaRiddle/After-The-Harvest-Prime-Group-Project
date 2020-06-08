import React from "react";

import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingLeft: 15,
    "@media max-width: 400": {
      paddingTop: 10,
      paddingLeft: 0,
    },
  },
  entryContainer: {
    marginBottom: 10,
  },
  details: {
    fontSize: 10,
    fontFamily: "Lato",
  },
  title: {
    fontSize: 11,
    color: "black",
    textDecoration: "none",
    fontFamily: "Lato Bold",
  },
});

const farmInfoEntry = ({ fieldSupervisor, farm, address, contact }) => {
  return (
    <View style={styles.entryContainer}>
      <Text style={styles.title}>Field Supervisor: </Text>
      <Text style={styles.details}>{fieldSupervisor}</Text>

      <Text style={styles.title}>Farm: </Text>
      <Text style={styles.details}>{farm}</Text>

      <Text style={styles.title}>Address: </Text>
      <Text style={styles.details}>{address}</Text>

      <Text style={styles.title}>Contact: </Text>
      <Text style={styles.details}>{contact}</Text>
    </View>
  );
};

const farmInfoData = [
  {
    fieldSupervisor: "Mr. Frozen",
    farm: "Incredible",
    address: "Kansas City, MO",
    contact: "1234567",
  },
];

function farmInfo() {
  return (
    <View style={styles.container}>
      {farmInfoData.map(({ fieldSupervisor, farm, address, contact }) => (
        <farmInfoEntry
          fieldSupervisor={fieldSupervisor}
          farm={farm}
          address={address}
          key={fieldSupervisor + farm}
          contact={contact}
        />
      ))}
    </View>
  );
}

export default farmInfo;
