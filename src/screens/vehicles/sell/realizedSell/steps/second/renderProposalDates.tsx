import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

const RenderProposalDates: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={{ marginVertical: 24 }}>
        <Text style={styles.normalText}>Vendedor</Text>
        <Text style={styles.textTitle12}>Lorem Ipsum</Text>
      </View>

      <View style={styles.rowDouble}>
        <View>
          <Text style={styles.normalText}>Proposta</Text>
          <Text style={styles.textTitle12}>Lorem Ipsum</Text>
        </View>

        <View>
          <Text style={styles.normalText}>Proposta</Text>
          <Text style={styles.textTitle12}>Lorem Ipsum</Text>
        </View>

        <View>
          <Text style={styles.normalText}>Observações</Text>
          <Text style={styles.redText}>R$ 10.000,00</Text>
        </View>
      </View>

      <View style={{ marginVertical: 24 }}>
        <Text style={styles.normalText}>Observações</Text>
        <Text style={styles.textTitle12}>-------</Text>
      </View>
    </View>
  );
};

export default RenderProposalDates;
