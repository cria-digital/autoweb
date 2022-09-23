import React from "react";
import styles from "./styles";
import ChipOverlay from "../../../../components/chipOverlay";
import { View, ScrollView, Text } from "react-native";
import NextBackButtons from "../../../../components/nextBackButtons";
import RenderViewAvaliations from "./renderViewAvaliations";
import RenderVehicleDates from "./renderVehicleDates";
import RenderOwnerIntermediateDates from "./renderOwnerIntermediateDates";
import RenderViewPaymentFormat from "./renderViewPayment";
import RenderChecklistDocs from "./renderChecklistDocs";

const ViewPurchases = ({ navigation }: any) => {
  const { navigate } = navigation;
  const [openedAvaliation, setOpenedAvaliation] = React.useState(false);
  const [openedVehiclesDate, setOpenedVehiclesDate] = React.useState(false);
  const [openedOwnerDate, setOpenedOwnerDate] = React.useState(false);
  const [openedIntermediateDate, setOpenedIntermediateDate] =
    React.useState(false);
  const [openedPaymentFormat, setOpenedPaymentFormat] = React.useState(false);
  const [openedChecklistDocs, setOpenedChecklistDocs] = React.useState(false);

  return (
    <ScrollView style={styles.containerScroll}>
      <View style={styles.logo}>
        <Text style={styles.logoblue}>
          auto<Text style={styles.logored}>web</Text>
        </Text>
      </View>

      <Text style={styles.mainTitle}>VISUALIZAR CADASTRO</Text>

      <View style={styles.container}>
        <ChipOverlay
          label="Avaliação"
          hasOpened={openedAvaliation}
          setHasOpened={setOpenedAvaliation}
        >
          <RenderViewAvaliations />
        </ChipOverlay>

        <View style={{ marginTop: 24 }} />
        <ChipOverlay
          label="Dados do veículo"
          hasOpened={openedVehiclesDate}
          setHasOpened={setOpenedVehiclesDate}
        >
          <RenderVehicleDates />
        </ChipOverlay>

        <View style={{ marginTop: 24 }} />
        <ChipOverlay
          label="Dados do proprietário"
          hasOpened={openedOwnerDate}
          setHasOpened={setOpenedOwnerDate}
        >
          <RenderOwnerIntermediateDates />
        </ChipOverlay>

        <View style={{ marginTop: 24 }} />
        <ChipOverlay
          label="Dados do Intermediário"
          hasOpened={openedIntermediateDate}
          setHasOpened={setOpenedIntermediateDate}
        >
          <RenderOwnerIntermediateDates />
        </ChipOverlay>

        <View style={{ marginTop: 24 }} />
        <ChipOverlay
          label="Débitos e forma de pagamento"
          hasOpened={openedPaymentFormat}
          setHasOpened={setOpenedPaymentFormat}
        >
          <RenderViewPaymentFormat />
        </ChipOverlay>

        <View style={{ marginTop: 24 }} />
        <ChipOverlay
          label="Checklist de documentos"
          hasOpened={openedChecklistDocs}
          setHasOpened={setOpenedChecklistDocs}
        >
          <RenderChecklistDocs />
        </ChipOverlay>
      </View>

      <View style={styles.nextBackButtons}>
        <NextBackButtons
          firstButtonLabel="Imprimir"
          secondButtonLabel="Voltar para o Menu Principal"
          firstButtonOnPress={() => alert("Função imprimir não implementada")}
          secondButtonOnPress={() => navigate("Vehicles")}
        />
      </View>
    </ScrollView>
  );
};

export default ViewPurchases;
