import React, { useCallback } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import CardNews from "./CardNews";
import CardSuggestion from "./CardSuggestion";

interface Props {
  data: any[];
}
const ListSuggestions: React.FC<Props> = ({ data }) => {
  const _renderItem = useCallback(({ item, index }) => {
    return <CardSuggestion label={item.label} summary={item.summary} />;
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
