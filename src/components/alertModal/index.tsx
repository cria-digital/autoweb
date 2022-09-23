import React from "react";
import { View, Modal, StyleSheet, Text } from "react-native";
import { IconButton } from "react-native-paper";
import COLORS from "../../constants/colors";
import CheckedIcon from "../../icons/checkedIcon";
import TrashIcon from "../../icons/trashIcon";
import WarningIcon from "../../icons/warningIcon";
import ButtonComponent from "../button";
import NextBackButtons from "../nextBackButtons";

interface AlertModalProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  animationType: "slide" | "fade" | "none";
  beforeFirstStrongText?: string;
  afterSecondStrongText?: string;
  middleStrongText?: string;
  firstStrongText: string;
  secondStrongText?: string;
  warningMessage?: boolean;
  okMessage?: boolean;
  approvalButton?: boolean;
  deleteMessage?: boolean;
  cancelOrClose: () => void;
  firstButtonPress: () => void;
  secondButtonPress?: () => void;
  firstButtonLabel: string;
  secondButtonLabel?: string;
  closeIcon?: boolean;
}

const AlertModal: React.FC<AlertModalProps> = (props) => {
  const {
    visible,
    setVisible,
    beforeFirstStrongText,
    afterSecondStrongText,
    middleStrongText,
    firstStrongText,
    approvalButton,
    secondStrongText,
    animationType,
    warningMessage,
    okMessage,
    deleteMessage,
    cancelOrClose,
    firstButtonPress,
    secondButtonPress,
    firstButtonLabel,
    secondButtonLabel,
    closeIcon,
  } = props;
  const Strong = (message: string) => (
    <Text style={styles.strong}>{message}</Text>
  );
  return (
    <Modal visible={visible} transparent={true} animationType={animationType}>
      <View style={styles.innerModalContainer}>
        <View style={styles.innerContainer}>
          {closeIcon && (
            <IconButton
              icon={"close"}
              style={styles.iconClose}
              onPress={() => setVisible(false)}
              color={COLORS.black}
              size={24}
            />
          )}
          {warningMessage || deleteMessage ? (
            <View>
              {warningMessage && (
                <View style={styles.iconContainer}>
                  <WarningIcon />
                </View>
              )}
              {deleteMessage && (
                <View style={styles.iconContainer}>
                  <TrashIcon />
                </View>
              )}
              <Text style={styles.textMessage}>
                {beforeFirstStrongText} {Strong(firstStrongText)}{" "}
                {middleStrongText} {Strong(secondStrongText)}{" "}
                {afterSecondStrongText}
              </Text>
              <NextBackButtons
                firstButtonLabel={firstButtonLabel}
                approvalButton={approvalButton}
                secondButtonLabel={secondButtonLabel}
                firstButtonOnPress={() => {
                  if (!approvalButton) cancelOrClose();
                  else firstButtonPress();
                }}
                secondButtonOnPress={() => {
                  if (!approvalButton) setVisible(false);
                  else secondButtonPress();
                }}
              />
            </View>
          ) : null}
          {okMessage && (
            <View>
              <View style={styles.iconContainer}>
                <CheckedIcon />
              </View>
              <Text style={styles.textMessage}>
                {beforeFirstStrongText} {Strong(firstStrongText)}{" "}
                {middleStrongText} {Strong(secondStrongText)}{" "}
                {afterSecondStrongText}
              </Text>
              <ButtonComponent
                mode="contained"
                label={firstButtonLabel ?? "Fechar"}
                onPress={() => cancelOrClose()}
                style={{ marginBottom: 20 }}
              />
              {secondButtonLabel && (
                <ButtonComponent
                  mode="outlined"
                  label={secondButtonLabel}
                  onPress={() => secondButtonPress()}
                  style={{ marginBottom: 20 }}
                />
              )}
            </View>
          )}
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
  strong: {
    fontFamily: "RalewayBold",
    fontSize: 16,
    color: COLORS.black,
  },
  iconContainer: {
    alignItems: "center",
    marginTop: 30,
    marginBottom: 20,
  },
  textMessage: {
    fontFamily: "Raleway",
    fontSize: 16,
    color: COLORS.black,
    width: "95%",
    textAlign: "center",
    marginHorizontal: "2.5%",
    marginBottom: 24,
  },
  iconClose: {
    margin: 0,
    alignSelf: "flex-end",
    borderRadius: 8,
    backgroundColor: "#ECEFF7",
  },
});

export default AlertModal;
