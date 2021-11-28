import { useRoute } from "@react-navigation/core";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../component/Header";

function getParagraphs(htmlString) {
  var results = [];
  htmlString.replace(
    /([^<>]*?)(<\/?[-:\w]+(?:>|\s[^<>]*?>)|$)/g,
    function (a, b, c) {
      if (b) results.push(b);
      if (c) results.push(c);
    }
  );
  return results;
}

const News: React.FC = () => {
  const { item } = useRoute().params;
  console.log("item", item, getParagraphs(item.title));

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
