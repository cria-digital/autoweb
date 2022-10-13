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
  loadingContainer: {
    padding: 32,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 10,
    borderColor: COLORS.primary,
  },
  textLoading: {
    fontFamily: "Poppins",
    marginTop: 18,
    textAlign: "center",
  },
  autocompleteStyle: {
    backgroundColor: "white",
    padding: 10,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderLeftColor: "#ccc",
    borderRightColor: "#ccc",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  borderBottomAutocomplete: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
  },
});

export default styles;
