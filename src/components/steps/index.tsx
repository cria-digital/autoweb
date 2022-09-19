import React from "react";
import { View, StyleSheet } from "react-native";
import COLORS from "../../constants/colors";

interface StepsProps {
  currentStep: number;
}

const Steps: React.FC<StepsProps> = (props) => {
  const { currentStep } = props;
  return (
    <View style={styles.container}>
      <View style={styles.circle} />
      <View
        style={[
          styles.line,
          currentStep >= 1 ? styles.activeLine : styles.inactiveLine,
        ]}
      />
      <View
        style={[currentStep >= 1 ? styles.circle : styles.inactiveCircle]}
      />
      <View
        style={[
          styles.line,
          currentStep >= 2 ? styles.activeLine : styles.inactiveLine,
        ]}
      />
      <View
        style={[currentStep >= 2 ? styles.circle : styles.inactiveCircle]}
      />
      <View
        style={[
          styles.line,
          currentStep >= 3 ? styles.activeLine : styles.inactiveLine,
        ]}
      />
      <View
        style={[currentStep >= 3 ? styles.circle : styles.inactiveCircle]}
      />
      <View
        style={[
          styles.line,
          currentStep >= 4 ? styles.activeLine : styles.inactiveLine,
        ]}
      />
      <View
        style={[currentStep >= 4 ? styles.circle : styles.inactiveCircle]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
  },
  circle: {
    width: 16,
    height: 16,
    borderRadius: 16,
    backgroundColor: COLORS.green,
  },
  inactiveCircle: {
    width: 16,
    height: 16,
    borderRadius: 16,
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "#C9D3E9",
  },
  line: {
    height: 2,
    width: "19.5%",
  },
  activeLine: {
    backgroundColor: COLORS.green,
  },
  inactiveLine: {
    backgroundColor: "#C9D3E9",
  },
});

export default Steps;
