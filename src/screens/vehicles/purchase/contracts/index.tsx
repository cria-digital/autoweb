import React from "react";
import styles from "./styles";
import ChipOverlay from "../../../../components/chipOverlay";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import RenderContract from "./renderContract";
import RenderTermsRespons from "./renderTermsRespons";
import NextBackButtons from "../../../../components/nextBackButtons";
import RenderProcuration from "./renderProcuration";
import RenderDetailsPurchase from "./renderDetailsPurchase";

const ContractsPurchase = ({ navigation }: any) => {
  const { navigate } = navigation;
  const [openedContract, setOpenedContract] = React.useState(false);
  const [openedTerms, setOpenedTerms] = React.useState(false);
  const [openedDetran, setOpenedDetran] = React.useState(false);
  const [openedDetails, setOpenedDetails] = React.useState(false);

  return (
    <ScrollView style={styles.containerScroll}>
      <View style={styles.logo}>
        <Text style={styles.logoblue}>
          auto<Text style={styles.logored}>web</Text>
        </Text>
      </View>

      <View style={styles.container}>
        <ChipOverlay
          label="Contrato de compra"
          hasOpened={openedContract}
          setHasOpened={setOpenedContract}
        >
          <RenderContract />
        </ChipOverlay>

        <View style={{ marginVertical: 24 }}>
          <ChipOverlay
            label="Termo de responsabilidade"
            hasOpened={openedTerms}
            setHasOpened={setOpenedTerms}
          >
            <RenderTermsRespons />
          </ChipOverlay>
        </View>

        <View style={{ marginBottom: 24 }}>
          <ChipOverlay
            label="Procuração Detran"
            hasOpened={openedDetran}
            setHasOpened={setOpenedDetran}
          >
            <RenderProcuration />
          </ChipOverlay>
        </View>

        <ChipOverlay
          label="Detalhes da compra"
          hasOpened={openedDetails}
          setHasOpened={setOpenedDetails}
        >
          <RenderDetailsPurchase />
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

export default ContractsPurchase;
