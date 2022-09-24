import React from "react";
import { View, Text } from "react-native";
import LineOne from "../../../../../../components/lineOne";
import styles from "./styles";

const RenderPaymentFormatDate: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.row, { marginTop: 14 }]}>
        <Text style={styles.textTitle12}>Boleto</Text>
        <Text style={styles.textTitle12}>R$ 4.000,00</Text>
      </View>

      <View style={{ marginVertical: 16 }}>
        <LineOne />
      </View>

      <View style={styles.row}>
        <Text style={styles.textTitle12}>Débitos</Text>
        <Text style={styles.textTitle12}>R$ 10.000,00</Text>
      </View>

      <View style={{ marginVertical: 16 }}>
        <LineOne />
      </View>

      <Text style={styles.redFinalText}>R$ 14.000,00</Text>
    </View>
  );
};

export default RenderPaymentFormatDate;
