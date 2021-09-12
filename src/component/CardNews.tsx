import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

const { width } = Dimensions.get("window");
interface Props {
  label: string;
  summary?: string;
  bachgroundImg?: string;
}
const CardNews: React.FC<Props> = ({ label, summary, bachgroundImg }) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerCard}>
        <View style={styles.containerLabel}>
          <Text style={styles.text}>{label}</Text>
        </View>
      </View>
      <Text numberOfLines={1}>{summary}</Text>
    </View>
  );
};

export default CardNews;

const styles = StyleSheet.create({
  container: {
    width: width / 1.7,
    height: width / 2.4,
    marginRight: 10,
  },
  containerCard: {
    flex: 1,
    padding: 5,
    backgroundColor: "#ccc",
  },
  containerLabel: {
    padding: 10,
    backgroundColor: "#343434",
    alignSelf: "flex-start",
  },
  text: {
    color: "#fff",
  },
});
