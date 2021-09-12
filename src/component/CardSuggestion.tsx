import React from "react";
import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";

interface Props {
  label: string;
  summary?: string;
  bachgroundImg?: string;
  onPress?: () => void;
}
const CardSuggestion: React.FC<Props> = ({
  label,
  summary,
  bachgroundImg,
  onPress,
}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.containerCard}></View>
      <View style={styles.viewRight}>
        <Text>label</Text>
        <Text numberOfLines={1}>{summary}</Text>
      </View>
    </Pressable>
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
