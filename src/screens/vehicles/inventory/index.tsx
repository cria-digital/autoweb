import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import DoubleButtonsComponent from "../../../components/doubleButtons";
import FilterButton from "../../../components/filterButton";
import InputComponent from "../../../components/input";
import LoadMore from "../../../components/loadMore";
import RadioPagination from "../../../components/radioPagination";
import MagnifyIcon from "../../../icons/magnify";
import RightInputIcon from "../../../icons/rightInputIcon";
import CardModal from "../components/cardModal";
import GenerateReport from "../components/generateReport";
import FinishedAndAwaitingPurchaseTab from "../purchase/components/FinishedAndWaiting";
import AlertModalsForInventory from "./alertModalsForInventory";
import styles from "./styles";

interface InventoryTabScreenProps {
  navigation: any;
}

const InventoryTabScreen: React.FC<InventoryTabScreenProps> = (props) => {
  const { navigation } = props;
  const { navigate } = navigation;
  const [cardID, setCardID] = useState<number | null>(null);
  const [cardOptionsVisible, setCardOptionsVisible] = useState(false);
  const [registrationPage, setRegistrationPage] = useState("Finished");
  const [generateReportModal, setGenerateReportModal] = useState(false);
  const [releasePurchase, setReleasePurchase] = useState(false);
  const [purchaseSuccessModal, setCancelPurchaseSuccessModal] = useState(false);
  const [cancelPurchase, setCancelPurchase] = useState(false);
  const [cancelPurchaseSuccessModal, setPurchaseSuccessModal] = useState(false);

  const switchOptionsMenu = (item: any) => {
    switch (item) {
      case "Visualizar":
        navigate("ViewPurchase", {
          id: cardID,
        });
        break;
      case "Editar":
        navigate("RegisterPurchase", {
          isEditing: true,
        });
        break;
      case "Liberar Venda":
        setCardOptionsVisible(false);
        setReleasePurchase(true);
        break;
      case "Cancelar Venda":
        setCardOptionsVisible(false);
        setCancelPurchase(true);
        break;
      case "Excluir":
        setCardOptionsVisible(false);
        alert("compra deletada");
        break;
    }
  };
  return (
    <View style={{ height: "100%" }}>
      <View style={{ height: "auto" }}>
        <DoubleButtonsComponent
          labelLeft="Gerar relatório"
          labelRight="Cadastrar compra"
          onPressLeft={() => setGenerateReportModal(true)}
          onPressRight={() => navigate("RegisterPurchase")}
        />

        <View style={styles.inputView}>
          <InputComponent
            mode="flat"
            right={RightInputIcon(
              () => (
                <MagnifyIcon color={"#000000"} />
              ),
              () => navigate("FilterVehicles")
            )}
          />
        </View>

        <FilterButton label="Filtrar" />

        <View style={styles.radioButtons}>
          <RadioPagination
            assessmentStatus={registrationPage}
            setAssessmentStatus={setRegistrationPage}
            firstStatus="Finished"
            secondStatus="Waiting"
            firstLabel="Cadastros concluídos"
            secondLabel="Cadastros pendentes"
          />
        </View>
      </View>

      <View style={{ height: "auto", marginBottom: 32 }}>
        <FinishedAndAwaitingPurchaseTab
          assessmentStatus={registrationPage}
          setCardId={setCardID}
          setCardOptionsVisible={setCardOptionsVisible}
        />
      </View>
      <LoadMore />
      <GenerateReport
        animationType="fade"
        visible={generateReportModal}
        setVisible={setGenerateReportModal}
      />
      <CardModal
        labels={[
          "Visualizar",
          "Editar",
          "Liberar Venda",
          "Cancelar Venda",
          "Excluir",
        ]}
        animationType="fade"
        visible={cardOptionsVisible}
        setVisible={setCardOptionsVisible}
        onPressMenuItems={(item: string) => switchOptionsMenu(item)}
      />

      <AlertModalsForInventory
        releasePurchase={releasePurchase}
        setReleasePurchase={setReleasePurchase}
        cancelPurchase={cancelPurchase}
        setCancelPurchase={setCancelPurchase}
        purchaseSuccessModal={purchaseSuccessModal}
        setPurchaseSuccessModal={setPurchaseSuccessModal}
        cancelModal={cancelPurchaseSuccessModal}
        setCancelModal={setCancelPurchaseSuccessModal}
      />
    </View>
  );
};

export default InventoryTabScreen;
