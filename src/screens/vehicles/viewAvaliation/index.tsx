import React, { useEffect } from "react";
import { View, ScrollView, Text } from "react-native";
import { vehiclesAwaitingApprovalData } from "../../../../data";
import NextBackButtons from "../../../components/nextBackButtons";
import PaginationPages from "../../../components/paginationPages";
import PicturesHorizontalMosaic from "../../../components/picturesHorizontalMosaic";
import ReportComponent from "../../../components/report";
import SimpleNav from "../../../components/simpleNav";
import RenderAvaliationPrices from "./renderAvaliationPrices";
import RenderChecklistsAvaliations from "./renderChecklists";
import RenderDoubleTextColumns from "./renderDoubleTextColumns";
import RenderViewVehicles from "./renderViewVehicles";
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

        {currentPage === "Veiculo" && (
          <RenderViewVehicles
            anoFabricacao="2019"
            anoModelo="2019"
            blindado="sim"
            cambio="automático"
            chassi="12345678901"
            combustivel="gasolina"
            cor="preto"
            empresa="Empresa 1"
            filial="Filial 1"
            marca="Marca do carro"
            modelo="Modelo do carro"
            numeroPartidas="19"
            numeroPortas="4"
            placa="AAA1234"
            renavan="123456789010"
            tipoVeiculo="camioneta"
            vehicleImages={vehiclesImages?.vehicleImage}
            versao="2.0"
          />
        )}
        {currentPage === "Checklist" && <RenderChecklistsAvaliations />}
        {currentPage === "Média de Avaliadores" && (
          <RenderAvaliationPrices
            firstTitle="Valor de venda FIPE (R$)"
            firstPrice={10000}
            secondTitle="Valor de venda Web Motors (R$)"
            secondPrice={10000}
            thirdTitle="Valor de venda Região (R$)"
            thirdPrice={10000}
            fourthTitle="Valor médio (R$)"
            fourthPrice={10000}
          />
        )}

        {currentPage === "Resumo" && (
          <RenderAvaliationPrices
            firstTitle="Avaliação da loja"
            firstPrice={10000}
            secondTitle="Avaliação eletrônica"
            secondPrice={10000}
            thirdTitle="Valor sugerido para venda"
            thirdPrice={10000}
            fourthTitle="Lucro previsto"
            fourthPrice={10000}
          />
        )}

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
