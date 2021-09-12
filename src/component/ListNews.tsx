import React, { useCallback } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import CardNews from "./CardNews";

interface Props {
  data: any[];
}
const ListNews: React.FC<Props> = ({ data }) => {
  const _renderItem = useCallback(({ item, index }) => {
    return <CardNews label={item.label} summary={item.summary} />;
  }, []);

  return (
    <View>
      <FlatList
        data={data}
        renderItem={_renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default ListNews;

const styles = StyleSheet.create({});
