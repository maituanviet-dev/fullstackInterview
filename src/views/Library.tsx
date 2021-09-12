import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Pressable } from "react-native";

const Library: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerView}>
        <Text style={styles.textTitle}>
          LEARN INTERVIEW QUESTIONS IN OUR LIBRARY
        </Text>
        <View style={styles.questionView}></View>
        <View>
          <Pressable style={styles.buttonView}>
            <Text>Favorite question List $</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerView: {
    flex: 1,
    paddingHorizontal: 10,
  },
  textTitle: {
    alignSelf: "center",
    fontSize: 18,
    textAlign: "center",
  },
  questionView: {
    flex: 1,
    backgroundColor: "#8C8C8C",
  },
  buttonView: {
    backgroundColor: "#C4C4C4",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    marginVertical: 40,
  },
});

export default Library;
