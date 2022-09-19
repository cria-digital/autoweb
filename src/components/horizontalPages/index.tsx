import React, { memo } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import COLORS from "../../constants/colors";

interface HorizontalPagesProps {
  actualPage: string;
  currentPage: string;
  onPress?: () => void;
}

const HorizontalPages: React.FC<HorizontalPagesProps> = (props) => {
  const { actualPage, currentPage, onPress } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onPress}
      style={styles.container}
    >
      <Text
        style={[
          actualPage === currentPage
            ? styles.textSelected
            : styles.textUnselected,
        ]}
      >
        {actualPage}
      </Text>
      <View style={[actualPage === currentPage ? styles.viewSelected : null]} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 20,
  },
  textSelected: {
    fontFamily: "PoppinsBold",
    color: COLORS.black,
  },
  textUnselected: {
    fontFamily: "Poppins",
    color: COLORS.black,
  },
  viewSelected: {
    height: 3,
    backgroundColor: COLORS.primary,
  },
});

export default memo(HorizontalPages);
