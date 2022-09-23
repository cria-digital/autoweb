import React from "react";
import { View, Text } from "react-native";
import LineOne from "../../../../components/lineOne";
import ViewChecklist from "../../../../components/viewChecklist";
import RenderDoubleTextColumns from "../../viewAvaliation/renderDoubleTextColumns";
import styles from "./styles";

interface RenderViewAvaliationsProps {}

const RenderViewAvaliations: React.FC<RenderViewAvaliationsProps> = (props) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.textTitle12, { marginTop: 24 }]}>Checklist</Text>

      <ViewChecklist
        itemLabel="Mecanica"
        condition="Boa"
        value="0,00"
        style={{ marginTop: 24 }}
      />
      <LineOne />
      <ViewChecklist
        itemLabel="Pneus"
        condition="Boa"
        value="0,00"
        style={{ marginTop: 24 }}
      />
      <LineOne />
      <ViewChecklist
        itemLabel="Elétrica"
        condition="Boa"
        value="0,00"
        style={{ marginTop: 24 }}
      />
      <LineOne />
      <ViewChecklist
        itemLabel="Funilaria"
        condition="Boa"
        value="0,00"
        style={{ marginTop: 24 }}
      />
      <LineOne />
      <ViewChecklist
        itemLabel="Martelinho"
        condition="Boa"
        value="0,00"
        style={{ marginTop: 24 }}
      />

      <Text style={[styles.textTitle12, { marginBottom: 14 }]}>
        Média de valores
      </Text>

      <RenderDoubleTextColumns
        leftTitle="Valor de venda FIPE (R$)"
        leftValue="13.000,00"
        rightTitle="Valor de venda na região (R$)"
        rightValue="12.000,00"
      />
      <RenderDoubleTextColumns
        leftTitle="Valor de venda Web Motors (R$)"
        leftValue="13.000,00"
        rightTitle="Valor da média (R$)"
        rightValue="12.000,00"
      />

      <Text style={[styles.textTitle12, { marginVertical: 14 }]}>Resumo</Text>

      <RenderDoubleTextColumns
        leftTitle="Avaliação da loja"
        leftValue="13.000,00"
        rightTitle="Avaliação eletrônica"
        rightValue="12.000,00"
      />
      <RenderDoubleTextColumns
        leftTitle="Valor sugerido para venda"
        leftValue="13.000,00"
        rightTitle="Lucro previsto"
        rightValue="12.000,00"
      />
      <View style={{ marginBottom: 70 }} />
    </View>
  );
};

export default RenderViewAvaliations;
