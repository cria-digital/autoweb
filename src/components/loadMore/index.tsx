import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import COLORS from "../../constants/colors";

const LoadMore = () => {
  return (
    <TouchableOpacity style={styles.loadMoreContainer} activeOpacity={0.5}>
      <Text style={styles.loadMore}>Carregar mais</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  loadMore: {
    textAlign: "center",
    color: COLORS.black,
    fontSize: 18,
    fontFamily: "Poppins",
    width: "auto",
  },
  loadMoreContainer: {
    marginVertical: 24,
  },
});

export default LoadMore;
