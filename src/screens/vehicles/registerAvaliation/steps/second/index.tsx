import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StepsRegisterAvaliationProps } from "..";
import ButtonComponent from "../../../../../components/button";
import DoubleDropdown from "../../../../../components/doubleDropdown";
import Dropdown from "../../../../../components/dropdown";
import InputComponent from "../../../../../components/input";
import InputLayout from "../../../../../components/inputLayout";
import NextBackButtons from "../../../../../components/nextBackButtons";
import StepsTitle from "../../../../../components/stepsTitle";
import { cancelRegister } from "../../../../../utils/cancelRegister";

const SecondStepRegisterAvaliation: React.FC<StepsRegisterAvaliationProps> = (
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
    if (!values.ano || !values.anoFabricacao) {
      handleSubmit();
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <View>
      <View style={{ marginTop: 30 }}>
        <StepsTitle title="Informações da empresa" />
      </View>

      <ButtonComponent
        mode="contained"
        icon={"image"}
        iconColor={"#fff"}
        iconSize={20}
        label={"Adicionar fotos do veículo"}
        style={{ marginTop: 30 }}
        onPress={() => {}}
      />

      <InputLayout style={{ marginTop: 30 }}>
        <Dropdown
          title="Marca"
          content={["Marca 1", "Marca 2", "Marca 3"]}
          value={values.marca}
          placeholder={"Selecione a marca"}
          onPressMenuItem={(item) => setFieldValue("marca", item)}
        />
      </InputLayout>

      <InputLayout style={{ marginTop: 30 }}>
        <Dropdown
          title="Modelo"
          content={["Marca 1", "Marca 2", "Marca 3"]}
          value={values.modelo}
          placeholder={"Selecione o modelo"}
          onPressMenuItem={(item) => setFieldValue("modelo", item)}
        />
      </InputLayout>

      <InputLayout style={{ marginTop: 30 }}>
        <Dropdown
          title="Versão"
          content={["Marca 1", "Marca 2", "Marca 3"]}
          value={values.versao}
          placeholder={"Selecione a versão"}
          onPressMenuItem={(item) => setFieldValue("versao", item)}
        />
      </InputLayout>

      <DoubleDropdown
        onPressLeftMenuItem={(item) => setFieldValue("ano", item)}
        onPressRightMenuItem={(item) => setFieldValue("anoFabricacao", item)}
        leftContent={["Marca 1", "Marca 2", "Marca 3"]}
        rightContent={["Marca 1", "Marca 2", "Marca 3"]}
        leftPlaceholder={"Selecione o ano do veículo"}
        rightPlaceholder={"Digite o ano de fabricação"}
        leftValue={values.ano}
        rightValue={values.anoFabricacao}
        leftErrors={errors.ano}
        rightErrors={errors.anoFabricacao}
        leftTouched={touched.ano}
        rightTouched={touched.anoFabricacao}
        leftErrorMessage={"Selecione o ano do veículo"}
        rightErrorMessage={"Digite o ano de fabricação"}
        rightRequired={true}
        leftRequired={true}
        leftTitle={"Ano"}
        rightTitle={"Ano de fabricação"}
        style={{ marginTop: 30 }}
        leftHasInput
        rightHasInput
      />

      <DoubleDropdown
        onPressLeftMenuItem={(item) => setFieldValue("cambio", item)}
        onPressRightMenuItem={(item) => setFieldValue("numeroPartidas", item)}
        leftContent={["Marca 1", "Marca 2", "Marca 3"]}
        rightContent={["Marca 1", "Marca 2", "Marca 3"]}
        leftPlaceholder={"Tipo de câmbio"}
        rightPlaceholder={"Nº de partidas"}
        leftValue={values.numeroPartidas}
        rightValue={values.cambio}
        leftTitle={"Câmbio"}
        rightTitle={"Número de partidas"}
        style={{ marginTop: 30 }}
      />

      <DoubleDropdown
        onPressLeftMenuItem={(item) => setFieldValue("numeroPortas", item)}
        onPressRightMenuItem={(item) => setFieldValue("cor", item)}
        leftContent={["Marca 1", "Marca 2", "Marca 3"]}
        rightContent={["Marca 1", "Marca 2", "Marca 3"]}
        leftPlaceholder={"Nº de portas"}
        rightPlaceholder={"Selecione a cor"}
        leftValue={values.numeroPortas}
        rightValue={values.cor}
        leftTitle={"Número de portas"}
        rightTitle={"Cor"}
        style={{ marginTop: 30 }}
      />

      <InputLayout title="Renavan" style={{ marginTop: 25 }}>
        <InputComponent
          mode="flat"
          value={values.renavan}
          placeholder={"Digite renavan aqui"}
          onChangeText={(text: string) => setFieldValue("renavan", text)}
        />
      </InputLayout>

      <InputLayout title="Chassi" style={{ marginTop: 25 }}>
        <InputComponent
          mode="flat"
          value={values.chassi}
          placeholder={"Digite o número do chassi aqui"}
          onChangeText={(text: string) => setFieldValue("chassi", text)}
        />
      </InputLayout>

      <DoubleDropdown
        onPressLeftMenuItem={(item) => setFieldValue("placa", item)}
        onPressRightMenuItem={(text: string) =>
          setFieldValue("combustivel", text)
        }
        leftContent={["Marca 1", "Marca 2", "Marca 3"]}
        rightContent={["Marca 1", "Marca 2", "Marca 3"]}
        leftPlaceholder={"Digite a placa aqui"}
        rightPlaceholder={"Tipo de combustível"}
        leftValue={values.placa}
        rightValue={values.combustivel}
        leftTitle={"Placa"}
        rightTitle={"Combustível"}
        style={{ marginTop: 30 }}
        leftHasInput
      />

      <DoubleDropdown
        onPressLeftMenuItem={(item) => setFieldValue("tipoVeiculo", item)}
        onPressRightMenuItem={(item) => setFieldValue("blindado", item)}
        leftContent={["Marca 1", "Marca 2", "Marca 3"]}
        rightContent={["Marca 1", "Marca 2", "Marca 3"]}
        leftPlaceholder={"Selecione o tipo"}
        rightPlaceholder={"Tipo de blindagem"}
        leftValue={values.tipoVeiculo}
        rightValue={values.blindado}
        leftTitle={"Tipo de veículo"}
        rightTitle={"Blindado"}
        style={{ marginTop: 30 }}
      />

      <View style={{ marginTop: 24 }}>
        <NextBackButtons
          firstButtonLabel="Próximo"
          secondButtonLabel="Cancelar"
          firstButtonOnPress={nextStep}
          secondButtonOnPress={() => cancelRegister(goBack)}
        />
      </View>
    </View>
  );
};

export default SecondStepRegisterAvaliation;
