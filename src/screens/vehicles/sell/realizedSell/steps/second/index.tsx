import React from "react";
import styles from "./styles";
import { View, Text } from "react-native";
import ChipOverlay from "../../../../../../components/chipOverlay";
import NextBackButtons from "../../../../../../components/nextBackButtons";
import RenderVehicleDates from "../../../../purchase/viewPurchases/renderVehicleDates";
import StepsTitle from "../../../../../../components/stepsTitle";
import LineOne from "../../../../../../components/lineOne";
import RenderOwnerIntermediateDates from "../../../../purchase/viewPurchases/renderOwnerIntermediateDates";
import RenderProposalDates from "./renderProposalDates";
import RenderPaymentFormatDate from "./renderPaymentFormat";

interface RealizedSellProps {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  cancelRegister: () => void;
  setRealizeSell: (value: boolean) => void;
}

const SecondStepRealizedSell: React.FC<RealizedSellProps> = (props) => {
  const { currentStep, setCurrentStep, cancelRegister, setRealizeSell } = props;
  const [vehicleDatesVisible, setVehicleDatesVisible] = React.useState(false);
  const [clientDatesVisible, setClientDatesVisible] = React.useState(false);
  const [proposalDatesVisible, setProposalDatesVisible] = React.useState(false);
  const [paymentFormatVisible, setPaymentFormatVisible] = React.useState(false);

  return (
    <View>
      <View style={{ marginTop: 30, marginBottom: 30 }}>
        <StepsTitle title="Detalhes de venda" />
      </View>

      <Text
        style={{
          fontFamily: "Raleway",
          fontSize: 12,
          color: "#000000",
        }}
      >
        Verifique todos os dados e confirme a venda
      </Text>
      <View style={{ marginTop: 16, marginBottom: 24 }}>
        <LineOne />
      </View>

      <ChipOverlay
        label="Avaliação"
        hasOpened={vehicleDatesVisible}
        setHasOpened={setVehicleDatesVisible}
      >
        <RenderVehicleDates />
      </ChipOverlay>

      <View style={{ marginTop: 24 }} />

      <ChipOverlay
        label="Dados do cliente"
        hasOpened={clientDatesVisible}
        setHasOpened={setClientDatesVisible}
      >
        <RenderOwnerIntermediateDates />
      </ChipOverlay>

      <View style={{ marginTop: 24 }} />

      <ChipOverlay
        label="Dados da proposta"
        hasOpened={proposalDatesVisible}
        setHasOpened={setProposalDatesVisible}
      >
        <RenderProposalDates />
      </ChipOverlay>

      <View style={{ marginTop: 24 }} />

      <ChipOverlay
        label="Forma de pagamento"
        hasOpened={paymentFormatVisible}
        setHasOpened={setPaymentFormatVisible}
      >
        <RenderPaymentFormatDate />
      </ChipOverlay>

      <View style={styles.nextBackButtons}>
        <NextBackButtons
          firstButtonLabel="Realizar venda"
          secondButtonLabel="Cancelar"
          firstButtonOnPress={() => setRealizeSell(true)}
          secondButtonOnPress={cancelRegister}
        />
      </View>
    </View>
  );
};

export default SecondStepRealizedSell;
