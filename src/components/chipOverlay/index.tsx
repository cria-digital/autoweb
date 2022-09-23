import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { IconButton } from "react-native-paper";
import COLORS from "../../constants/colors";

interface ChipOverlayProps {
  label: string;
  children: React.ReactNode;
  hasOpened?: boolean;
  setHasOpened: (value: boolean) => void;
}

const ChipOverlay: React.FC<ChipOverlayProps> = (props) => {
  const { label, children, hasOpened, setHasOpened } = props;
  const openClose = () => setHasOpened(!hasOpened);
  return (
    <View style={[hasOpened ? styles.bigContainer : styles.container]}>
      <TouchableOpacity
        onPress={openClose}
        style={styles.innerContainer}
        activeOpacity={0.5}
      >
        <Text style={styles.text}>{label}</Text>
      </TouchableOpacity>
      {hasOpened && children}
      <IconButton
        icon={hasOpened ? "chevron-up" : "chevron-down"}
        size={30}
        color={COLORS.black}
        style={styles.icon}
        onPress={openClose}
        rippleColor={"white"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 8,
    height: 50,
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  bigContainer: {
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomWidth: 1,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  icon: {
    margin: 0,
    position: "absolute",
    right: 0,
    bottom: 0,
  },
  text: {
    fontFamily: "RalewaySemiBold",
    fontSize: 16,
    color: COLORS.black,
    lineHeight: 25,
  },
});

export default ChipOverlay;
