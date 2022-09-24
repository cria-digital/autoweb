import React from "react";
import { View } from "react-native";
import LineOne from "../../../../../../components/lineOne";
import NextBackButtons from "../../../../../../components/nextBackButtons";
import StepsTitle from "../../../../../../components/stepsTitle";
import { StepsRegisterAvaliationProps } from "../../../../registerAvaliation/steps";
import ProposalsComponent from "../../proposals";

const FourthStepsAddProposal: React.FC<StepsRegisterAvaliationProps> = (
  props
) => {
  const { currentStep, setCurrentStep, cancelRegister, handleSubmit, values } =
    props;

  const addOtherProposal = () => {
    setCurrentStep(0);
  };
  return (
    <View>
      <View style={{ marginTop: 30, marginBottom: 30 }}>
        <StepsTitle title="Propostas adicionadas" />
      </View>

      <ProposalsComponent />
      <View style={{ marginVertical: 24 }}>
        <LineOne />
      </View>

      <ProposalsComponent />
      <View style={{ marginVertical: 24 }}>
        <LineOne />
      </View>

      <ProposalsComponent />
      <View style={{ marginVertical: 24 }}>
        <LineOne />
      </View>

      <NextBackButtons
        firstButtonLabel="Adicionar outra proposta"
        secondButtonLabel="Finalizar proposta"
        firstButtonOnPress={addOtherProposal}
        secondButtonOnPress={handleSubmit}
      />
    </View>
  );
};

export default FourthStepsAddProposal;
