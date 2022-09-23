import React from "react";
import { View } from "react-native";
import { StepsRegisterAvaliationProps } from "..";
import InputComponent from "../../../../../components/input";
import InputLayout from "../../../../../components/inputLayout";
import NextBackButtons from "../../../../../components/nextBackButtons";
import StepsTitle from "../../../../../components/stepsTitle";

const FifthStepRegisterAvaliation: React.FC<StepsRegisterAvaliationProps> = (
  props
) => {
  const {
    values,
    touched,
    errors,
    setFieldValue,
    handleSubmit,
    cancelRegister,
  } = props;
  const nextStep = () => {
    handleSubmit(values);
  };
  return (
    <View>
      <View style={{ marginTop: 30 }}>
        <StepsTitle title="Resumo" allRequired />
      </View>

      <InputLayout required title="Avaliação da loja" style={{ marginTop: 25 }}>
        <InputComponent
          mode="flat"
          value={values.avaliacaoLoja}
          errors={errors.avaliacaoLoja}
          touched={touched.avaliacaoLoja}
          placeholder={"Avaliação da loja (R$)"}
          errorMessage={"Avaliação da loja é obrigatório"}
          onChangeText={(text: string) => {
            setFieldValue("avaliacaoLoja", text);
            setFieldValue("avaliacaoEletronica", text);
            setFieldValue("valorSugeridoVenda", text);
            setFieldValue("lucroPrevisto", text);
          }}
        />
      </InputLayout>

      <InputLayout
        required
        title="Avaliação eletrônica"
        style={{ marginTop: 25 }}
      >
        <InputComponent
          mode="flat"
          disabled
          style={{ backgroundColor: "#C9D3E9" }}
          value={values.avaliacaoEletronica}
          errors={errors.avaliacaoEletronica}
          touched={touched.avaliacaoEletronica}
          placeholder={"Avaliação eletrônica (R$)"}
          errorMessage={"Avaliação eletrônica é obrigatório"}
        />
      </InputLayout>

      <InputLayout
        required
        title="Valor sugerido para venda"
        style={{ marginTop: 25 }}
      >
        <InputComponent
          mode="flat"
          disabled
          style={{ backgroundColor: "#C9D3E9" }}
          value={values.valorSugeridoVenda}
          errors={errors.valorSugeridoVenda}
          touched={touched.valorSugeridoVenda}
          placeholder={"Valor sugerido para venda"}
          errorMessage={"Valor sugerido para venda"}
        />
      </InputLayout>

      <InputLayout required title="Lucro previsto" style={{ marginTop: 25 }}>
        <InputComponent
          mode="flat"
          disabled
          style={{ backgroundColor: "#C9D3E9" }}
          value={values.lucroPrevisto}
          errors={errors.lucroPrevisto}
          touched={touched.lucroPrevisto}
          placeholder={"Lucro previsto"}
          errorMessage={"Lucro previsto"}
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

export default FifthStepRegisterAvaliation;
