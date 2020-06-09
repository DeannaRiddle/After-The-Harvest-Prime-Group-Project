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

const GleaningInfoEntry = ({
  managerNotes,
  summary,
  produceIncoming,
  produceDistribution,
  volunteerRoster,
}) => {
  return (
    <View style={styles.entryContainer}>
      <Text style={styles.title}>Gleaning Network Manager Notes: </Text>
      <Text style={styles.details}>{managerNotes}</Text>

      <Text style={styles.title}>Summary: </Text>
      <Text style={styles.details}>{summary}</Text>

      <Text style={styles.title}>Produce Incoming: </Text>
      <Text style={styles.details}>{produceIncoming}</Text>

      <Text style={styles.title}>Produce Distribution: </Text>
      <Text style={styles.details}>{produceDistribution}</Text>

      <Text style={styles.title}>Volunteer Roster: </Text>
      <Text style={styles.details}>{volunteerRoster}</Text>
    </View>
  );
};

const gleaningInfoData = [
  {
    managerNotes: "Mr. Frozen",
    summary: "Incredible",
    produceIncoming: "Kansas City, MO",
    produceDistribution: "1234567",
    volunteerRoster: ["Helpful One", "Hard Worker"],
  },
];

const GleaningInfo = () => {
  return (
    <View style={styles.container}>
      {gleaningInfoData.map(
        ({
          managerNotes,
          summary,
          produceIncoming,
          produceDistribution,
          volunteerRoster,
          index,
        }) => (
          <GleaningInfoEntry
            managerNotes={managerNotes}
            summary={summary}
            produceIncoming={produceIncoming}
            key={index}
            produceDistribution={produceDistribution}
            volunteerRoster={volunteerRoster}
          />
        )
      )}
    </View>
  );
};

export default GleaningInfo;
