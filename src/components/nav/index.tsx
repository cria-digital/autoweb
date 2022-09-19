import React from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import { IconButton } from "react-native-paper";
import COLORS from "../../constants/colors";
import MenuIcon from "../../icons/menu";

interface NavProps {
  onPressMenu?: () => void;
  userImage: string;
  userNotifications?: number;
}

const Nav: React.FC<NavProps> = (props) => {
  const { onPressMenu, userImage, userNotifications } = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={onPressMenu}
        style={styles.menuIcon}
      >
        <MenuIcon color={COLORS.black} />
      </TouchableOpacity>
      <Text style={styles.logoblue}>
        auto<Text style={styles.logored}>web</Text>
      </Text>
      <View style={styles.imgContainer}>
        <TouchableOpacity>
          <IconButton
            icon={"bell"}
            size={24}
            color={COLORS.black}
            style={styles.iconBell}
          />
        </TouchableOpacity>

        <Image
          source={{ uri: userImage }}
          style={styles.userImage}
          resizeMode="cover"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: "6%",
    alignItems: "center",
    marginTop: 30,
    width: "88%",
  },
  menuIcon: {
    width: "18%",
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
  userImage: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  imgContainer: {
    flexDirection: "row",
    width: "20%",
    alignItems: "center",
  },
  iconBell: {
    margin: 0,
    right: 16,
  },
});

export default Nav;
