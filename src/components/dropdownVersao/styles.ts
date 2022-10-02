import { StyleSheet } from "react-native";
import COLORS from "../../constants/colors";

const styles = StyleSheet.create({
  marginTop20: {
    marginTop: 0,
  },
  textInputStyle: {
    backgroundColor: "white",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  inputVariation: {
    height: 40,
    marginTop: 8,
  },
  menuStyle: {
    marginTop: 75,
    marginLeft: 16,
    width: "100%",
    paddingHorizontal: 16,
  },
  contentMenuStyle: {
    width: "100%",
    alignItems: "center",
  },
  opacity: {
    opacity: 1,
  },
  menuItem: {
    width: "100%",
  },
  menuItemContent: {
    width: "100%",
    alignItems: "center",
  },
  error: {
    color: COLORS.primary,
    fontSize: 12,
    fontFamily: "Poppins",
  },
});
export default styles;
