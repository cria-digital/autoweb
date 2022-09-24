import React from "react";
import { View, Modal, StyleSheet, Text } from "react-native";
import COLORS from "../../constants/colors";
import CheckedIcon from "../../icons/checkedIcon";
import CloseIcon from "../../icons/close";
import InputComponent from "../input";
import InputLayout from "../inputLayout";
import NextBackButtons from "../nextBackButtons";

interface ModalApprovedOrReprovedProps {
  visible: boolean;
  animationType?: "none" | "slide" | "fade";
  isChecked?: boolean;
  onPressFirstButton: () => void;
  onPressSecondButton: () => void;
}

const ModalApprovedOrReproved: React.FC<ModalApprovedOrReprovedProps> = (
  props
) => {
  const {
    visible,
    animationType,
    isChecked,
    onPressFirstButton,
    onPressSecondButton,
  } = props;
  const Strong = (message: string) => (
    <Text style={styles.strong}>{message}</Text>
  );
  return (
    <Modal visible={visible} transparent={true} animationType={animationType}>
      <View style={styles.innerModalContainer}>
        {isChecked ? (
          <View style={styles.innerContainer}>
            <View style={styles.alignSelfIcon}>
              <CheckedIcon />
            </View>

            <Text style={styles.title}>Avaliação aprovada!</Text>
            <Text style={styles.normal16}>
              Você será redirecionado para o cadastro de compra desse veículo
            </Text>

            <Text style={styles.normalText}>
              Caso não queira realizar esse cadastro agora, você poderá fazê-lo
              na aba {Strong("“compras - cadastros pendentes”.")}
            </Text>

            <NextBackButtons
              firstButtonLabel="Cadastrar Compras"
              secondButtonLabel="Voltar para o menu"
              firstButtonOnPress={onPressFirstButton}
              secondButtonOnPress={onPressSecondButton}
            />
          </View>
        ) : (
          <View style={styles.innerContainer}>
            <View style={styles.alignSelfIcon}>
              <CloseIcon />
            </View>

            <Text style={styles.title}>
              Qual o motivo para a avaliação ser reprovada?
            </Text>

            <InputLayout
              title="Motivo"
              style={{ marginTop: 32, marginBottom: 24 }}
            >
              <InputComponent
                placeholder="Digite aqui o motivo da reprovação"
                mode="flat"
                multiline
                numberOfLines={7}
              />
            </InputLayout>

            <NextBackButtons
              firstButtonLabel="Cadastrar Compras"
              secondButtonLabel="Voltar para o menu"
              firstButtonOnPress={onPressFirstButton}
              secondButtonOnPress={onPressSecondButton}
            />
          </View>
        )}
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
  normalText: {
    fontFamily: "Raleway",
    fontSize: 12,
    color: COLORS.black,
    textAlign: "center",
    marginTop: 16,
    marginBottom: 24,
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
  },
  normal16: {
    fontFamily: "Raleway",
    fontSize: 16,
    color: COLORS.black,
    alignSelf: "center",
    textAlign: "center",
  },
});

export default ModalApprovedOrReproved;
