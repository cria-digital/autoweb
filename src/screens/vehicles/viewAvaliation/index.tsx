import React, { useEffect } from "react";
import { View, ScrollView, Text } from "react-native";
import { vehiclesAwaitingApprovalData } from "../../../../data";
import NextBackButtons from "../../../components/nextBackButtons";
import PaginationPages from "../../../components/paginationPages";
import PicturesHorizontalMosaic from "../../../components/picturesHorizontalMosaic";
import SimpleNav from "../../../components/simpleNav";
import RenderDoubleTextColumns from "./renderDoubleTextColumns";
import styles from "./styles";
import VehicleAvaliationDetails from "./vehicleAvaliationDetails";

const ViewAvaliationScreen = ({ navigation, route }: any) => {
  const { params } = route;
  const { id } = params;
  const { navigate, goBack } = navigation;
  const [currentPage, setCurrentPage] = React.useState("Veiculo");
  const pages = ["Veiculo", "Checklist", "Média de Avaliadores", "Resumo"];
  const vehiclesImages = vehiclesAwaitingApprovalData.find(
    (vehicle) => vehicle.id === id
  );

  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.container}>
        <SimpleNav label="Visualizar avaliação" onPressBack={goBack} />

        <PaginationPages
          currentPage={currentPage}
          pages={pages}
          setCurrentPage={setCurrentPage}
        />

        <PicturesHorizontalMosaic pictures={vehiclesImages?.vehicleImage} />

        <VehicleAvaliationDetails
          anoFabricacao="2019"
          anoModelo="2019"
          blindado="Não"
          chassi="9BWZZZ377KT000000"
          cambio="Automático"
          combustivel="Gasolina"
          cor="Branco"
          empresa="Empresa 1"
          filial="Filial 1"
          marca="Volkswagen"
          modelo="Gol"
          numeroPartidas="1"
          numeroPortas="4"
          placa="ABC-1234"
          renavan="123456789"
          tipoVeiculo="Carro"
          versao="1.0"
        />

        <NextBackButtons
          firstButtonLabel="Imprimir"
          secondButtonLabel="Voltar para o menu principal"
          firstButtonOnPress={() => alert("Imprimir não disponível ainda")}
          secondButtonOnPress={() => navigate("Vehicles")}
        />
      </View>
    </ScrollView>
  );
};

export default ViewAvaliationScreen;
