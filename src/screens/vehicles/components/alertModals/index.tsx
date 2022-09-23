import React from "react";
import AlertModal from "../../../../components/alertModal";

interface AlertModalForVehiclePage {
  deleteAvaliationVisible: boolean;
  setDeleteAvaliationVisible: (visible: boolean) => void;
  approvalAvaliationVisible: boolean;
  setApprovalAvaliationVisible: (visible: boolean) => void;
}

const AlertModalsForVehiclePage: React.FC<AlertModalForVehiclePage> = (
  props
) => {
  const {
    deleteAvaliationVisible,
    setDeleteAvaliationVisible,
    approvalAvaliationVisible,
    setApprovalAvaliationVisible,
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
        cancelOrClose={() => alert("exclusão não implementada")}
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
        cancelOrClose={() => alert("aprovação não implementada")}
      />
    </>
  );
};

export default AlertModalsForVehiclePage;
