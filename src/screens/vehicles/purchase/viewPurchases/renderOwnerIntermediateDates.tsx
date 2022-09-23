import React from "react";
import { View, Text } from "react-native";
import RenderDoubleTextColumns from "../../viewAvaliation/renderDoubleTextColumns";
import styles from "./styles";

interface RenderOwnerIntermediateDatesProps {}

const RenderOwnerIntermediateDates: React.FC<
  RenderOwnerIntermediateDatesProps
> = (props) => {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.textTitle12, { marginTop: 24 }]}>Proprietário</Text>

      <RenderDoubleTextColumns
        leftTitle="Proprietário"
        leftValue="Pessoa Física"
        rightTitle="Data de nascimento"
        rightValue="20/10/1990"
      />
      <RenderDoubleTextColumns
        leftTitle="Nome completo"
        leftValue="Lorem Ipsum da Silva"
        rightTitle="Sexo"
        rightValue="Masculino"
      />
      <RenderDoubleTextColumns
        leftTitle="Contato"
        leftValue="11 99999-9999"
        rightTitle="Estado civil"
        rightValue="Solteiro"
      />
      <RenderDoubleTextColumns
        leftTitle="E-mail"
        leftValue="email@email.com"
        rightTitle="Renda"
        rightValue="R$ 5.000,00"
      />
      <RenderDoubleTextColumns
        leftTitle="Versão"
        leftValue="1234567890"
        rightTitle="I.E - Inscrição Estadual"
        rightValue="Isento"
      />

      <RenderDoubleTextColumns leftTitle="CPF" leftValue="1234567890" />

      <RenderDoubleTextColumns leftTitle="CNH" leftValue="1234567890" />

      <RenderDoubleTextColumns
        leftTitle="Vencimento CNH"
        leftValue="10/10/2020"
      />

      <RenderDoubleTextColumns
        leftTitle="Endereço"
        leftValue="Lorem ipsum dolor 1234"
      />

      <RenderDoubleTextColumns
        leftTitle="Bairro"
        leftValue="Bairro 123"
        rightTitle="Cidade"
        rightValue="São Paulo"
      />
      <RenderDoubleTextColumns
        leftTitle="CEP"
        leftValue="12345-678"
        rightTitle="Estado"
        rightValue="SP"
      />

      <View style={{ marginTop: 14 }} />
      <Text style={styles.normalText}>Observações</Text>
      <Text style={[styles.textTitle12, { marginBottom: 72 }]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        vulputate, odio sed placerat dapibus, nibh tellus commodo nibh,
        convallis suscipit velit augue a enim. Etiam a fermentum nibh, eget
        dignissim ante.{" "}
      </Text>
    </View>
  );
};

export default RenderOwnerIntermediateDates;
