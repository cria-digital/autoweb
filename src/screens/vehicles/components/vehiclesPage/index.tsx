import React, { useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { memo } from "react";
import { View, StyleSheet } from "react-native";
import { Provider } from "react-native-paper";
import { useRecoilValue } from "recoil";
import AuthStatus from "../../../../atoms/auth";
import AlertModal from "../../../../components/alertModal";
import DoubleButtonsComponent from "../../../../components/doubleButtons";
import FilterButton from "../../../../components/filterButton";
import InputComponent from "../../../../components/input";
import ModalApprovedOrReproved from "../../../../components/modalApproveOrReprove";
import RadioPagination from "../../../../components/radioPagination";
import SimpleModal from "../../../../components/simpleModal";
import {
  approveAvaliation,
  consultAvaliations,
  deleteAvaliation,
} from "../../../../config/avaliacao";
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
  const { tokenApi } = useRecoilValue(AuthStatus);
  const { assessmentStatus, setAssessmentStatus, navigate } = props;
  const [cardOptionsVisible, setCardOptionsVisible] = useState(false);
  const [generateReportModal, setGenerateReportModal] = useState(false);
  const [deleteAvaliationModal, setDeleteAvaliationModal] = useState(false);
  const [approvalModal, setApprovalModal] = useState(false);
  const [approvalSuccessModal, setApprovalSuccessModal] = useState(false);
  const [avaliationDeletedSuccess, setAvaliationDeletedSuccess] =
    useState(false);
  const [approvalOrReprovalModal, setApprovalOrReprovalModal] = useState(false);

  const [approvedModal, setApprovedModal] = useState(false);
  const [reprovedModal, setReprovedModal] = useState(false);

  const [avaliationSuccess, setAvaliationSuccess] = useState(false);
  const [motiveSended, setMotiveSended] = useState(false);

  const [cardId, setCardId] = useState<string>("");

  const LabelsOptionsName = () => {
    if (assessmentStatus === "Waiting")
      return ["Visualizar", "Editar", "Aprovar/Reprovar", "Excluir"];
    else return ["Visualizar", "Editar", "Aprovar", "Excluir"];
  };

  const [avaliationsData, setAvaliationsData] = useState([]);

  const getAvaliations = async () => {
    setAvaliationsData([]);
    if (tokenApi) {
      const result = await consultAvaliations(tokenApi);
      if (result) setAvaliationsData(result?.Avaliacoes);
    }
  };

  useEffect(() => {
    getAvaliations();
  }, [tokenApi]);

  const deleteAvaliationByID = async (id: string) => {
    if (tokenApi) {
      await deleteAvaliation(id, tokenApi).then(async () => {
        setDeleteAvaliationModal(false);
        setAvaliationDeletedSuccess(true);
        await getAvaliations();
      });
    }
  };

  const handleApproveAvaliation = async () => {
    if (tokenApi) {
      await approveAvaliation(cardId, tokenApi).then(async () => {
        setApprovalOrReprovalModal(false);
        setApprovedModal(true);
        await getAvaliations();
      });
    }
  };

  const switchOptionsMenu = (item: any) => {
    switch (item) {
      case "Visualizar":
        navigate("ViewAvaliation", {
          id: cardId,
        });
        break;
      case "Editar":
        navigate("RegisterAvaliation", {
          isEditing: true,
          id: cardId,
        });
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
    <View style={{ height: "100%" }}>
      <Provider>
        <View style={{ height: "auto" }}>
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
        </View>

        <View style={{ height: "auto" }}>
          <WaitingAndApproveds
            data={avaliationsData}
            assessmentStatus={assessmentStatus}
            setCardOptionsVisible={setCardOptionsVisible}
            setCardId={setCardId}
          />
        </View>

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
          approvalSuccessModal={approvalSuccessModal}
          setApprovalSuccessModal={setApprovalSuccessModal}
          setAvaliationDeletedSuccess={setAvaliationDeletedSuccess}
          avaliationDeletedSuccess={avaliationDeletedSuccess}
          deleteAvaliation={deleteAvaliationByID}
          cardID={cardId}
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
          firstButtonPress={handleApproveAvaliation}
          secondButtonPress={() => {
            setApprovalOrReprovalModal(false);
            setReprovedModal(true);
          }}
        />

        <ModalApprovedOrReproved
          isChecked
          visible={approvedModal}
          animationType="fade"
          onPressFirstButton={() => {
            setApprovedModal(false);
            setAvaliationSuccess(true);
          }}
          onPressSecondButton={() => {
            setApprovedModal(false);
            navigate("Vehicles");
          }}
        />

        <ModalApprovedOrReproved
          visible={reprovedModal}
          animationType="fade"
          onPressFirstButton={() => {
            setReprovedModal(false);
            setMotiveSended(true);
          }}
          onPressSecondButton={() => {
            setReprovedModal(false);
            navigate("Vehicles");
          }}
        />

        <SimpleModal
          visible={avaliationSuccess}
          animationType="fade"
          onPress={() => {
            setAvaliationSuccess(false);
            navigate("RegisterPurchase");
          }}
          title="Avaliação realizada!"
        />

        <SimpleModal
          visible={motiveSended}
          animationType="fade"
          onPress={() => {
            setMotiveSended(false);
            navigate("Vehicles");
          }}
          title="Motivo enviado."
        />
      </Provider>
    </View>
  );
};

const styles = StyleSheet.create({
  inputView: {
    marginTop: 24,
    marginBottom: 16,
  },
  radioButtons: {
    marginTop: 14,
    marginBottom: 14,
  },
  awaitingApprovalList: {
    marginHorizontal: -18,
    borderTopWidth: 1,
    borderTopColor: "rgba(0, 0, 0, 0.04)",
  },
});

export default memo(VehiclesPage);
