import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { IconButton } from "react-native-paper";
import COLORS from "../../constants/colors";

interface IconBottomNavigationProps {
  icon: any;
  label: string;
  focused: boolean;
}

const IconBottomNavigation: React.FC<IconBottomNavigationProps> = (props) => {
  const { icon, focused, label } = props;
  return (
    <View style={{ width: "100%", alignItems: "center" }}>
      <View style={[focused ? styles.activePage : styles.inactivePage]} />
      <IconButton
        icon={icon}
        size={15}
        style={{ margin: 0, marginBottom: 5 }}
      />
      <Text
        style={[styles.text, focused ? styles.activeText : styles.inactiveText]}
      >
        {label}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  activePage: {
    backgroundColor: COLORS.primary,
    height: 4,
    width: 41,
    alignSelf: "center",
    top: -12,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  inactivePage: {
    backgroundColor: COLORS.black,
    height: 4,
    width: 41,
    alignSelf: "center",
    top: -12,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  text: {
    textAlign: "center",
    width: "220%",
    fontFamily: "Poppins",
    fontSize: 10,
  },
  activeText: {
    color: "white",
  },
  inactiveText: {
    color: "rgba(255, 255, 255, 0.4)",
  },
});

export default IconBottomNavigation;
