import React from "react";
import { View, Modal, TouchableOpacity, Text, StyleSheet } from "react-native";
import { IconButton } from "react-native-paper";
import NextBackButtons from "../../../../components/nextBackButtons";
import RadioButtonComponent from "../../../../components/radioButton";
import COLORS from "../../../../constants/colors";

interface GenerateReportProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  animationType: "slide" | "fade" | "none";
}

const GenerateReport: React.FC<GenerateReportProps> = (props) => {
  const { visible, setVisible, animationType } = props;
  const radioValues = ["1", "2", "3", "4", "5", "6"];
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType={animationType}
      onRequestClose={() => setVisible(false)}
    >
      <View style={styles.innerModalContainer}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>Selecione o tipo de relatório</Text>

          {radioValues.map((item, index) => (
            <View style={[styles.mgv15]} key={index}>
              <RadioButtonComponent
                label="Relatório de veículos"
                status={
                  index === 0 || index === 4 || index === 5
                    ? "checked"
                    : "unchecked"
                }
                onPress={() => {}}
              />
            </View>
          ))}
          <View style={{ marginTop: 15 }} />
          <NextBackButtons
            firstButtonLabel="Gerar relatório"
            secondButtonLabel="Cancelar"
            firstButtonOnPress={() =>
              alert("Função gerar relatório não implementada")
            }
            secondButtonOnPress={() => setVisible(false)}
          />
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
    shadowColor: "rgba(0,0,0,0.1)",
    borderRadius: 8,
    elevation: 4,
    padding: 15,
    width: "90%",
  },
  title: {
    fontFamily: "RalewaySemiBold",
    fontSize: 16,
    color: COLORS.black,
    marginBottom: 15,
    textAlign: "center",
    marginTop: 20,
  },
  mgv15: {
    marginVertical: 15,
  },
});

export default GenerateReport;
