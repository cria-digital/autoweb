import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { IconButton } from "react-native-paper";
import COLORS from "../../constants/colors";

interface SimpleNavProps {
  label: string;
  onPressBack: () => void;
}

const SimpleNav: React.FC<SimpleNavProps> = (props) => {
  const { label, onPressBack } = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.5} onPress={onPressBack}>
        <IconButton
          icon={"arrow-left"}
          color={COLORS.primary}
          size={24}
          style={styles.icon}
        />
      </TouchableOpacity>
      <Text style={styles.text}>{label}</Text>
      <View />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontFamily: "RalewaySemiBold",
    fontSize: 16,
    color: COLORS.black,
  },
  icon: {
    margin: 0,
  },
});

export default SimpleNav;
