import React from "react";

import { View, Text, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomWidth: 2,
    borderBottomColor: "#112131",
    borderBottomStyle: "solid",
    alignItems: "stretch",
  },
  title: {
    fontFamily: "Roboto",
    fontSize: 24,
    marginBottom: 10,
    textTransform: "uppercase",
  },
});

function Title() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Gleaning Report - Date - Farm name - Crop
      </Text>
    </View>
  );
}

export default Title;
