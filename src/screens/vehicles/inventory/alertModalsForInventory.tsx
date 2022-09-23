import React from "react";
import AlertModal from "../../../components/alertModal";

interface AlertModalsForInventoryPage {
  releasePurchase: boolean;
  setReleasePurchase: (release: boolean) => void;
  cancelPurchase: boolean;
  setCancelPurchase: (cancel: boolean) => void;
  purchaseSuccessModal: boolean;
  setPurchaseSuccessModal: (purchase: boolean) => void;
  cancelModal: boolean;
  setCancelModal: (cancel: boolean) => void;
}

const AlertModalsForInventory: React.FC<AlertModalsForInventoryPage> = (
  props
) => {
  const {
    releasePurchase,
    setReleasePurchase,
    cancelPurchase,
    setCancelPurchase,
    purchaseSuccessModal,
    setPurchaseSuccessModal,
    cancelModal,
    setCancelModal,
  } = props;

  return (
    <>
      <AlertModal
        animationType="fade"
        visible={releasePurchase}
        setVisible={setReleasePurchase}
        firstButtonLabel="Sim, liberar venda"
        secondButtonLabel="Não, cancelar"
        beforeFirstStrongText="Deseja mesmo"
        firstStrongText="liberar"
        middleStrongText="a"
        secondStrongText="venda"
        afterSecondStrongText="desse veículo?"
        warningMessage
        cancelOrClose={() => {
          setReleasePurchase(false);
          setPurchaseSuccessModal(true);
        }}
      />
      <AlertModal
        animationType="fade"
        visible={cancelPurchase}
        setVisible={setCancelPurchase}
        firstButtonLabel="Sim, cancelar venda"
        secondButtonLabel="Não, voltar"
        beforeFirstStrongText="Deseja mesmo"
        firstStrongText="cancelar"
        middleStrongText="a"
        secondStrongText="venda"
        afterSecondStrongText="desse veículo?"
        warningMessage
        cancelOrClose={() => {
          setCancelPurchase(false);
          setPurchaseSuccessModal(false);
          setCancelModal(true);
        }}
      />
      <AlertModal
        animationType="fade"
        visible={purchaseSuccessModal}
        setVisible={setPurchaseSuccessModal}
        firstButtonLabel="Fechar"
        beforeFirstStrongText={"A"}
        firstStrongText={"venda"}
        middleStrongText="foi"
        secondStrongText="cancelada"
        afterSecondStrongText="com sucesso"
        okMessage
        cancelOrClose={() => setCancelModal(false)}
      />
      <AlertModal
        animationType="fade"
        visible={cancelModal}
        setVisible={setCancelModal}
        firstButtonLabel="Fechar"
        firstStrongText="A venda foi liberada com sucesso."
        afterSecondStrongText="O veículo agora encontra-se na seção estoque"
        okMessage
        cancelOrClose={() => setPurchaseSuccessModal(false)}
      />
    </>
  );
};

export default AlertModalsForInventory;
