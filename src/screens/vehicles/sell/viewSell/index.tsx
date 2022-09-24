import React from "react";
import styles from "./styles";
import { View, Text, ScrollView } from "react-native";
import StepsTitle from "../../../../components/stepsTitle";
import LineOne from "../../../../components/lineOne";
import ChipOverlay from "../../../../components/chipOverlay";
import RenderVehicleDates from "../../purchase/viewPurchases/renderVehicleDates";
import RenderOwnerIntermediateDates from "../../purchase/viewPurchases/renderOwnerIntermediateDates";
import RenderProposalDates from "../realizedSell/steps/second/renderProposalDates";
import RenderPaymentFormatDate from "../realizedSell/steps/second/renderPaymentFormat";
import NextBackButtons from "../../../../components/nextBackButtons";
import SimpleNav from "../../../../components/simpleNav";

const ViewSellScreen = ({ navigation }: any) => {
  const { goBack } = navigation;
  const [vehicleDatesVisible, setVehicleDatesVisible] = React.useState(false);
  const [clientDatesVisible, setClientDatesVisible] = React.useState(false);
  const [proposalDatesVisible, setProposalDatesVisible] = React.useState(false);
  const [paymentFormatVisible, setPaymentFormatVisible] = React.useState(false);

  return (
    <ScrollView style={styles.containerScroll}>
      <View style={styles.container}>
        <View style={{ marginTop: 32, marginBottom: 24 }}>
          <SimpleNav label="Visualizar venda" onPressBack={goBack} />
        </View>

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
            firstButtonOnPress={() => alert("função imprimir não implementada")}
            secondButtonOnPress={goBack}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default ViewSellScreen;
