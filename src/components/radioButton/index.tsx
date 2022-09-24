import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from "react-native";
import { RadioButton } from "react-native-paper";
import COLORS from "../../constants/colors";

interface RadioButtonComponentProps {
  status: "checked" | "unchecked";
  onPress: () => void;
  color?: string;
  disabled?: boolean;
  label: string;
  style?: StyleProp<ViewStyle>;
}

const RadioButtonComponent: React.FC<RadioButtonComponentProps> = (props) => {
  const { status, onPress, color, disabled, label, style } = props;
  return (
    <TouchableOpacity
      style={style ?? styles.container}
      onPress={onPress}
      activeOpacity={0.5}
    >
      <RadioButton
        value={status}
        color={color}
        disabled={disabled}
        status={status}
        onPress={onPress}
        uncheckedColor={"#C9D3E9"}
        theme={{
          colors: {
            accent: COLORS.primary,
          },
        }}
      />
      <Text style={styles.labelStyle}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  labelStyle: {
    fontFamily: "PoppinsBold",
    fontSize: 12,
    color: COLORS.black,
  },
});

export default RadioButtonComponent;
