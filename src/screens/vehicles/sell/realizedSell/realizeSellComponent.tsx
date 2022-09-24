import React from "react";
import { View, Text, StyleSheet } from "react-native";
import RadioButtonComponent from "../../../../components/radioButton";
import COLORS from "../../../../constants/colors";

interface RealizeSellComponentProps {
  isSelected: boolean;
  onPress: () => void;
}

const RealizeSellComponent: React.FC<RealizeSellComponentProps> = (props) => {
  const { isSelected, onPress } = props;
  return (
    <View>
      <View style={styles.rowContainer}>
        <View>
          <Text style={styles.normalText}>Vendedor</Text>
          <Text style={[styles.boldText, { width: "80%" }]}>
            Ademir Lorem ipsum
          </Text>
        </View>

        <View>
          <Text style={styles.normalText}>Cliente</Text>
          <Text style={[styles.boldText, { width: "80%" }]}>
            Ednaldo Lorem Ipsum
          </Text>
        </View>

        <RadioButtonComponent
          style={{ marginTop: 0, alignItems: "center" }}
          label="Selecionar"
          onPress={onPress}
          status={isSelected ? "checked" : "unchecked"}
        />
      </View>

      <View style={[styles.rowContainer, { marginVertical: 24 }]}>
        <View>
          <Text style={styles.normalText}>Proposta</Text>
          <Text style={[styles.boldText]}>R$ 14.000,00</Text>
        </View>

        <View>
          <Text style={styles.normalText}>Desconto</Text>
          <Text style={[styles.boldText]}>R$ 0,00</Text>
        </View>
        <View style={{ width: "25%" }} />
      </View>

      <View style={[styles.rowContainer, { marginVertical: 24 }]}>
        <View>
          <Text style={styles.normalText}>Data da venda</Text>
          <Text style={[styles.boldText]}>30/11/2020</Text>
        </View>

        <View>
          <Text style={styles.normalText}>Midia</Text>
          <Text style={[styles.boldText]}>Pacelook</Text>
        </View>
        <View style={{ width: "25%" }} />
      </View>

      <View style={[styles.rowContainer, { marginVertical: 24 }]}>
        <View>
          <Text style={styles.normalText}>Total</Text>
          <Text style={[styles.redText]}>R$ 14.000,00</Text>
        </View>

        <View>
          <Text style={styles.normalText}>Observações</Text>
          <Text style={[styles.boldText]}>-----------</Text>
        </View>
        <View style={{ width: "25%" }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  normalText: {
    fontFamily: "Raleway",
    fontSize: 12,
    color: "#000000",
  },
  boldText: {
    fontFamily: "RalewaySemiBold",
    fontSize: 12,
    color: "#000000",
  },
  redText: {
    fontFamily: "RalewaySemiBold",
    fontSize: 12,
    color: COLORS.primary,
  },
});

export default RealizeSellComponent;
