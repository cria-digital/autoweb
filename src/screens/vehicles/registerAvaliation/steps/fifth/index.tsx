import React from "react";
import { useEffect } from "react";
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
  const nextStep = () => handleSubmit(values);

  const handleLucroTotal = () => {
    const lucroTotal =
      parseFloat(values.valorAvaliacao) - parseFloat(values.valorSugeridoVenda);
    const fixedValue = lucroTotal.toFixed(2);
    return fixedValue.toString();
  };

  useEffect(() => {
    setFieldValue("lucroPrevisto", handleLucroTotal());
  }, [
    values.valorAvaliacao,
    values.valorSugeridoVenda,
    values.valorAvaliadoEmpresa,
  ]);

  return (
    <View>
      <View style={{ marginTop: 30 }}>
        <StepsTitle title="Resumo" allRequired />
      </View>

      <InputLayout
        required
        title="Avaliação da Empresa"
        style={{ marginTop: 25 }}
      >
        <InputComponent
          mode="flat"
          value={values.valorAvaliadoEmpresa}
          errors={errors.valorAvaliadoEmpresa}
          touched={touched.valorAvaliadoEmpresa}
          placeholder={"Avaliação da loja (R$)"}
          errorMessage={"Avaliação da loja é obrigatório"}
          onChangeText={(text: string) =>
            setFieldValue("valorAvaliadoEmpresa", text)
          }
        />
      </InputLayout>

      <InputLayout required title="Valor Avaliação" style={{ marginTop: 25 }}>
        <InputComponent
          mode="flat"
          value={values.valorAvaliacao}
          errors={errors.valorAvaliacao}
          touched={touched.valorAvaliacao}
          onChangeText={(text: string) => setFieldValue("valorAvaliacao", text)}
          placeholder={"Valor Avaliação (R$)"}
          errorMessage={"Valor Avaliação é obrigatório"}
        />
      </InputLayout>

      <InputLayout
        required
        title="Valor sugerido para venda"
        style={{ marginTop: 25 }}
      >
        <InputComponent
          mode="flat"
          value={values.valorSugeridoVenda}
          errors={errors.valorSugeridoVenda}
          touched={touched.valorSugeridoVenda}
          onChangeText={(text: string) =>
            setFieldValue("valorSugeridoVenda", text)
          }
          placeholder={"Valor sugerido para venda"}
          errorMessage={"Valor sugerido para venda"}
        />
      </InputLayout>

      <InputLayout required title="Lucro previsto" style={{ marginTop: 25 }}>
        <InputComponent
          mode="flat"
          disabled
          style={{ backgroundColor: "#C9D3E9" }}
          value={handleLucroTotal()}
          errors={errors.lucroPrevisto}
          touched={touched.lucroPrevisto}
          placeholder={"Lucro previsto"}
          errorMessage={"Lucro previsto obrigatório"}
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
