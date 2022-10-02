import React from "react";
import AlertModal from "../../../../components/alertModal";

interface AlertModalForVehiclePage {
  deleteAvaliationVisible: boolean;
  setDeleteAvaliationVisible: (visible: boolean) => void;
  approvalAvaliationVisible: boolean;
  setApprovalAvaliationVisible: (visible: boolean) => void;
  approvalSuccessModal: boolean;
  setApprovalSuccessModal: (visible: boolean) => void;
  avaliationDeletedSuccess: boolean;
  setAvaliationDeletedSuccess: (visible: boolean) => void;
  deleteAvaliation: (id: string) => Promise<void>;
  cardID: string;
}

const AlertModalsForVehiclePage: React.FC<AlertModalForVehiclePage> = (
  props
) => {
  const {
    deleteAvaliationVisible,
    setDeleteAvaliationVisible,
    approvalAvaliationVisible,
    setApprovalAvaliationVisible,
    approvalSuccessModal,
    setApprovalSuccessModal,
    avaliationDeletedSuccess,
    setAvaliationDeletedSuccess,
    deleteAvaliation,
    cardID,
  } = props;

  return (
    <>
      <AlertModal
        animationType="fade"
        visible={deleteAvaliationVisible}
        setVisible={setDeleteAvaliationVisible}
        firstButtonLabel="Sim, excluir avaliação"
        secondButtonLabel="Não, cancelar"
        beforeFirstStrongText="Deseja mesmo"
        firstStrongText="excluir"
        middleStrongText="a"
        secondStrongText="avaliação"
        afterSecondStrongText="desse veículo?"
        deleteMessage
        cancelOrClose={async () => deleteAvaliation(cardID)}
      />
      <AlertModal
        animationType="fade"
        visible={approvalAvaliationVisible}
        setVisible={setApprovalAvaliationVisible}
        firstButtonLabel="Sim, aprovar"
        secondButtonLabel="Não, voltar"
        beforeFirstStrongText="Deseja mesmo"
        firstStrongText="aprovar"
        middleStrongText="a"
        secondStrongText="avaliação"
        afterSecondStrongText="desse veículo?"
        warningMessage
        cancelOrClose={() => {
          setApprovalAvaliationVisible(false);
          setApprovalSuccessModal(true);
        }}
      />

      <AlertModal
        visible={approvalSuccessModal}
        animationType="fade"
        firstButtonLabel="Fechar"
        okMessage
        beforeFirstStrongText="A"
        firstStrongText="avaliação"
        middleStrongText="foi"
        secondStrongText="aprovada"
        afterSecondStrongText="com sucesso!"
        setVisible={setApprovalSuccessModal}
        cancelOrClose={() => setApprovalSuccessModal(false)}
      />

      <AlertModal
        visible={avaliationDeletedSuccess}
        animationType="fade"
        firstButtonLabel="Fechar"
        okMessage
        beforeFirstStrongText="A"
        firstStrongText="avaliação"
        middleStrongText="foi"
        secondStrongText="excluída"
        afterSecondStrongText="com sucesso!"
        setVisible={setAvaliationDeletedSuccess}
        cancelOrClose={() => setAvaliationDeletedSuccess(false)}
      />
    </>
  );
};

export default AlertModalsForVehiclePage;
