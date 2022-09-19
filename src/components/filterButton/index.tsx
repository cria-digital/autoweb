import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { IconButton } from "react-native-paper";
import COLORS from "../../constants/colors";

interface FilterButtonProps {
  label: string;
}

const FilterButton: React.FC<FilterButtonProps> = (props) => {
  const { label } = props;
  return (
    <View style={styles.container}>
      <IconButton
        icon={"filter-outline"}
        color={COLORS.black}
        size={12}
        style={styles.iconStyle}
      />
      <Text style={styles.textStyle}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconStyle: {
    margin: 0,
    top: 1.5,
  },
  textStyle: {
    fontSize: 12,
    fontFamily: "Raleway",
    color: COLORS.complementary,
    textDecorationLine: "underline",
    lineHeight: 16,
  },
});

export default FilterButton;
