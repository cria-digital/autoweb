import React from "react";
import { View, Modal, TouchableOpacity, Text, StyleSheet } from "react-native";
import { IconButton } from "react-native-paper";
import COLORS from "../../../../constants/colors";

interface CardModalProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  animationType: "slide" | "fade" | "none";
  onPressMenuItems: (item: string) => void;
  labels: string[];
}

const CardModal: React.FC<CardModalProps> = (props) => {
  const { visible, setVisible, animationType, onPressMenuItems, labels } =
    props;
  const RenderMenuItems = ({ label, index }: any) => {
    const lastIndexMenu = index === labels?.length - 1 && {
      color: COLORS.primary,
    };
    return (
      <TouchableOpacity
        key={`${label}${index}`}
        onPress={() => onPressMenuItems(label)}
        activeOpacity={0.4}
      >
        <Text style={[styles.textMenu, lastIndexMenu]}>{label}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType={animationType}
      onRequestClose={() => setVisible(false)}
      onDismiss={() => setVisible(false)}
    >
      <TouchableOpacity
        onPress={() => setVisible(false)}
        activeOpacity={0.4}
        style={styles.innerModalContainer}
      >
        <View style={styles.innerContainer}>
          <IconButton
            icon={"close"}
            color={"#000"}
            size={20}
            style={styles.closeButton}
            rippleColor={"white"}
            onPress={() => setVisible(false)}
          />
          <View>
            {labels.map((label, index) => (
              <RenderMenuItems label={label} index={index} />
            ))}
          </View>
        </View>
      </TouchableOpacity>
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
    shadowColor: "rgba(0,0,0,0.1)",
    borderRadius: 8,
    elevation: 4,
    padding: 15,
  },
  closeButton: {
    alignSelf: "flex-end",
    backgroundColor: "#ECEFF7",
    borderRadius: 8,
    margin: 0,
    marginBottom: 4,
  },
  textMenu: {
    fontFamily: "Poppins",
    fontSize: 12,
    color: COLORS.black,
    textAlign: "right",
    marginVertical: 4,
  },
});

export default CardModal;
