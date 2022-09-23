import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
  Text,
  View,
} from "react-native";
import { IconButton } from "react-native-paper";
import COLORS from "../../constants/colors";

interface ButtonComponentProps {
  mode: "contained" | "outlined";
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  label?: string;
  icon?: any;
  iconSize?: number;
  iconColor?: string;
}

const ButtonComponent: React.FC<ButtonComponentProps> = (props) => {
  const { mode, onPress, style, labelStyle, label, icon, iconColor, iconSize } =
    props;
  const stylesSwitch = () => {
    switch (mode) {
      case "contained":
        return styles.containedStyle;
      case "outlined":
        return styles.outlinedStyle;
      default:
        return style;
    }
  };
  const labelStylesSwitch = () => {
    switch (mode) {
      case "contained":
        return styles.containedLabelStyle;
      case "outlined":
        return styles.outlinedLabelStyle;
      default:
        return labelStyle;
    }
  };
  return (
    <>
      {!icon ? (
        <TouchableOpacity
          style={[stylesSwitch(), style]}
          onPress={onPress}
          activeOpacity={0.5}
        >
          <Text style={[labelStylesSwitch(), labelStyle]}>{label}</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={[stylesSwitch(), styles.iconContainer, style]}
          onPress={onPress}
          activeOpacity={0.5}
        >
          <IconButton
            icon={icon}
            size={iconSize}
            color={iconColor}
            style={{ margin: 0 }}
          />

          <Text style={[labelStylesSwitch(), labelStyle]}>{label}</Text>
          <View />
        </TouchableOpacity>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  containedStyle: {
    backgroundColor: COLORS.primary,
    borderRadius: 8,
    height: 48,
    elevation: 3,
    shadowColor: "rgba(0,0,0,0.5)",
  },
  outlinedStyle: {
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: COLORS.primary,
    borderRadius: 8,
    height: 48,
    elevation: 5,
    shadowColor: "rgba(0,0,0,0.5)",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  containedLabelStyle: {
    color: "white",
    alignSelf: "center",
    lineHeight: 42,
    fontSize: 12,
    fontFamily: "RalewaySemiBold",
  },
  outlinedLabelStyle: {
    color: COLORS.primary,
    alignSelf: "center",
    lineHeight: 42,
    fontSize: 12,
    fontFamily: "RalewaySemiBold",
  },
  contentStyle: {
    width: "100%",
  },
});
export default ButtonComponent;
