import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Provider } from "react-native-paper";
import AlertModal from "../../../../components/alertModal";
import DoubleButtonsComponent from "../../../../components/doubleButtons";
import FilterButton from "../../../../components/filterButton";
import InputComponent from "../../../../components/input";
import LoadMore from "../../../../components/loadMore";
import RadioPagination from "../../../../components/radioPagination";
import COLORS from "../../../../constants/colors";
import MagnifyIcon from "../../../../icons/magnify";
import RightInputIcon from "../../../../icons/rightInputIcon";
import AlertModalsForVehiclePage from "../alertModals";
import CardModal from "../cardModal";
import GenerateReport from "../generateReport";
import WaitingAndApproveds from "../waitingAndReproveds";

interface VehiclesPageProps {
  assessmentStatus: string;
  setAssessmentStatus: (status: string) => void;
  navigate: any;
}

const VehiclesPage: React.FC<VehiclesPageProps> = (props) => {
  const { assessmentStatus, setAssessmentStatus, navigate } = props;
  const [cardOptionsVisible, setCardOptionsVisible] = useState(false);
  const [generateReportModal, setGenerateReportModal] = useState(false);
  const [deleteAvaliationModal, setDeleteAvaliationModal] = useState(false);
  const [approvalModal, setApprovalModal] = useState(false);
  const [approvalOrReprovalModal, setApprovalOrReprovalModal] = useState(false);
  const [cardId, setCardId] = useState<number | null>(null);

  const LabelsOptionsName = () => {
    if (assessmentStatus === "Waiting")
      return ["Visualizar", "Editar", "Aprovar/Reprovar", "Excluir"];
    else return ["Visualizar", "Editar", "Aprovar", "Excluir"];
  };

  const switchOptionsMenu = (item: any) => {
    switch (item) {
      case "Visualizar":
        navigate("ViewAvaliation", {
          id: cardId,
        });
        break;
      case "Editar":
        alert("Trabalhando na edição");
        break;
      case "Aprovar":
        setCardOptionsVisible(false);
        setApprovalModal(true);
        break;
      case "Aprovar/Reprovar":
        setCardOptionsVisible(false);
        setApprovalOrReprovalModal(true);
        break;
      case "Excluir":
        setCardOptionsVisible(false);
        setDeleteAvaliationModal(true);
        break;
    }
  };
  return (
    <Provider>
      <DoubleButtonsComponent
        labelLeft="Gerar relatório"
        labelRight="Cadastrar avaliação"
        onPressLeft={() => setGenerateReportModal(true)}
        onPressRight={() => navigate("RegisterAvaliation")}
      />

      <View style={styles.inputView}>
        <InputComponent
          mode="flat"
          right={RightInputIcon(
            () => (
              <MagnifyIcon color={"#000000"} />
            ),
            () =>
              navigate("FilterVehicles", {
                routeName: "Vehicles",
              })
          )}
        />
      </View>

      <FilterButton label="Filtrar" />

      <View style={styles.radioButtons}>
        <RadioPagination
          assessmentStatus={assessmentStatus}
          setAssessmentStatus={setAssessmentStatus}
          firstStatus="Waiting"
          secondStatus="Approved"
          firstLabel="Aguardando aprovação"
          secondLabel="Reprovado"
        />
      </View>

      <WaitingAndApproveds
        assessmentStatus={assessmentStatus}
        setCardOptionsVisible={setCardOptionsVisible}
        setCardId={setCardId}
      />

      <LoadMore />
      <CardModal
        labels={LabelsOptionsName()}
        animationType="fade"
        visible={cardOptionsVisible}
        setVisible={setCardOptionsVisible}
        onPressMenuItems={(item: string) => switchOptionsMenu(item)}
      />
      <GenerateReport
        animationType="fade"
        visible={generateReportModal}
        setVisible={setGenerateReportModal}
      />
      <AlertModalsForVehiclePage
        approvalAvaliationVisible={approvalModal}
        setApprovalAvaliationVisible={setApprovalModal}
        deleteAvaliationVisible={deleteAvaliationModal}
        setDeleteAvaliationVisible={setDeleteAvaliationModal}
      />
      <AlertModal
        animationType="fade"
        visible={approvalOrReprovalModal}
        setVisible={setApprovalOrReprovalModal}
        warningMessage
        approvalButton
        firstButtonLabel="Aprovar avaliação"
        secondButtonLabel="Reprovar avaliação"
        beforeFirstStrongText="Você deseja"
        firstStrongText="aprovar"
        middleStrongText="ou"
        secondStrongText="reprovar"
        afterSecondStrongText="a avaliação?"
        closeIcon
        firstButtonPress={() => {
          setApprovalOrReprovalModal(false);
          alert("Aprovar");
        }}
        secondButtonPress={() => {
          setApprovalOrReprovalModal(false);
          alert("Reprovar");
        }}
      />
    </Provider>
  );
};

const styles = StyleSheet.create({
  inputView: {
    marginTop: 24,
    marginBottom: 16,
  },
  radioButtons: {
    marginVertical: 28,
  },
  awaitingApprovalList: {
    marginHorizontal: -18,
    borderTopWidth: 1,
    borderTopColor: "rgba(0, 0, 0, 0.04)",
  },
});

export default VehiclesPage;
