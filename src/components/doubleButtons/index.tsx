import React from "react";
import { View, StyleSheet } from "react-native";
import ButtonComponent from "../button";

interface DoubleButtonsProps {
  onPressLeft?: () => void;
  onPressRight?: () => void;
  labelLeft: string;
  labelRight: string;
}

const DoubleButtonsComponent: React.FC<DoubleButtonsProps> = (props) => {
  const { onPressLeft, onPressRight, labelLeft, labelRight } = props;
  return (
    <View style={styles.rowButtons}>
      <ButtonComponent
        mode="outlined"
        label={labelLeft}
        onPress={onPressLeft}
        style={styles.button}
      />
      <ButtonComponent
        mode="contained"
        label={labelRight}
        onPress={onPressRight}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rowButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    width: "48%",
    marginTop: 24,
  },
});

export default DoubleButtonsComponent;
