import React from "react";
import { View, Text } from "react-native";
import LineOne from "../../../../components/lineOne";
import styles from "./styles";

interface RenderViewPaymentFormatProps {}

const RenderViewPaymentFormat: React.FC<RenderViewPaymentFormatProps> = (
  props
) => {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.textTitle12, { marginVertical: 24 }]}>
        Checklist
      </Text>

      <View style={[styles.rowDouble]}>
        <View>
          <Text style={[styles.normalText]}>Tipo de débito</Text>
          <Text style={[styles.textTitle16]}>IPVA</Text>
        </View>
        <View>
          <Text style={[styles.normalText]}>{`Valor do débito (R$)`}</Text>
          <Text style={[styles.textTitle16]}>R$ {`10.000,00`}</Text>
        </View>
      </View>

      <View style={[{ marginTop: 24 }]}>
        <Text style={[styles.normalText]}>Data/Prazo</Text>
        <Text style={[styles.textTitle16]}>30/06/2020</Text>
      </View>

      <Text style={[styles.normalText, { marginTop: 24 }]}>Observações</Text>
      <Text style={[styles.textTitle12]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Text>

      <Text style={[styles.textTitle12, { marginVertical: 24 }]}>
        Checklist
      </Text>

      <View style={[styles.rowFlex]}>
        <Text style={[styles.textTitle12]}>Valor da compra</Text>
        <Text style={[styles.textTitle12]}>R$ 18.000,00</Text>
      </View>
      <LineOne />
      <View style={[styles.rowFlex, { marginTop: 16 }]}>
        <Text style={[styles.textTitle12]}>Débitos</Text>
        <Text style={[styles.textTitle12]}>R$ 4.000,00</Text>
      </View>
      <LineOne />
      <Text style={[styles.redText, { marginVertical: 16 }]}>R$ 14.000,00</Text>

      <Text style={[styles.textTitle12, { marginVertical: 24 }]}>
        Forma de pagamento
      </Text>

      <View style={[styles.rowFlex]}>
        <Text style={[styles.textTitle12]}>Boleto</Text>
        <Text style={[styles.textTitle12]}>R$ 4.000,00</Text>
      </View>
      <LineOne />
      <View style={[styles.rowFlex, { marginTop: 16 }]}>
        <Text style={[styles.textTitle12]}>Débitos</Text>
        <Text style={[styles.textTitle12]}>R$ 10.000,00</Text>
      </View>
      <LineOne />
      <Text style={[styles.redText, { marginTop: 16, marginBottom: 72 }]}>
        R$ 14.000,00
      </Text>
    </View>
  );
};

export default RenderViewPaymentFormat;
