import React from "react";
import { View } from "react-native";
import DoubleDropdown from "../../../../../../components/doubleDropdown";
import Dropdown from "../../../../../../components/dropdown";
import InputComponent from "../../../../../../components/input";
import InputLayout from "../../../../../../components/inputLayout";
import NextBackButtons from "../../../../../../components/nextBackButtons";
import StepsTitle from "../../../../../../components/stepsTitle";
import { StepsRegisterAvaliationProps } from "../../../../registerAvaliation/steps";

const ThirdStepAddProposal: React.FC<StepsRegisterAvaliationProps> = (
  props
) => {
  const {
    currentStep,
    setCurrentStep,
    cancelRegister,
    handleSubmit,
    setFieldValue,
    values,
    errors,
    touched,
  } = props;
  const nextStep = () => {
    if (!values.vendedor || !values.midia) {
      scrollTo({ top: 0, behavior: "smooth" });
      handleSubmit();
    } else {
      setCurrentStep(currentStep + 1);
    }
  };
  return (
    <View>
      <View style={{ marginTop: 30, marginBottom: 30 }}>
        <StepsTitle title="Informações da proposta" />
      </View>

      <Dropdown
        required
        title="Vendedor"
        content={["fulano1", "fulano2", "fulano3"]}
        placeholder="Selecione o vendedor"
        value={values.vendedor}
        errorMessage="Campo obrigatório"
        errors={errors.vendedor}
        touched={touched.vendedor}
        onPressMenuItem={(text) => setFieldValue("vendedor", text)}
      />
      <View style={{ marginTop: 24 }} />
      <Dropdown
        required
        title="Mídia"
        content={["midia 1", "midia 2", "midia 3"]}
        placeholder="Selecione a mídia"
        value={values.midia}
        errorMessage="Campo obrigatório"
        errors={errors.midia}
        touched={touched.midia}
        onPressMenuItem={(text) => setFieldValue("midia", text)}
      />
      <DoubleDropdown
        style={{ marginTop: 24 }}
        leftHasInput
        rightHasInput
        leftTitle="Data da venda"
        rightTitle="Proposta"
        leftValue={values.dataVenda}
        rightValue={values.proposta}
        leftPlaceholder="--/--/----"
        rightPlaceholder="R$ 0,00"
        onPressLeftMenuItem={(text) => setFieldValue("dataVenda", text)}
        onPressRightMenuItem={(text) => setFieldValue("proposta", text)}
      />
      <DoubleDropdown
        style={{ marginTop: 24 }}
        leftHasInput
        rightHasInput
        leftTitle="Desconto"
        rightTitle="Total"
        leftValue={values.desconto}
        rightValue={values.total}
        leftPlaceholder="0,00"
        rightPlaceholder="0,00"
        onPressLeftMenuItem={(text) => setFieldValue("desconto", text)}
        onPressRightMenuItem={(text) => setFieldValue("total", text)}
      />

      <InputLayout title="Observações" style={{ marginVertical: 25 }}>
        <InputComponent
          mode="flat"
          multiline
          numberOfLines={7}
          placeholder="Digite as observações"
          value={values.observacoesProposta}
          onChangeText={(text) => setFieldValue("observacoesProposta", text)}
        />
      </InputLayout>
      <NextBackButtons
        firstButtonLabel="Próximo"
        secondButtonLabel="Cancelar"
        firstButtonOnPress={nextStep}
        secondButtonOnPress={cancelRegister}
      />
    </View>
  );
};

export default ThirdStepAddProposal;
