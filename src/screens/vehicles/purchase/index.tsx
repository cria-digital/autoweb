import { useIsFocused } from "@react-navigation/native";
import React, { useState } from "react";
import { useEffect } from "react";
import { View } from "react-native";
import { useRecoilValue } from "recoil";
import AuthStatus from "../../../atoms/auth";
import DoubleButtonsComponent from "../../../components/doubleButtons";
import FilterButton from "../../../components/filterButton";
import InputComponent from "../../../components/input";
import RadioPagination from "../../../components/radioPagination";
import {
  cancelPurchaseVehicle,
  consultPurchases,
} from "../../../config/compra";
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
  const { tokenApi } = useRecoilValue(AuthStatus);
  const [cardID, setCardID] = useState<string>("");
  const [cardOptionsVisible, setCardOptionsVisible] = useState(false);
  const [registrationPage, setRegistrationPage] = useState("Finished");
  const [generateReportModal, setGenerateReportModal] = useState(false);
  const [releasePurchase, setReleasePurchase] = useState(false);
  const [purchaseSuccessModal, setCancelPurchaseSuccessModal] = useState(false);
  const [cancelPurchase, setCancelPurchase] = useState(false);
  const [cancelPurchaseSuccessModal, setPurchaseSuccessModal] = useState(false);
  const isFocused = useIsFocused();
  const [purchaseList, setPurchaseList] = useState([]);

  async function handleGetPurchasesByEnterprise() {
    if (tokenApi) {
      await consultPurchases(tokenApi).then((result) =>
        setPurchaseList(result?.Compras)
      );
    }
  }

  useEffect(() => {
    if (isFocused) handleGetPurchasesByEnterprise();
  }, []);

  const handleCancelPurchase = async () => {
    if (tokenApi) {
      await cancelPurchaseVehicle(cardID, tokenApi).then(async () => {
        setCancelPurchase(false);
        setPurchaseSuccessModal(false);
        setCancelPurchaseSuccessModal(true);

        await handleGetPurchasesByEnterprise();
      });
    }
  };

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

      <View style={{ height: "auto" }}>
        <FinishedAndAwaitingPurchaseTab
          data={purchaseList}
          assessmentStatus={registrationPage}
          setCardId={setCardID}
          setCardOptionsVisible={setCardOptionsVisible}
        />
      </View>

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
        handleCancelPurchase={async () => await handleCancelPurchase()}
      />
    </View>
  );
};

export default PurchaseTabScreen;
