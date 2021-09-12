import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ListNews from "../component/ListNews";

const Quiz: React.FC = () => {
  const data = [
    {
      label: "ReactJS",
      summary: "What is javascript",
    },
    {
      label: "ReactJS",
      summary: "What is javascript",
    },
    {
      label: "ReactJS",
      summary: "What is javascript",
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerView}>
        <Text style={styles.textTitle}>
          TEST YOURSELF WITH COLLECTION OF QUIZ
        </Text>
        <Text style={{ marginBottom: 10 }}>QENERAL QIOZ</Text>
        <ListNews data={data} />
        <Text style={{ marginBottom: 10, marginTop: 10 }}>Selected Quiz</Text>
        <View style={styles.questionView}></View>
      </View>
    </SafeAreaView>
  );
};

export default Quiz;

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
});
