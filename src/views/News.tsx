import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../component/Header";

const News: React.FC = () => {
  return (
    <SafeAreaView>
      <Header label="ABC" />
      <View style={styles.containerView}>
        <Text>News</Text>
        <View style={styles.cardView}></View>
        <View style={styles.cardView}></View>
      </View>
    </SafeAreaView>
  );
};

export default News;

const styles = StyleSheet.create({
  containerView: {
    paddingHorizontal: 10,
  },
  cardView: {
    borderRadius: 12,
    minHeight: 250,
    backgroundColor: "#E5E5E5",
    marginBottom: 10,
  },
});
