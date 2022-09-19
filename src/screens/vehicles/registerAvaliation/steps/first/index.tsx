import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import { StepsRegisterAvaliationProps } from "..";
import Dropdown from "../../../../../components/dropdown";
import InputComponent from "../../../../../components/input";
import InputLayout from "../../../../../components/inputLayout";
import NextBackButtons from "../../../../../components/nextBackButtons";
import StepsTitle from "../../../../../components/stepsTitle";

const FirstStepRegisterAvaliation: React.FC<StepsRegisterAvaliationProps> = (
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
  } = props;
  const { goBack } = useNavigation();
  const nextStep = () => {
    if (!values.nomeEmpresa || !values.filial) {
      handleSubmit(values);
    } else {
      setCurrentStep(currentStep + 1);
    }
  };
  return (
    <View>
      <View style={{ marginTop: 30 }}>
        <StepsTitle title="Informações da empresa" allRequired />
      </View>

      <InputLayout required title="Nome da empresa" style={{ marginTop: 30 }}>
        <Dropdown
          content={["Empresa 1", "Empresa 2"]}
          value={values.nomeEmpresa}
          errors={errors.nomeEmpresa}
          touched={touched.nomeEmpresa}
          placeholder={"Selecione o nome da empresa"}
          errorMessage={"Nome da empresa é obrigatório"}
          onPressMenuItem={(item) => setFieldValue("nomeEmpresa", item)}
        />
      </InputLayout>

      <InputLayout required title="Filial" style={{ marginTop: 25 }}>
        <InputComponent
          mode="flat"
          value={values.filial}
          errors={errors.filial}
          touched={touched.filial}
          placeholder={"Digite a filial"}
          errorMessage={"Filial é obrigatório"}
          onChangeText={(text: string) => setFieldValue("filial", text)}
        />
      </InputLayout>

      <View style={{ marginTop: "80%" }}>
        <NextBackButtons
          firstButtonLabel="Próximo"
          secondButtonLabel="Voltar"
          firstButtonOnPress={nextStep}
          secondButtonOnPress={goBack}
        />
      </View>
    </View>
  );
};

export default FirstStepRegisterAvaliation;
