import { useNavigation } from "@react-navigation/native";
import React, { useCallback } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Screens } from "../NavigationConfig";
import CardNews from "./CardNews";
import CardSuggestion from "./CardSuggestion";

interface Props {
  data: any[];
}
const ListSuggestions: React.FC<Props> = ({ data }) => {
  const navigation = useNavigation();
  const _renderItem = useCallback(({ item, index }) => {
    const onSelectCard = () => {
      navigation.navigate(Screens.News);
    };
    return (
      <CardSuggestion
        label={item.label}
        summary={item.summary}
        onPress={onSelectCard}
      />
    );
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        renderItem={_renderItem}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default ListSuggestions;

const styles = StyleSheet.create({});
