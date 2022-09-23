import React from "react";
import { View, Text, Image } from "react-native";
import RenderDoubleTextColumns from "../../viewAvaliation/renderDoubleTextColumns";
import styles from "./styles";

interface RenderVehicleDatesProps {}

const RenderVehicleDates: React.FC<RenderVehicleDatesProps> = (props) => {
  return (
    <View style={[styles.container]}>
      <View style={{ flexDirection: "row", marginTop: 24 }}>
        <Image
          source={{
            uri: "https://cdn.pixabay.com/photo/2019/05/23/02/21/mclaren-4223024__340.jpg",
          }}
          style={styles.image}
          resizeMode="cover"
        />
        <Image
          source={{
            uri: "https://cdn.pixabay.com/photo/2019/05/23/02/21/mclaren-4223024__340.jpg",
          }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <Image
        source={{
          uri: "https://cdn.pixabay.com/photo/2019/05/23/02/21/mclaren-4223024__340.jpg",
        }}
        style={styles.imageAfter}
        resizeMode="cover"
      />
      <View style={{ marginTop: 14 }} />
      <RenderDoubleTextColumns
        leftTitle="Empresa"
        leftValue="Car veículos"
        rightTitle="Renavan"
        rightValue="123456789"
      />
      <RenderDoubleTextColumns
        leftTitle="Filial"
        leftValue="Zona Sul"
        rightTitle="Chassi"
        rightValue="123456789"
      />
      <RenderDoubleTextColumns
        leftTitle="Marca"
        leftValue="Marca 1"
        rightTitle="Nº de partidas"
        rightValue="Lorem ipsum"
      />
      <RenderDoubleTextColumns
        leftTitle="Modelo"
        leftValue="Lorem ipsum"
        rightTitle="Nº de portas"
        rightValue="4 portas"
      />
      <RenderDoubleTextColumns
        leftTitle="Versão"
        leftValue="Lorem ipsum"
        rightTitle="Câmbio"
        rightValue="Automático"
      />
      <RenderDoubleTextColumns
        leftTitle="Tipo de veículo"
        leftValue="Novo"
        rightTitle="Cor"
        rightValue="Amarelo"
      />
      <RenderDoubleTextColumns
        leftTitle="Ano do modelo"
        leftValue="2022"
        rightTitle="Combustível"
        rightValue="Gasolina"
      />
      <RenderDoubleTextColumns
        leftTitle="Ano de fabricação"
        leftValue="2022"
        rightTitle="Blindado"
        rightValue="Sim"
      />
      <RenderDoubleTextColumns
        leftTitle="Placa"
        leftValue="ABC1234"
        rightTitle="Avaliador"
        rightValue="Avaliador X"
      />
      <View style={{ marginBottom: 72 }} />
    </View>
  );
};

export default RenderVehicleDates;
