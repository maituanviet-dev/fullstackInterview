import { useNavigation } from "@react-navigation/core";
import React from "react";
import {
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

interface Props {
  label?: string;
  iconLeft?: ImageSourcePropType;
}
const Header: React.FC<Props> = ({ label }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable style={styles.iconLeft} onPress={navigation.goBack}>
        <Text>{`<`}</Text>
      </Pressable>
      {label && <Text>{label}</Text>}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
  },
  iconLeft: {
    height: 30,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
