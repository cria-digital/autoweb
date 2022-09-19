import { StyleSheet } from "react-native";
import COLORS from "../../constants/colors";

const styles = StyleSheet.create({
  titleInput: {
    fontSize: 12,
    fontFamily: "Raleway",
    color: COLORS.black,
    marginBottom: 5,
    marginLeft: 8,
  },
  errorStyle: {
    color: "red",
  },
  defaultLabel: {
    fontFamily: "Raleway",
    fontSize: 14,
    lineHeight: 21,
    color: COLORS.black,
  },
  required: {
    margin: 0,
  },
  containerTitle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default styles;
