import React from "react";
import { View, Modal, StyleSheet, Text } from "react-native";
import COLORS from "../../constants/colors";
import CheckedIcon from "../../icons/checkedIcon";
import ButtonComponent from "../button";

interface SimpleModalProps {
  visible: boolean;
  animationType?: "none" | "slide" | "fade";
  onPress: () => void;
  title: string;
}

const SimpleModal: React.FC<SimpleModalProps> = (props) => {
  const { visible, animationType, onPress, title } = props;
  const Strong = (message: string) => (
    <Text style={styles.strong}>{message}</Text>
  );
  return (
    <Modal visible={visible} transparent={true} animationType={animationType}>
      <View style={styles.innerModalContainer}>
        <View style={styles.innerContainer}>
          <View style={styles.alignSelfIcon}>
            <CheckedIcon />
          </View>

          <Text style={styles.title}>{title}</Text>

          <ButtonComponent mode="contained" onPress={onPress} label="Fechar" />
          <View style={{ marginBottom: 24 }} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  innerModalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.1)",
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    backgroundColor: "white",
    width: "80%",
    shadowColor: "rgba(0,0,0,0.1)",
    borderRadius: 16,
    elevation: 4,
    padding: 15,
  },
  strong: {
    fontFamily: "RalewaySemiBold",
    fontSize: 12,
    color: COLORS.black,
  },
  alignSelfIcon: {
    alignSelf: "center",
    marginVertical: 36,
  },
  title: {
    fontFamily: "RalewaySemiBold",
    fontSize: 16,
    color: COLORS.black,
    alignSelf: "center",
    textAlign: "center",
    marginBottom: 24,
  },
});

export default SimpleModal;
