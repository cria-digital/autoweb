import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Checkbox } from "react-native-paper";
import { StepsRegisterAvaliationProps } from "..";
import ButtonComponent from "../../../../../../../components/button";
import CheckboxComponent from "../../../../../../../components/checkbox";
import DoubleDropdown from "../../../../../../../components/doubleDropdown";
import Dropdown from "../../../../../../../components/dropdown";
import InputComponent from "../../../../../../../components/input";
import InputLayout from "../../../../../../../components/inputLayout";
import LineOne from "../../../../../../../components/lineOne";
import NextBackButtons from "../../../../../../../components/nextBackButtons";
import StepsTitle from "../../../../../../../components/stepsTitle";
import COLORS from "../../../../../../../constants/colors";

const FourthStepRegisterPurchase: React.FC<StepsRegisterAvaliationProps> = (
  props
) => {
  const { currentStep, setCurrentStep, values, handleSubmit, cancelRegister } =
    props;
  const [notHaveDebit, setNotHaveDebit] = React.useState(false);
  const [tipoDebito, setTipoDebito] = React.useState("");
  const [valorDebito, setValorDebito] = React.useState("");
  const [dataPrazo, setDataPrazo] = React.useState("");
  const [observacoesDebito, setObservacoesDebito] = React.useState("");

  const [tipoPagamento, setTipoPagamento] = React.useState("");
  const [valorPagamento, setValorPagamento] = React.useState("");
  const [dataPagamento, setDataPagamento] = React.useState("");
  const [observacoesPagamento, setObservacoesPagamento] = React.useState("");

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };
  return (
    <View>
      <View style={{ marginTop: 30, marginBottom: 30 }}>
        <StepsTitle title="Informações da empresa" allRequired />
      </View>

      <Button
        mode="contained"
        style={{
          backgroundColor: "#319ECD",
          marginBottom: 30,
          borderRadius: 12,
        }}
        uppercase={false}
        labelStyle={{
          color: "white",
          fontFamily: "Raleway",
          fontSize: 16,
          padding: 6,
        }}
      >{`Valor de compra R$ ${18000}`}</Button>

      <Text style={styles.title}>Débitos</Text>

      <View style={{ marginTop: 25 }} />
      <Dropdown
        content={["Multa", "IPVA", "Licenciamento", "Outros"]}
        title={"Tipo de débito"}
        onPressMenuItem={(item) => setTipoDebito(item)}
        value={tipoDebito}
        placeholder={"Selecione o tipo de débito"}
      />

      <DoubleDropdown
        leftHasInput
        rightHasInput
        style={{ marginTop: 25 }}
        leftPlaceholder="Valor do débito"
        rightPlaceholder="Data/Prazo"
        leftTitle="Valor do débito (R$)"
        rightTitle="Data/Prazo"
        leftValue={valorDebito}
        rightValue={dataPrazo}
        onPressLeftMenuItem={(text) => setValorDebito(text)}
        onPressRightMenuItem={(text) => setDataPrazo(text)}
      />

      <InputLayout style={{ marginTop: 25 }} title="Observações">
        <InputComponent
          value={observacoesDebito}
          onChangeText={(text) => setObservacoesDebito(text)}
          placeholder="Observações"
          multiline
          numberOfLines={7}
        />
      </InputLayout>

      <CheckboxComponent
        hasChecked={notHaveDebit}
        setHasChecked={setNotHaveDebit}
        label={"Não possui nenhum débito"}
      />

      <ButtonComponent
        mode="outlined"
        label="Incluir débito"
        onPress={() => {}}
        style={{ marginTop: 25, marginBottom: 25 }}
      />

      {/* map de debitos */}

      <View>
        <LineOne />
        <View style={styles.valuesContainer}>
          <Text style={styles.textValues}>Valor da compra:</Text>
          <Text>R$ {19000}</Text>
        </View>
        <View style={[styles.valuesContainer, { marginBottom: 16 }]}>
          <Text style={styles.textValues}>Débitos:</Text>
          <Text>R$ {4000}</Text>
        </View>

        <LineOne />
        <View style={styles.valuesContainer}>
          <Text style={styles.textValues}>Total a ser pago</Text>
          <Text>R$ {15000}</Text>
        </View>
      </View>

      <Text style={[styles.title, { marginTop: 45 }]}>Pagamento</Text>

      <View style={{ marginTop: 25 }} />
      <Dropdown
        content={["Dinheiro", "Cartão de crédito", "Cartão de débito"]}
        title={"Forma pagamento"}
        onPressMenuItem={(item) => setTipoPagamento(item)}
        value={tipoPagamento}
        placeholder={"Selecione o tipo de pagamento"}
      />

      <DoubleDropdown
        leftHasInput
        rightHasInput
        style={{ marginTop: 25 }}
        leftPlaceholder="Digite o valor"
        rightPlaceholder="Digite a data"
        leftTitle="Valor (R$)"
        rightTitle="Data"
        leftValue={valorPagamento}
        rightValue={dataPagamento}
        onPressLeftMenuItem={(text) => setValorPagamento(text)}
        onPressRightMenuItem={(text) => setDataPagamento(text)}
      />

      <InputLayout
        style={{ marginTop: 25 }}
        title="Informações referentes ao pagamento"
      >
        <InputComponent
          value={observacoesPagamento}
          onChangeText={(text) => setObservacoesPagamento(text)}
          placeholder="Digite as informações referentes ao pagamento"
          multiline
          numberOfLines={7}
        />
      </InputLayout>

      <ButtonComponent
        mode="outlined"
        label="Incluir forma de pagamento"
        onPress={() => {}}
        style={{ marginTop: 25, marginBottom: 25 }}
      />

      <Button
        mode="contained"
        style={{
          backgroundColor: COLORS.green,
          marginBottom: 30,
          borderRadius: 12,
        }}
        uppercase={false}
        labelStyle={{
          color: "white",
          fontFamily: "Raleway",
          fontSize: 16,
          padding: 6,
        }}
      >{`Valor a ser pago R$ ${15000}`}</Button>

      {/* map de pagamentos */}

      <NextBackButtons
        firstButtonLabel="Próximo"
        secondButtonLabel="Cancelar"
        firstButtonOnPress={nextStep}
        secondButtonOnPress={cancelRegister}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textValues: {
    width: "50%",
    textAlign: "right",
  },
  valuesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  title: {
    color: COLORS.primary,
    fontFamily: "RalewaySemiBold",
    fontSize: 16,
  },
});

export default FourthStepRegisterPurchase;
