import React from "react";
import { View } from "react-native";
import DoubleDropdown from "../../../../../../components/doubleDropdown";
import InputComponent from "../../../../../../components/input";
import InputLayout from "../../../../../../components/inputLayout";
import NextBackButtons from "../../../../../../components/nextBackButtons";
import StepsTitle from "../../../../../../components/stepsTitle";
import { StepsRegisterAvaliationProps } from "../../../../registerAvaliation/steps";

const SecondStepAddProposal: React.FC<StepsRegisterAvaliationProps> = (
  props
) => {
  const {
    currentStep,
    setCurrentStep,
    cancelRegister,
    handleSubmit,
    setFieldValue,
    values,
  } = props;
  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };
  return (
    <View>
      <View style={{ marginTop: 30, marginBottom: 30 }}>
        <StepsTitle title="Localização" />
      </View>

      <InputLayout title="Endereço">
        <InputComponent
          mode="flat"
          placeholder="Digite o nome da rua/avenida"
          value={values.endereco}
          onChangeText={(text) => setFieldValue("cnpj", text)}
        />
      </InputLayout>

      <DoubleDropdown
        style={{ marginTop: 24 }}
        leftHasInput
        rightHasInput
        leftTitle="Número"
        rightTitle="Complemento"
        leftValue={values.numero}
        rightValue={values.complemento}
        leftPlaceholder="Digite o número"
        rightPlaceholder="Digite o complemento"
        onPressLeftMenuItem={(text) => setFieldValue("numero", text)}
        onPressRightMenuItem={(text) => setFieldValue("complemento", text)}
      />

      <InputLayout title="Bairro" style={{ marginTop: 25 }}>
        <InputComponent
          mode="flat"
          placeholder="Digite o bairro"
          value={values.bairro}
          onChangeText={(text) => setFieldValue("bairro", text)}
        />
      </InputLayout>

      <InputLayout title="Endereço" style={{ marginTop: 25 }}>
        <InputComponent
          mode="flat"
          placeholder="Digite o nome da cidade"
          value={values.cidade}
          onChangeText={(text) => setFieldValue("cidade", text)}
        />
      </InputLayout>

      <InputLayout title="Endereço" style={{ marginTop: 25 }}>
        <InputComponent
          mode="flat"
          placeholder="Digite o nome do estado"
          value={values.estado}
          onChangeText={(text) => setFieldValue("estado", text)}
        />
      </InputLayout>

      <InputLayout title="Endereço" style={{ marginTop: 25 }}>
        <InputComponent
          mode="flat"
          multiline
          numberOfLines={7}
          placeholder="Digite as observações"
          value={values.observacoes}
          onChangeText={(text) => setFieldValue("observacoes", text)}
        />
      </InputLayout>

      <View style={{ marginTop: 24 }} />
      <NextBackButtons
        firstButtonLabel="Próximo"
        secondButtonLabel="Cancelar"
        firstButtonOnPress={nextStep}
        secondButtonOnPress={cancelRegister}
      />
    </View>
  );
};

export default SecondStepAddProposal;
