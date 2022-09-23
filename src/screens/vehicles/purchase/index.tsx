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
import AlertModalsForPurchase from "./components/alertModalsForPurchase";
import FinishedAndAwaitingPurchaseTab from "./components/FinishedAndWaiting";
import styles from "./styles";

interface PurchaseTabScreenProps {
  navigation: any;
}

const PurchaseTabScreen: React.FC<PurchaseTabScreenProps> = (props) => {
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
        alert("Trabalhando na edição");
        break;
      case "Liberar compra":
        setCardOptionsVisible(false);
        setReleasePurchase(true);
        break;
      case "Cancelar compra":
        setCardOptionsVisible(false);
        setCancelPurchase(true);
        break;
      case "Excluir compra":
        setCardOptionsVisible(false);
        alert("compra deletada");
        break;
    }
  };
  return (
    <ScrollView>
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

      <FinishedAndAwaitingPurchaseTab
        assessmentStatus={registrationPage}
        setCardId={setCardID}
        setCardOptionsVisible={setCardOptionsVisible}
      />
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
          "Liberar compra",
          "Cancelar compra",
          "Excluir compra",
        ]}
        animationType="fade"
        visible={cardOptionsVisible}
        setVisible={setCardOptionsVisible}
        onPressMenuItems={(item: string) => switchOptionsMenu(item)}
      />

      <AlertModalsForPurchase
        releasePurchase={releasePurchase}
        setReleasePurchase={setReleasePurchase}
        cancelPurchase={cancelPurchase}
        setCancelPurchase={setCancelPurchase}
        purchaseSuccessModal={purchaseSuccessModal}
        setPurchaseSuccessModal={setPurchaseSuccessModal}
        cancelModal={cancelPurchaseSuccessModal}
        setCancelModal={setCancelPurchaseSuccessModal}
      />
    </ScrollView>
  );
};

export default PurchaseTabScreen;
