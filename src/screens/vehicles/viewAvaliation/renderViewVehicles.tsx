import React from "react";
import { View } from "react-native";
import PicturesHorizontalMosaic from "../../../components/picturesHorizontalMosaic";
import VehicleAvaliationDetails from "./vehicleAvaliationDetails";

interface RenderViewVehiclesProps {
  vehicleImages: string[];
  anoFabricacao: string;
  anoModelo: string;
  blindado: string;
  chassi: string;
  cambio: string;
  combustivel: string;
  cor: string;
  empresa: string;
  filial: string;
  marca: string;
  modelo: string;
  numeroPartidas: string;
  numeroPortas: string;
  placa: string;
  renavan: string;
  tipoVeiculo: string;
  versao: string;
}

const RenderViewVehicles: React.FC<RenderViewVehiclesProps> = (props) => {
  const {
    vehicleImages,
    anoFabricacao,
    anoModelo,
    blindado,
    chassi,
    cambio,
    combustivel,
    cor,
    empresa,
    filial,
    marca,
    modelo,
    numeroPartidas,
    numeroPortas,
    placa,
    renavan,
    tipoVeiculo,
    versao,
  } = props;
  return (
    <View>
      <PicturesHorizontalMosaic pictures={vehicleImages} />

      <VehicleAvaliationDetails
        anoFabricacao={anoFabricacao}
        anoModelo={anoModelo}
        blindado={blindado}
        chassi={chassi}
        cambio={cambio}
        combustivel={combustivel}
        cor={cor}
        empresa={empresa}
        filial={filial}
        marca={marca}
        modelo={modelo}
        numeroPartidas={numeroPartidas}
        numeroPortas={numeroPortas}
        placa={placa}
        renavan={renavan}
        tipoVeiculo={tipoVeiculo}
        versao={versao}
      />
    </View>
  );
};

export default RenderViewVehicles;
