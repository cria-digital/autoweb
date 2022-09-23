import React from "react";
import { View, Text } from "react-native";
import LineOne from "../../../../components/lineOne";
import RenderDoubleTextColumns from "../../viewAvaliation/renderDoubleTextColumns";
import styles from "./styles";

interface RenderProcurationProps {}

const RenderProcuration: React.FC<RenderProcurationProps> = (props) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.normalText, { marginBottom: 32 }]}>{`OUTORGANTE: ADM,
RG n. ISENTO, CPF/MF n. 999,6598,6352-99,
Endereco RUA. 29 DE AGOSTO, 123,
Bairro LOREN, Municipio SALVADOR, Estado BA,
Cep 99999-999, Telefone : (71)9999-8976, Telefone Cel : ().`}</Text>

      <Text style={[styles.title, { marginBottom: 10 }]}>
        Características do veículo
      </Text>

      <RenderDoubleTextColumns
        leftTitle="Marca"
        leftValue="Volkswagen"
        rightTitle="Cor"
        rightValue="Azul"
      />
      <RenderDoubleTextColumns
        leftTitle="Modelo"
        leftValue="Lorem ipsum"
        rightTitle="Chassi"
        rightValue="123456"
      />
      <RenderDoubleTextColumns
        leftTitle="Versão"
        leftValue="Lorem ipsum"
        rightTitle="Renavan"
        rightValue="9876543"
      />
      <RenderDoubleTextColumns
        leftTitle="Ano/Modelo"
        leftValue="2021/2022"
        rightTitle="Combustível"
        rightValue="Gasolina"
      />
      <RenderDoubleTextColumns
        leftTitle="Placa"
        leftValue="abc5d456"
        rightTitle="Portas"
        rightValue="4"
      />

      <RenderDoubleTextColumns
        leftTitle="Nome do intermediador"
        leftValue="Lorem ipsum in lorem ipsum"
      />

      <Text
        style={[styles.normalText, { alignSelf: "flex-end", marginTop: 32 }]}
      >
        São Paulo, XX de Janeiro de 2020
      </Text>

      <LineOne style={styles.line} />
      <Text style={[styles.normalText, { textAlign: "center", marginTop: 6 }]}>
        Outorgado: Loren Ipsum da Silva
      </Text>
      <Text style={[styles.normalText, { textAlign: "center", marginTop: 6 }]}>
        CPF: 999.000.999-99
      </Text>

      <LineOne style={styles.line} />
      <Text
        style={[
          styles.normalText,
          { textAlign: "center", marginTop: 6, marginBottom: 70 },
        ]}
      >
        Outorgados: Revendedor
      </Text>
    </View>
  );
};

export default RenderProcuration;
