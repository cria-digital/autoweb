import { StyleSheet } from "react-native";
import COLORS from "../../../../constants/colors";

const styles = StyleSheet.create({
  logo: {
    marginTop: 64,
    marginBottom: 32,
  },
  logoblue: {
    fontFamily: "RalewayBoldItalic",
    color: COLORS.logoblue,
    fontSize: 24,
    alignSelf: "center",
    top: -4,
  },
  logored: {
    fontFamily: "RalewayBoldItalic",
    color: COLORS.logored,
    fontSize: 24,
    top: -4,
  },
  containerScroll: {
    backgroundColor: "white",
    height: "100%",
  },
  container: {
    marginHorizontal: 16,
  },
  textTitle12: {
    fontFamily: "RalewaySemiBold",
    fontSize: 12,
    color: COLORS.black,
  },
  textTitle16: {
    fontFamily: "RalewaySemiBold",
    fontSize: 16,
    color: COLORS.black,
  },
  normalText: {
    fontFamily: "Raleway",
    fontSize: 12,
    color: COLORS.black,
  },
  mainTitle: {
    fontFamily: "Poppins",
    fontWeight: "bold",
    fontSize: 14,
    color: COLORS.black,
    textAlign: "center",
    marginBottom: 24,
  },
  nextBackButtons: {
    marginTop: 24,
    justifyContent: "flex-end",
    marginHorizontal: 16,
  },
  image: {
    height: 142,
    width: "35%",
    marginRight: 16,
    borderRadius: 8,
  },
  imageAfter: {
    height: 142,
    width: "65%",
    marginRight: 16,
    marginTop: 16,
    borderRadius: 8,
  },
  rowDouble: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "85%",
  },
  rowFlex: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  redText: {
    fontFamily: "RalewaySemiBold",
    fontSize: 16,
    color: COLORS.primary,
    alignSelf: "flex-end",
  },
  checkedIconContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 14,
  },
});

export default styles;
