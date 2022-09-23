import { StyleSheet } from "react-native";
import COLORS from "../../../../constants/colors";

const styles = StyleSheet.create({
  logo: {
    marginTop: 64,
    marginBottom: 48,
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
  componentContainer: {
    flex: 1,
    marginHorizontal: 16,
    marginTop: 20,
  },
  title: {
    fontFamily: "RalewaySemiBold",
    fontSize: 12,
    color: COLORS.black,
    paddingVertical: 4,
    marginHorizontal: -16,
    paddingLeft: 16,
    backgroundColor: "rgba(0,0,0,0.1)",
  },
  textTitle: {
    fontFamily: "RalewaySemiBold",
    fontSize: 12,
    color: COLORS.black,
  },
  normalText: {
    fontFamily: "Raleway",
    fontSize: 12,
    color: COLORS.black,
  },
  checkedIconContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 14,
  },
  grayBack: {
    backgroundColor: "rgba(17, 17, 29, 0.5)",
    paddingVertical: 8,
    paddingHorizontal: 4,
    borderRadius: 8,
    height: 64,
    width: "31.5%",
  },
  blackBack: {
    backgroundColor: "rgba(17, 17, 29, 1)",
    paddingVertical: 8,
    paddingHorizontal: 4,
    borderRadius: 8,
    height: 64,
    width: "31.5%",
  },
  textValue: {
    fontFamily: "RalewaySemiBold",
    fontSize: 12,
    color: "white",
  },
  textTitleValue: {
    width: "70%",
    color: "white",
    fontFamily: "RalewaySemiBold",
    fontSize: 12,
  },
  endFlex: {
    position: "absolute",
    bottom: 8,
    left: 4,
    minWidth: 140,
  },
  line: {
    height: 1,
    backgroundColor: "#000",
    width: "100%",
    marginTop: 80,
  },
  nextBackButtons: {
    marginTop: 24,
    justifyContent: "flex-end",
    marginHorizontal: 16,
  },
});

export default styles;
