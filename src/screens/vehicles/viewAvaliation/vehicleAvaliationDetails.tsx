import React from "react";
import { View, Text } from "react-native";
import RenderDoubleTextColumns from "./renderDoubleTextColumns";
import styles from "./styles";

interface VehicleAvaliationDetailsProps {
  empresa: string;
  renavan: string;
  filial: string;
  chassi: string;
  marca: string;
  numeroPartidas: string;
  modelo: string;
  numeroPortas: string;
  versao: string;
  cambio: string;
  tipoVeiculo: string;
  cor: string;
  anoModelo: string;
  combustivel: string;
  anoFabricacao: string;
  blindado: string;
  placa: string;
}

const VehicleAvaliationDetails: React.FC<VehicleAvaliationDetailsProps> = (
  props
) => {
  const {
    empresa,
    renavan,
    filial,
    chassi,
    marca,
    numeroPartidas,
    modelo,
    numeroPortas,
    versao,
    cambio,
    tipoVeiculo,
    cor,
    anoModelo,
    combustivel,
    anoFabricacao,
    blindado,
    placa,
  } = props;
  return (
    <>
      <RenderDoubleTextColumns
        leftTitle="Empresa"
        leftValue={empresa}
        rightTitle="Renavan"
        rightValue={renavan}
      />
      <RenderDoubleTextColumns
        leftTitle="Filial"
        leftValue={filial}
        rightTitle="Chassi"
        rightValue={chassi}
      />
      <RenderDoubleTextColumns
        leftTitle="Marca"
        leftValue={marca}
        rightTitle="Nº de partidas"
        rightValue={numeroPartidas}
      />
      <RenderDoubleTextColumns
        leftTitle="Modelo"
        leftValue={modelo}
        rightTitle="Nº de portas"
        rightValue={numeroPortas}
      />
      <RenderDoubleTextColumns
        leftTitle="Versão"
        leftValue={versao}
        rightTitle="Câmbio"
        rightValue={cambio}
      />
      <RenderDoubleTextColumns
        leftTitle="Tipo de veículo"
        leftValue={tipoVeiculo}
        rightTitle="Cor"
        rightValue={cor}
      />
      <RenderDoubleTextColumns
        leftTitle="Ano do modelo"
        leftValue={anoModelo}
        rightTitle="Combustível"
        rightValue={combustivel}
      />
      <RenderDoubleTextColumns
        leftTitle="Ano de fabricação"
        leftValue={anoFabricacao}
        rightTitle="Blindado"
        rightValue={blindado}
      />
      <View style={[styles.w50, { marginTop: 12, marginBottom: 24 }]}>
        <Text style={styles.text}>Placa</Text>
        <Text style={styles.boldText}>{placa}</Text>
      </View>
    </>
  );
};

export default VehicleAvaliationDetails;
