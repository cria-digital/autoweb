import React, { useState } from "react";
import { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Checkbox } from "react-native-paper";
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
import { StepsRegisterAvaliationProps } from "../../../../../registerAvaliation/steps";

interface Debits {
  type: string;
  value: string;
}
interface Payment {
  type: string;
  value: string;
  date: string;
}

const FourthStepRegisterPurchase: React.FC<StepsRegisterAvaliationProps> = (
  props
) => {
  const { currentStep, setCurrentStep, values, cancelRegister, setFieldValue } =
    props;
  const [notHaveDebit, setNotHaveDebit] = useState(false);
  const [tipoDebito, setTipoDebito] = useState("");
  const [valorDebito, setValorDebito] = useState("");

  const [tipoPagamento, setTipoPagamento] = useState("");
  const [valorPagamento, setValorPagamento] = useState("");
  const [dataPagamento, setDataPagamento] = useState("");

  const [debits, setDebits] = useState<Debits[]>([]);
  const [payments, setPayments] = useState<Payment[]>([]);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const generateDebits = () => {
    if (!valorDebito || !tipoDebito) {
      alert("Adicione ao menos um débito!");
      return;
    }
    setDebits((prev) => [...prev, { type: tipoDebito, value: valorDebito }]);
    setTipoDebito("");
    setValorDebito("");
  };

  const generatePayment = () => {
    if (!tipoPagamento || !valorPagamento || !dataPagamento) {
      alert("Preencha os dados completos!");
      return;
    }
    const date = new Date(dataPagamento);
    setPayments((prev) => [
      ...prev,
      {
        type: tipoPagamento,
        value: valorPagamento,
        date: date.toLocaleDateString("pt-Br"),
      },
    ]);
    setFieldValue("previsaoPagamento", payments[0]?.date);
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
      >{`Valor de compra R$ ${values.valor}`}</Button>

      <Text style={styles.title}>Débitos</Text>

      <View style={{ marginTop: 25 }} />
      <Dropdown
        content={["Multa", "IPVA", "Licenciamento", "Outros"]}
        title={"Tipo de débito"}
        onPressMenuItem={(item) => setTipoDebito(item)}
        value={tipoDebito}
        placeholder={"Selecione o tipo de débito"}
      />

      <InputLayout style={{ marginTop: 25 }} title="Valor Débito (R$)">
        <InputComponent
          placeholder="Digite o valor do débito"
          value={valorDebito}
          onChangeText={(text) => setValorDebito(text)}
        />
      </InputLayout>

      <CheckboxComponent
        hasChecked={notHaveDebit}
        setHasChecked={setNotHaveDebit}
        label={"Não possui nenhum débito"}
        style={{ marginTop: 0 }}
      />

      <ButtonComponent
        mode="outlined"
        label="Incluir débito"
        onPress={() => {
          if (notHaveDebit) {
            return;
          } else {
            generateDebits();
          }
        }}
        style={{ marginTop: 25, marginBottom: 25 }}
      />

      <View>
        <LineOne />
        <View style={styles.valuesContainer}>
          <Text style={styles.textValues}>Valor da compra:</Text>
          <Text>R$ {values.valor}</Text>
        </View>
        {debits?.map((debit) => (
          <View style={[styles.valuesContainer, { marginBottom: 16 }]}>
            <Text style={styles.textValues}>{debit?.type}:</Text>
            <Text>R$ {debit?.value}</Text>
          </View>
        ))}

        <LineOne />
        <View style={styles.valuesContainer}>
          <Text style={styles.textValues}>Total a ser pago</Text>
          <Text>
            R${" "}
            {/* {!!debits &&
              debits?.reduce(
                (previous, current, index, debits) =>
                  parseInt(previous?.value) + parseInt(current?.value)
              )} */}
          </Text>
        </View>
      </View>

      <Text style={[styles.title, { marginTop: 45 }]}>Pagamento</Text>

      <View style={{ marginTop: 25 }} />
      <Dropdown
        content={["Dinheiro", "Cartão de crédito", "Cartão de débito", "PIX"]}
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
        rightPlaceholder="10/10/2022"
        leftTitle="Valor (R$)"
        rightTitle="Data"
        leftValue={valorPagamento}
        rightValue={dataPagamento}
        onPressLeftMenuItem={(text) => setValorPagamento(text)}
        onPressRightMenuItem={(text) => setDataPagamento(text)}
      />

      <ButtonComponent
        mode="outlined"
        label="Incluir forma de pagamento"
        onPress={generatePayment}
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

      {payments?.map((debit) => (
        <>
          <LineOne />
          <View style={[styles.valuesContainer, { marginVertical: 16 }]}>
            <Text style={styles.textValues}>{debit?.type}:</Text>
            <Text>R$ {debit?.value}</Text>
          </View>
        </>
      ))}

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
