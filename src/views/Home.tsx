import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import ListNews from "../component/ListNews";
import ListSuggestions from "../component/ListSuggestions";
import firestore from "@react-native-firebase/firestore";

const Home: React.FC = () => {
  const [listQuestion, setListQuestion] = useState([]);
  const getData = async () => {
    const data = await firestore().collection("programing-languages").get();

    console.log("---getData", data.docs[0]?._data?.data);
    setListQuestion(data.docs[0]?._data?.data);
    return data.docs[0]?._data?.data;
  };

  useEffect(() => {
    getData();
  }, []);

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
        <ListSuggestions data={listQuestion} />
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
});

export default Home;
