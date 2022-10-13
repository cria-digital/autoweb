import React from "react";
import { useEffect } from "react";
import { View } from "react-native";
import { StepsRegisterAvaliationProps } from "..";
import InputComponent from "../../../../../components/input";
import InputLayout from "../../../../../components/inputLayout";
import NextBackButtons from "../../../../../components/nextBackButtons";
import StepsTitle from "../../../../../components/stepsTitle";

const FourthStepRegisterAvaliation: React.FC<StepsRegisterAvaliationProps> = (
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
  const nextStep = () => {
    if (
      !values.valorFipe ||
      !values.valorWebMotors ||
      !values.valorAutoWeb ||
      !values.valorMedio
    ) {
      handleSubmit(values);
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const averageValues = () => {
    const average =
      parseInt(values.valorFipe) +
      parseInt(values.valorWebMotors) +
      parseInt(values.valorAutoWeb) / 3;
    const finalResult = average.toFixed(2);
    return finalResult.toString();
  };

  useEffect(() => {
    if (values.valorFipe && values.valorWebMotors && values.valorAutoWeb)
      setFieldValue("valorMedio", averageValues());
  }, []);

  return (
    <View>
      <View style={{ marginTop: 30 }}>
        <StepsTitle title="Média de valores" allRequired />
      </View>

      <InputLayout
        required
        title="Valor de venda FIPE"
        style={{ marginTop: 25 }}
      >
        <InputComponent
          mode="flat"
          value={values.valorFipe}
          errors={errors.valorFipe}
          touched={touched.valorFipe}
          placeholder={"Valor de venda FIPE (R$)"}
          errorMessage={"Valor de venda FIPE é obrigatório"}
          onChangeText={(text: string) => setFieldValue("valorFipe", text)}
        />
      </InputLayout>

      <InputLayout
        required
        title="Valor de venda Web Motors"
        style={{ marginTop: 25 }}
      >
        <InputComponent
          mode="flat"
          value={values.valorWebMotors}
          errors={errors.valorWebMotors}
          touched={touched.valorWebMotors}
          placeholder={"Digite Valor de venda Web Motors (R$)"}
          errorMessage={"Valor de venda Web Motors é obrigatório"}
          onChangeText={(text: string) => {
            setFieldValue("valorWebMotors", text);
            setFieldValue("valorMedio", text);
          }}
        />
      </InputLayout>

      <InputLayout
        required
        title="Valor de venda na AutoWeb"
        style={{ marginTop: 25 }}
      >
        <InputComponent
          mode="flat"
          value={values.valorAutoWeb}
          errors={errors.valorAutoWeb}
          touched={touched.valorAutoWeb}
          placeholder={"Valor de venda na AutoWeb (R$)"}
          errorMessage={"Valor de venda na AutoWeb é obrigatório"}
          onChangeText={(text: string) => setFieldValue("valorAutoWeb", text)}
        />
      </InputLayout>

      <InputLayout required title="Valor Médio" style={{ marginTop: 25 }}>
        <InputComponent
          mode="flat"
          disabled
          style={{ backgroundColor: "#C9D3E9" }}
          value={averageValues()}
          placeholder={"Valor Médio da avaliação (R$)"}
          errorMessage={"Valor Médio da avaliação é obrigatório"}
        />
      </InputLayout>

      <View style={{ marginTop: 90 }}>
        <NextBackButtons
          firstButtonLabel="Próximo"
          secondButtonLabel="Cancelar"
          firstButtonOnPress={nextStep}
          secondButtonOnPress={cancelRegister}
        />
      </View>
    </View>
  );
};

export default FourthStepRegisterAvaliation;
