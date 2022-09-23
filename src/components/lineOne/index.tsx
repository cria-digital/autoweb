import React from "react";
import { View, StyleSheet } from "react-native";

const LineOne = (props: any) => {
  return <View style={props.style ?? styles.line} />;
};

const styles = StyleSheet.create({
  line: {
    height: 1,
    width: "100%",
    backgroundColor: "#C9D3E9",
  },
});

export default LineOne;
