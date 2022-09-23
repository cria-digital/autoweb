import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import { StepsRegisterAvaliationProps } from "..";
import ButtonComponent from "../../../../../../../components/button";
import DoubleDropdown from "../../../../../../../components/doubleDropdown";
import Dropdown from "../../../../../../../components/dropdown";
import InputComponent from "../../../../../../../components/input";
import InputLayout from "../../../../../../../components/inputLayout";
import NextBackButtons from "../../../../../../../components/nextBackButtons";
import RadioOptions from "../../../../../../../components/radioOptions";
import StepsTitle from "../../../../../../../components/stepsTitle";

const FirstStepRegisterPurchase: React.FC<StepsRegisterAvaliationProps> = (
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
      !values.empresa ||
      !values.filial ||
      !values.modelo ||
      !values.ano ||
      !values.anoFabricacao ||
      !values.versao ||
      !values.renavan ||
      !values.origem ||
      !values.avaliador ||
      !values.patio ||
      !values.tipoRecibo
    ) {
      handleSubmit(values);
    } else {
      setCurrentStep(currentStep + 1);
    }
  };
  return (
    <View>
      <View style={{ marginTop: 30, marginBottom: 30 }}>
        <StepsTitle title="Informações da empresa" />
      </View>

      <ButtonComponent
        mode="contained"
        icon={"image"}
        iconColor={"#fff"}
        label={"Adicionar fotos do veículo"}
        onPress={() => {}}
      />

      <View style={{ marginTop: 25 }} />
      <Dropdown
        required
        title="Empresa"
        value={values.empresa}
        inputStyle={{ backgroundColor: "#C9D3E9" }}
        disabled
        errorMessage={errors.empresa}
        touched={touched.empresa}
        errors={errors.empresa}
        placeholder="Car veículos"
        content={["empresa 1", "empresa 2", "empresa 3"]}
        onPressMenuItem={(value) => setFieldValue("empresa", value)}
      />

      <DoubleDropdown
        onPressLeftMenuItem={(item) => setFieldValue("filial", item)}
        onPressRightMenuItem={(item) => setFieldValue("placa", item)}
        leftContent={["Marca 1", "Marca 2", "Marca 3"]}
        leftPlaceholder={"Selecione a filial"}
        rightPlaceholder={"Digite a placa"}
        leftValue={values.filial}
        rightValue={values.placa}
        rightErrorMessage={errors.placa}
        rightTouched={touched.placa}
        rightErrors={errors.placa}
        leftErrors={errors.filial}
        leftTouched={touched.filial}
        leftErrorMessage={"Selecione a filial"}
        leftRequired={true}
        leftTitle={"Filial"}
        rightTitle={"Placa"}
        style={{ marginTop: 30 }}
        rightHasInput
      />

      <View style={{ marginTop: 25 }} />
      <Dropdown
        title="Marca"
        value={values.marca}
        placeholder="Selecione a marca"
        content={["marca 1", "marca 2", "marca 3"]}
        onPressMenuItem={(value) => setFieldValue("marca", value)}
      />

      <View style={{ marginTop: 25 }} />
      <Dropdown
        title="Modelo"
        required
        value={values.modelo}
        errorMessage={errors.modelo}
        touched={touched.modelo}
        errors={errors.modelo}
        placeholder="Selecione o modelo"
        content={["modelo 1", "modelo 2", "modelo 3"]}
        onPressMenuItem={(value) => setFieldValue("modelo", value)}
      />

      <DoubleDropdown
        onPressLeftMenuItem={(item) => setFieldValue("ano", item)}
        onPressRightMenuItem={(item) => setFieldValue("anoFabricacao", item)}
        leftContent={["anoModelo 1", "anoModelo 2", "anoModelo 3"]}
        rightContent={["AnoFabricacao 1", "AnoFabricacao 2", "AnoFabricacao 3"]}
        leftPlaceholder={"Digite o ano do veículo"}
        rightPlaceholder={"Digite o ano de fabricação"}
        leftValue={values.ano}
        rightValue={values.anoFabricacao}
        leftErrors={errors.ano}
        leftTouched={touched.ano}
        rightErrorMessage={"Digite o ano de fabricação"}
        rightErrors={errors.anoFabricacao}
        rightTouched={touched.anoFabricacao}
        leftErrorMessage={"Digite o ano do veículo"}
        rightRequired
        leftRequired
        leftTitle={"Ano do modelo"}
        rightTitle={"Ano de fabricação"}
        style={{ marginTop: 25 }}
      />

      <View style={{ marginTop: 25 }} />
      <Dropdown
        required
        title="Versao"
        value={values.versao}
        errorMessage={errors.versao}
        touched={touched.versao}
        errors={errors.versao}
        placeholder="Selecione a versão"
        content={["versao 1", "versao 2", "versao 3"]}
        onPressMenuItem={(value) => setFieldValue("versao", value)}
      />

      <DoubleDropdown
        onPressLeftMenuItem={(item) => setFieldValue("cambio", item)}
        onPressRightMenuItem={(item) => setFieldValue("numeroPortas", item)}
        leftContent={["cambio 1", "cambio 2", "cambio 3"]}
        rightContent={["numeroPortas 1", "numeroPortas 2", "numeroPortas 3"]}
        leftPlaceholder={"Tipo de"}
        rightPlaceholder={"Nº de portas"}
        leftValue={values.cambio}
        rightValue={values.numeroPortas}
        leftTitle={"Câmbio"}
        rightTitle={"Número de portas"}
        style={{ marginTop: 25 }}
      />
      <DoubleDropdown
        onPressLeftMenuItem={(item) => setFieldValue("cor", item)}
        onPressRightMenuItem={(item) => setFieldValue("combustivel", item)}
        leftContent={["cor 1", "cor 2", "cor 3"]}
        rightContent={["combustivel 1", "combustivel 2", "combustivel 3"]}
        leftPlaceholder={"Tipo de"}
        rightPlaceholder={"Nº de portas"}
        leftValue={values.cor}
        rightValue={values.combustivel}
        leftTitle={"Cor"}
        rightTitle={"Combustível"}
        style={{ marginTop: 25 }}
      />

      <InputLayout required title="Renavan" style={{ marginTop: 25 }}>
        <InputComponent
          mode="flat"
          value={values.renavan}
          errors={errors.renavan}
          touched={touched.renavan}
          placeholder={"Digite Renavan aqui"}
          errorMessage={"Renavan é obrigatório"}
          onChangeText={(text: string) => setFieldValue("renavan", text)}
        />
      </InputLayout>

      <View style={{ marginTop: 25 }} />
      <Dropdown
        required
        title="Origem"
        value={values.origem}
        errorMessage={errors.origem}
        touched={touched.origem}
        errors={errors.origem}
        placeholder="Selecione a origem da compra"
        content={["origem 1", "origem 2", "origem 3"]}
        onPressMenuItem={(value) => setFieldValue("origem", value)}
      />

      <View style={{ marginTop: 25 }} />
      <Dropdown
        required
        title="Avaliador"
        value={values.avaliador}
        errorMessage={errors.avaliador}
        touched={touched.avaliador}
        errors={errors.avaliador}
        placeholder="Selecione o avaliador"
        content={["avaliador 1", "avaliador 2", "avaliador 3"]}
        onPressMenuItem={(value) => setFieldValue("avaliador", value)}
      />

      <View style={{ marginTop: 25 }} />
      <Dropdown
        required
        title="Pátio"
        value={values.patio}
        errorMessage={errors.patio}
        touched={touched.patio}
        errors={errors.patio}
        placeholder="Selecione o pátio"
        content={["patio 1", "patio 2", "patio 3"]}
        onPressMenuItem={(value) => setFieldValue("patio", value)}
      />

      <View style={{ marginTop: 25, width: "48%" }}>
        <Dropdown
          required
          title="Tipo de recibo"
          styleMenu={{ left: -18 }}
          value={values.tipoRecibo}
          errorMessage={errors.tipoRecibo}
          touched={touched.tipoRecibo}
          errors={errors.tipoRecibo}
          placeholder="Tipo de recibo"
          content={["tipoRecibo 1", "tipoRecibo 2", "tipoRecibo 3"]}
          onPressMenuItem={(value) => setFieldValue("tipoRecibo", value)}
        />
      </View>

      <RadioOptions
        actualOption={values.tipoVeiculo}
        firstOption="Novo"
        secondOption="Usado"
        label="Tipo de veículo"
        onPressFirstOption={(text) => setFieldValue("tipoVeiculo", text)}
        onPressSecondOption={(text) => setFieldValue("tipoVeiculo", text)}
      />

      <RadioOptions
        actualOption={values.blindado}
        firstOption="Sim"
        secondOption="Não"
        label="Blindado"
        onPressFirstOption={(text) => setFieldValue("blindado", text)}
        onPressSecondOption={(text) => setFieldValue("blindado", text)}
      />

      <RadioOptions
        actualOption={values.sucata}
        firstOption="Sim"
        secondOption="Não"
        label="Sucata"
        onPressFirstOption={(text) => setFieldValue("sucata", text)}
        onPressSecondOption={(text) => setFieldValue("sucata", text)}
      />

      <RadioOptions
        actualOption={values.leilao}
        firstOption="Sim"
        secondOption="Não"
        label="Leilão"
        onPressFirstOption={(text) => setFieldValue("leilao", text)}
        onPressSecondOption={(text) => setFieldValue("leilao", text)}
      />

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

export default FirstStepRegisterPurchase;
