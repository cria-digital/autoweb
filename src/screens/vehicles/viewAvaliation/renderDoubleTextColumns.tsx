import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

interface RenderDoubleTextColumnsProps {
  leftTitle: string;
  leftValue: string;
  rightTitle: string;
  rightValue: string;
}

const RenderDoubleTextColumns: React.FC<RenderDoubleTextColumnsProps> = (
  props
) => {
  const { leftTitle, leftValue, rightTitle, rightValue } = props;
  return (
    <View style={styles.textContainer}>
      <View style={styles.w50}>
        <Text style={styles.text}>{leftTitle}</Text>
        <Text style={styles.boldText}>{leftValue}</Text>
      </View>

      <View style={styles.w50}>
        <Text style={styles.text}>{rightTitle}</Text>
        <Text style={styles.boldText}>{rightValue}</Text>
      </View>
    </View>
  );
};

export default RenderDoubleTextColumns;
