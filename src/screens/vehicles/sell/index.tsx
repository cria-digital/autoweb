import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { vehiclesGeneralData } from "../../../../data";
import AlertModal from "../../../components/alertModal";
import ButtonComponent from "../../../components/button";
import CardGeneral from "../../../components/cardGeneral";
import FilterButton from "../../../components/filterButton";
import InputComponent from "../../../components/input";
import LineOne from "../../../components/lineOne";
import LoadMore from "../../../components/loadMore";
import MagnifyIcon from "../../../icons/magnify";
import RightInputIcon from "../../../icons/rightInputIcon";
import CardModal from "../components/cardModal";
import GenerateReport from "../components/generateReport";

interface GeneralProps {
  navigation: any;
}

const SellTabScreen: React.FC<GeneralProps> = (props) => {
  const { navigation } = props;
  const { navigate } = navigation;
  const [cardID, setCardID] = React.useState(0);
  const [canceledSell, setCanceledSell] = React.useState(false);
  const [optionsVisible, setOptionsVisible] = React.useState(false);
  const [cancelSellModal, setCancelSellModal] = React.useState(false);
  const [generateReportModal, setGenerateReportModal] = React.useState(false);

  const RenderGeneralCards = ({ item, index }: any) => (
    <CardGeneral
      carYear={item.carYear}
      vehicleName={item.vehicleName}
      vehicleImage={item.vehicleImage[0]}
      licensePlate={item.licensePlate}
      inventoryDays={item.inventoryDays}
      code={item.code}
      onPressDots={() => {
        setCardID(item.id);
        setOptionsVisible(true);
      }}
    />
  );

  const switchOptionsMenu = (item: any) => {
    switch (item) {
      case "Adicionar proposta":
        navigate("AddProposal");
        break;
      case "Realizar venda":
        setOptionsVisible(false);
        navigate("RealizedSell");
        break;
      case "Visualizar":
        setOptionsVisible(false);
        navigate("ViewSell");
        break;
      case "Editar cadastro":
        setOptionsVisible(false);
        alert("Editar cadastro não implementado");
        break;
      case "Cancelar venda":
        setOptionsVisible(false);
        setCancelSellModal(true);
        break;
      case "Excluir venda":
        setOptionsVisible(false);
        alert("compra deletada");
        break;
    }
  };

  return (
    <View style={{ height: "100%" }}>
      <View style={{ height: "auto" }}>
        <ButtonComponent
          mode="outlined"
          style={{ marginVertical: 24 }}
          label="Gerar relatório"
          onPress={() => setGenerateReportModal(true)}
        />

        <InputComponent
          mode="flat"
          right={RightInputIcon(
            () => (
              <MagnifyIcon color={"#000000"} />
            ),
            () => navigate("FilterVehicles")
          )}
        />
        <View style={{ marginBottom: 16 }} />

        <FilterButton label="Filtrar" />
        <LineOne style={styles.lineOne} />
      </View>

      <View style={{ height: "auto" }}>
        <FlatList
          data={vehiclesGeneralData}
          extraData={vehiclesGeneralData}
          renderItem={RenderGeneralCards}
          keyExtractor={(item, index) => `${item}${index}`}
          scrollEnabled
          maxToRenderPerBatch={10}
          onEndReachedThreshold={0.5}
          initialNumToRender={10}
          contentContainerStyle={{ paddingBottom: "100%" }}
          ListFooterComponent={() => (
            <View style={{ marginBottom: 16 }}>
              <LoadMore />
            </View>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>

      <GenerateReport
        animationType="fade"
        visible={generateReportModal}
        setVisible={setGenerateReportModal}
      />

      <CardModal
        labels={[
          "Adicionar proposta",
          "Realizar venda",
          "Visualizar",
          "Editar cadastro",
          "Cancelar venda",
          "Excluir venda",
        ]}
        animationType="fade"
        visible={optionsVisible}
        setVisible={setOptionsVisible}
        onPressMenuItems={(item: string) => switchOptionsMenu(item)}
      />

      <AlertModal
        visible={cancelSellModal}
        animationType="fade"
        firstButtonLabel="Sim, cancelar proposta"
        secondButtonLabel="Não, voltar"
        warningMessage
        beforeFirstStrongText="Deseja mesmo"
        firstStrongText="cancelar"
        middleStrongText="a"
        secondStrongText="venda"
        afterSecondStrongText="dessa venda?"
        setVisible={setCancelSellModal}
        cancelOrClose={() => {
          setCancelSellModal(false);
          setCanceledSell(true);
        }}
      />
      <AlertModal
        visible={canceledSell}
        animationType="fade"
        firstButtonLabel="Fechar"
        okMessage
        beforeFirstStrongText="A"
        firstStrongText="venda"
        middleStrongText="foi"
        secondStrongText="cancelada"
        afterSecondStrongText="com sucesso!"
        setVisible={setCanceledSell}
        cancelOrClose={() => setCanceledSell(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  lineOne: {
    width: "120%",
    height: 1,
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    marginLeft: -16,
    marginTop: 16,
  },
});

export default SellTabScreen;
