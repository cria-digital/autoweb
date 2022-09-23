import React from "react";
import { View, FlatList } from "react-native";
import { vehiclesGeneralData } from "../../../../data";
import ButtonComponent from "../../../components/button";
import CardGeneral from "../../../components/cardGeneral";
import FilterButton from "../../../components/filterButton";
import InputComponent from "../../../components/input";
import LoadMore from "../../../components/loadMore";
import MagnifyIcon from "../../../icons/magnify";
import RightInputIcon from "../../../icons/rightInputIcon";
import GenerateReport from "../components/generateReport";
import ModalCheckboxs from "../components/modalCheckboxs";

interface GeneralProps {
  navigation: any;
}

const GeneralTabScreen: React.FC<GeneralProps> = (props) => {
  const { navigation } = props;
  const { navigate } = navigation;
  const [generateReportModal, setGenerateReportModal] = React.useState(false);
  const [optionsVisible, setOptionsVisible] = React.useState(false);
  const [checkboxsIndex, setCheckboxsIndex] = React.useState(0);

  const RenderGeneralCards = ({ item, index }: any) => (
    <CardGeneral
      carYear={item.carYear}
      vehicleName={item.vehicleName}
      vehicleImage={item.vehicleImage[0]}
      licensePlate={item.licensePlate}
      code={item.code}
      despachante={item.despachante}
      vendido={item.vendido}
      status={item.status}
      onPressDots={() => setOptionsVisible(true)}
    />
  );

  return (
    <View>
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

      <FlatList
        data={vehiclesGeneralData}
        extraData={vehiclesGeneralData}
        renderItem={RenderGeneralCards}
        keyExtractor={(item, index) => `${item}${index}`}
        scrollEnabled
        maxToRenderPerBatch={10}
        ListFooterComponent={() => <LoadMore />}
      />

      <GenerateReport
        animationType="fade"
        visible={generateReportModal}
        setVisible={setGenerateReportModal}
      />

      <ModalCheckboxs
        animationType="fade"
        visible={optionsVisible}
        setVisible={setOptionsVisible}
        labels={[
          "Avaliação",
          "Compra",
          "Estoque",
          "Venda",
          "Despachante",
          "Vendido",
        ]}
        checkboxsIndex={checkboxsIndex}
        onPressMenuItems={(item) => setCheckboxsIndex(item)}
      />
    </View>
  );
};

export default GeneralTabScreen;
