import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import ListNews from "../component/ListNews";
import ListSuggestions from "../component/ListSuggestions";

const Home: React.FC = () => {
  const data = [
    {
      label: "Android",
      summary: "How to master Android in 1 day",
    },
    {
      label: "IOS",
      summary: "How to master IOS in 1 day",
    },
    {
      label: "ReactJS",
      summary: "How to master ReactJS in 1 day",
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerView}>
        <Text style={styles.textTitle}>ACE THE TECH INTERVIEW</Text>
        <Text style={{ marginBottom: 10 }}>What's new?</Text>
        <ListNews data={data} />
        <Text style={{ marginTop: 10, marginBottom: 10 }}>
          Suggestions for you
        </Text>
        <ListSuggestions data={data} />
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
  },
});

export default Home;
