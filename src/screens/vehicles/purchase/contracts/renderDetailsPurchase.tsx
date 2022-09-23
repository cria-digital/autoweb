import React from "react";
import { View, Text } from "react-native";
import LineOne from "../../../../components/lineOne";
import RenderDoubleTextColumns from "../../viewAvaliation/renderDoubleTextColumns";
import styles from "./styles";
interface RenderDetailsPurchaseProps {}

const RenderDetailsPurchase: React.FC<RenderDetailsPurchaseProps> = (props) => {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.title, { marginTop: 24, marginBottom: 14 }]}>
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

      <Text style={[styles.normalText, { marginTop: 24 }]}>Certificado</Text>
      <LineOne style={[styles.line, { marginTop: 48 }]} />

      <Text style={[styles.normalText, { marginTop: 62 }]}>
        Numero do motor
      </Text>
      <LineOne style={[styles.line, { marginTop: 48 }]} />

      <Text style={[styles.normalText, { marginTop: 62 }]}>Vendedor</Text>
      <LineOne style={[styles.line, { marginTop: 48, marginBottom: 32 }]} />

      <Text style={[styles.title, { marginBottom: 14 }]}>
        Dados do proprietário
      </Text>

      <RenderDoubleTextColumns
        leftTitle="Nome"
        leftValue="Autoweb"
        rightTitle="CEP"
        rightValue="98765-987"
      />

      <RenderDoubleTextColumns
        leftTitle="CPF / CNPJ"
        leftValue="58.000.000/0001-00"
        rightTitle="Endereço"
        rightValue="Lorem ipsum dolor"
      />

      <RenderDoubleTextColumns
        leftTitle="I.E - Inscrição Estadual"
        leftValue="Isento"
        rightTitle="Cidade"
        rightValue="São Paulo"
      />

      <RenderDoubleTextColumns
        leftTitle="E-mail"
        leftValue="nome@gmail.com"
        rightTitle="Estado"
        rightValue="São Paulo"
      />

      <RenderDoubleTextColumns
        leftTitle="Contato"
        leftValue="11 99999-9999"
        rightTitle="Bairro"
        rightValue="Lorem ipsum"
      />

      <RenderDoubleTextColumns
        leftTitle="CNH"
        leftValue="123456789"
        rightTitle="Vencimento"
        rightValue="20/05/2020"
      />

      <Text style={[styles.title, { marginBottom: 14, marginTop: 24 }]}>
        Dados do intermediário
      </Text>

      <RenderDoubleTextColumns
        leftTitle="Intermediário"
        leftValue="Lorem ipsum"
        rightTitle="CEP"
        rightValue="98765-987"
      />

      <RenderDoubleTextColumns
        leftTitle="CPF / CNPJ"
        leftValue="58.000.000/0001-00"
        rightTitle="Endereço"
        rightValue="Lorem ipsum dolor"
      />

      <RenderDoubleTextColumns
        leftTitle="I.E - Inscrição Estadual"
        leftValue="Isento"
        rightTitle="Cidade"
        rightValue="São Paulo"
      />

      <RenderDoubleTextColumns
        leftTitle="E-mail"
        leftValue="nome@gmail.com"
        rightTitle="Estado"
        rightValue="São Paulo"
      />

      <RenderDoubleTextColumns
        leftTitle="Contato"
        leftValue="11 99999-9999"
        rightTitle="Bairro"
        rightValue="Lorem ipsum"
      />

      <RenderDoubleTextColumns leftTitle="CNH" leftValue="123456789" />
      <View style={{ marginBottom: 70 }} />
    </View>
  );
};

export default RenderDetailsPurchase;
