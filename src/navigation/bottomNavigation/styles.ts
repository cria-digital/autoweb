import { StyleSheet } from "react-native";
import COLORS from "../../constants/colors";

const styles = StyleSheet.create({
  tabBarIndicatorStyle: {
    width: 0,
  },
  tabBarStyle: {
    backgroundColor: COLORS.black,
    height: 70,
  },
  tabBarContentContainerStyle: {
    paddingBottom: 30,
  },
});

export default styles;
