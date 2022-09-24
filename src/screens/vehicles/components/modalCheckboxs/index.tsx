import React from "react";
import { View, Modal, TouchableOpacity, Text, StyleSheet } from "react-native";
import { IconButton } from "react-native-paper";
import CheckboxComponent from "../../../../components/checkbox";
import COLORS from "../../../../constants/colors";

interface CardModalCheckboxsProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  animationType: "slide" | "fade" | "none";
  checkboxsIndex: number;
  onPressMenuItems: (item: number) => void;
  labels: string[];
}

const CardModalCheckboxs: React.FC<CardModalCheckboxsProps> = (props) => {
  const {
    visible,
    setVisible,
    animationType,
    onPressMenuItems,
    labels,
    checkboxsIndex,
  } = props;
  const RenderMenuItems = ({ label, index }: any) => {
    return (
      <TouchableOpacity
        key={`${label}${index}`}
        onPress={() => onPressMenuItems(index)}
        activeOpacity={0.4}
      >
        <CheckboxComponent
          hasChecked={checkboxsIndex === index ? true : false}
          label={label}
          inverted={true}
          setHasChecked={() => onPressMenuItems(index)}
          style={{ marginTop: -10, marginVertical: 0 }}
        />
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
            icon={"information"}
            color={COLORS.black}
            size={28}
            style={styles.closeButton}
            rippleColor={"white"}
            onPress={() => setVisible(false)}
          />
          <View style={{ alignItems: "flex-end" }}>
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
    width: "40%",
    maxWidth: 160,
  },
  closeButton: {
    padding: 0,
    alignSelf: "flex-end",
    width: "20%",
    margin: 0,
    opacity: 0.4,
  },
});

export default CardModalCheckboxs;
