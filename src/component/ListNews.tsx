import { useNavigation } from "@react-navigation/core";
import React, { useCallback } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Screens } from "../NavigationConfig";
import CardNews from "./CardNews";

interface Props {
  data: any[];
}

const ListNews: React.FC<Props> = ({ data }) => {
  const navigation = useNavigation();
  const _renderItem = useCallback(
    ({ item, index }) => {
      const onSelectCard = () => {
        navigation.navigate(Screens.News);
      };
      return (
        <CardNews
          label={item.label}
          summary={item.summary}
          onPress={onSelectCard}
        />
      );
    },
    [navigation]
  );

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
