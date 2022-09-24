import React from "react";
import { View, Text, FlatList } from "react-native";
import LineOne from "../../../../../../components/lineOne";
import NextBackButtons from "../../../../../../components/nextBackButtons";
import StepsTitle from "../../../../../../components/stepsTitle";
import RealizeSellComponent from "../../realizeSellComponent";

interface RealizedSellProps {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  cancelRegister: () => void;
}

const FirstStepRealizedSell: React.FC<RealizedSellProps> = (props) => {
  const { currentStep, setCurrentStep, cancelRegister } = props;
  const [proposalIndex, setProposalIndex] = React.useState(0);
  const renderProposals = ({ item, index }: any) => (
    <View>
      <RealizeSellComponent
        isSelected={proposalIndex === index}
        onPress={() => setProposalIndex(index)}
      />
      <View style={{ marginTop: 16, marginBottom: 24 }}>
        <LineOne />
      </View>
    </View>
  );
  return (
    <View>
      <View style={{ marginTop: 30, marginBottom: 30 }}>
        <StepsTitle title="Proposta" />
      </View>

      <Text
        style={{
          fontFamily: "Raleway",
          fontSize: 12,
          color: "#000000",
        }}
      >
        Selecione a proposta que você deseja realizar a venda
      </Text>

      <View style={{ marginTop: 16, marginBottom: 24 }}>
        <LineOne />
      </View>

      <FlatList
        data={["1", "2", "3"]}
        extraData={["1", "2", "3"]}
        keyExtractor={(item, index) => `${item}${index}`}
        renderItem={renderProposals}
      />

      <NextBackButtons
        firstButtonLabel="Próximo"
        secondButtonLabel="Cancelar"
        firstButtonOnPress={() => setCurrentStep(currentStep + 1)}
        secondButtonOnPress={cancelRegister}
      />
    </View>
  );
};

export default FirstStepRealizedSell;
