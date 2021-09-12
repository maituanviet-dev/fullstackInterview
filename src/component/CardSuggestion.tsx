import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

interface Props {
  label: string;
  summary?: string;
  bachgroundImg?: string;
}
const CardSuggestion: React.FC<Props> = ({ label, summary, bachgroundImg }) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerCard}></View>
      <View style={styles.viewRight}>
        <Text>label</Text>
        <Text numberOfLines={1}>{summary}</Text>
      </View>
    </View>
  );
};

export default CardSuggestion;

const styles = StyleSheet.create({
  container: {
    height: 120,
    marginBottom: 10,
    backgroundColor: "#ccc",
    padding: 10,
    flexDirection: "row",
  },
  containerCard: {
    width: 100,
    padding: 5,
    backgroundColor: "#343434",
  },
  viewRight: {
    paddingLeft: 10,
  },
  text: {
    color: "#fff",
  },
});
