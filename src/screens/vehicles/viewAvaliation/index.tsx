import React, { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import { useRecoilValue } from "recoil";
import AuthStatus from "../../../atoms/auth";
import Loading from "../../../components/loading";
import NextBackButtons from "../../../components/nextBackButtons";
import PaginationPages from "../../../components/paginationPages";
import SimpleNav from "../../../components/simpleNav";
import { editAvaliation } from "../../../config/avaliacao";
import {
  consultBrands,
  consultFuel,
  consultModels,
  consultVersion,
} from "../../../config/general";
import RenderAvaliationPrices from "./renderAvaliationPrices";
import RenderChecklistsAvaliations from "./renderChecklists";
import RenderViewVehicles from "./renderViewVehicles";
import styles from "./styles";

const ViewAvaliationScreen = ({ navigation, route }: any) => {
  const { params } = route;
  const { id } = params;
  const { navigate, goBack } = navigation;
  const { tokenApi } = useRecoilValue(AuthStatus);
  const [currentPage, setCurrentPage] = useState("Veiculo");
  const pages = ["Veiculo", "Checklist", "Média de Avaliadores", "Resumo"];
  const [avaliationValues, setAvaliationValues] = useState([]);
  const [impostos, setImpostos] = useState([]);
  const [itens, setItens] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fuel, setFuel] = useState([]);
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [versions, setVersions] = useState([]);

  const getVehicleDetails = async () => {
    const result = await editAvaliation(id, tokenApi);
    if (result) {
      setAvaliationValues(result?.Avaliacao);
      setImpostos(result?.Impostos);
      setItens(result?.Itens);
      if (result) {
        const model = await consultModels(result?.Avaliacao?.idMarca, tokenApi);
        const version = await consultVersion(
          result?.Avaliacao?.idModelo,
          tokenApi
        );
        setModels(model?.Modelos);
        setVersions(version?.Versoes);
      }
    }
  };

  async function getGeneralValues() {
    const fuel = await consultFuel(tokenApi);
    const brand = await consultBrands(tokenApi);

    if (fuel && brand) {
      setFuel(fuel?.Combustivel);
      setBrands(brand?.Marcas);
      setLoading(false);
    }
  }

  function getFuelPerID(valueID: string) {
    const fuelValue = fuel.find((fuel) => fuel?.idCombustivel === valueID);
    return fuelValue?.Combustivel;
  }
  function getBrandPerID(valueID: string) {
    const brandValue = brands.find((brand) => brand.idMarca === valueID);
    return brandValue?.Marca;
  }
  function getModelPerID(valueID: string) {
    const modelValue = models?.find((model) => model.idModelo === valueID);
    return modelValue?.Modelo;
  }
  function getVersionPerID(valueID: string) {
    const versionValue = versions?.find(
      (version) => version.idVersao === valueID
    );
    return versionValue?.Versao;
  }

  useEffect(() => {
    setLoading(true);
    getVehicleDetails();
    getGeneralValues();
  }, []);

  const GetAllVehicleDates = () => {
    const attr = avaliationValues;
    return (
      <RenderViewVehicles
        anoFabricacao={attr?.AnoFabricacao}
        anoModelo={attr?.AnoModelo}
        blindado={attr?.Blindado === false ? "Não" : "Sim"}
        cambio=""
        chassi=""
        combustivel={getFuelPerID(attr?.idCombustivel)}
        cor=""
        empresa="1"
        km={attr?.Km}
        marca={getBrandPerID(attr?.idMarca)}
        modelo={getModelPerID(attr?.idModelo)}
        numeroPartidas=""
        numeroPortas=""
        placa={attr?.Placa}
        renavam={attr?.Renavam}
        tipoVeiculo=""
        versao={getVersionPerID(attr?.idVersao)}
      />
    );
  };

  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.container}>
        <SimpleNav label="Visualizar avaliação" onPressBack={goBack} />

        <PaginationPages
          currentPage={currentPage}
          pages={pages}
          setCurrentPage={setCurrentPage}
        />
        {loading && (
          <Loading isLoading size={50} style={{ height: 50, marginTop: 100 }} />
        )}

        {!loading && (
          <>
            {currentPage === "Veiculo" && <GetAllVehicleDates />}
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
          </>
        )}
      </View>
    </ScrollView>
  );
};

export default ViewAvaliationScreen;
