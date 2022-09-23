import React from "react";
import { View, Text } from "react-native";
import { StepsRegisterAvaliationProps } from "..";
import NextBackButtons from "../../../../../../../components/nextBackButtons";
import RadioOptions from "../../../../../../../components/radioOptions";
import StepsTitle from "../../../../../../../components/stepsTitle";
import IntermediarioPessoaFisica from "../../../intermediario/fisico";
import IntermediarioPessoaJuridica from "../../../intermediario/juridico";

const ThirdStepRegisterPurchase: React.FC<StepsRegisterAvaliationProps> = (
  props
) => {
  const {
    currentStep,
    setCurrentStep,
    values,
    touched,
    errors,
    setFieldValue,
    handleSubmit,
    cancelRegister,
  } = props;
  const [proprietario, setProprietario] = React.useState("Pessoa física");
  const nextStep = () => {
    if (!values.clienteFornecedorIntermediario) {
      handleSubmit();
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <View>
      <View style={{ marginTop: 30, marginBottom: 30 }}>
        <StepsTitle title="Informações da empresa" />
      </View>

      <Text style={{ fontFamily: "RalewaySemiBold", fontSize: 12 }}>
        Proprietário
      </Text>

      <RadioOptions
        style={{ marginTop: -15 }}
        firstOption="Pessoa física"
        secondOption="Pessoa jurídica"
        actualOption={proprietario}
        onPressFirstOption={() => setProprietario("Pessoa física")}
        onPressSecondOption={() => setProprietario("Pessoa jurídica")}
      />

      {proprietario === "Pessoa física" && (
        <IntermediarioPessoaFisica
          errors={errors}
          touched={touched}
          values={values}
          setFieldValue={setFieldValue}
          handleSubmit={handleSubmit}
        />
      )}
      {proprietario === "Pessoa jurídica" && (
        <IntermediarioPessoaJuridica
          errors={errors}
          touched={touched}
          values={values}
          setFieldValue={setFieldValue}
          handleSubmit={handleSubmit}
        />
      )}

      <View style={{ marginTop: 25 }} />
      <NextBackButtons
        firstButtonLabel="Próximo"
        secondButtonLabel="Cancelar"
        firstButtonOnPress={nextStep}
        secondButtonOnPress={cancelRegister}
      />
    </View>
  );
};

export default ThirdStepRegisterPurchase;
