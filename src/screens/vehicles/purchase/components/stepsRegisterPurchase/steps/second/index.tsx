import React, { useMemo, useState } from "react";
import { useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useRecoilValue } from "recoil";
import AuthStatus from "../../../../../../../atoms/auth";
import Loading from "../../../../../../../components/loading";
import NextBackButtons from "../../../../../../../components/nextBackButtons";
import StepsTitle from "../../../../../../../components/stepsTitle";
import { consultClients } from "../../../../../../../config/general";
import styles from "../../../../../../../navigation/bottomNavigation/styles";
import { StepsRegisterAvaliationProps } from "../../../../../registerAvaliation/steps";
import Input from "../../../../../../../components/input";
import InputLayout from "../../../../../../../components/inputLayout";
import { memo } from "react";

const SecondStepRegisterPurchase: React.FC<StepsRegisterAvaliationProps> = (
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
  const { tokenApi } = useRecoilValue(AuthStatus);
  const [loading, setLoading] = useState(false);
  const [clients, setClients] = useState([]);
  const [filteredClients, setFilteredClients] = useState("");
  const autoCompleteFilter = clients.filter((item: any) => {
    const wordInSensitive = item?.toUpperCase() + item?.slice(1).toLowerCase();
    return wordInSensitive.includes(filteredClients);
  });

  const nextStep = () => {
    if (!values.comprador) {
      handleSubmit();
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const getAllClientsOfCompany = async () => {
    setLoading(true);
    const result = await consultClients(tokenApi, "1");
    if (result) {
      const mappedClients = result?.Cliente.map((item) => item?.Cliente);
      const filterClients = mappedClients.filter((item) => item !== "");
      setClients(filterClients);
      setLoading(false);
    }
  };

  const getClientID = async ({ setFieldValue }: any, nameClient: string) => {
    setLoading(true);
    const result = await consultClients(tokenApi, "1");
    const findClient = result?.Cliente.filter(
      (item) => item?.Cliente === nameClient
    );
    if (result && findClient.length > 0) {
      setFieldValue("comprador", findClient[0]?.idCliente);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllClientsOfCompany();
  }, []);

  return (
    <View>
      <View style={{ marginTop: 30, marginBottom: 30 }}>
        <StepsTitle title="Informações da empresa" />
      </View>
      {loading && (
        <View style={styles.loadingContainer}>
          <Loading isLoading size={50} style={{ height: 50 }} />
          <Text style={styles.textLoading}>
            Estamos carregando todos os clientes da empresa... Pode demorar um
            pouco.
          </Text>
        </View>
      )}
      {!loading && (
        <>
          <InputLayout title={"Comprador"} required>
            <Input
              value={filteredClients}
              errorMessage={errors.comprador}
              touched={touched.comprador}
              errors={errors.comprador}
              placeholder="Nome do comprador"
              onChangeText={(text) => {
                setFilteredClients(text);
              }}
            />
          </InputLayout>

          <ScrollView
            showsVerticalScrollIndicator={false}
            style={[!!filteredClients && { maxHeight: 200 }]}
          >
            {!!filteredClients &&
              autoCompleteFilter.map((item: any, index: number) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    setFilteredClients(item);
                    getClientID({ setFieldValue }, item);
                  }}
                  style={[
                    styles.autocompleteStyle,
                    index === autoCompleteFilter.length - 1 &&
                      styles.borderBottomAutocomplete,
                  ]}
                >
                  {item !== filteredClients && (
                    <Text style={{ textAlign: "center" }}>{item}</Text>
                  )}
                </TouchableOpacity>
              ))}
            {!filteredClients && (
              <Text
                style={{
                  textAlign: "center",
                  fontFamily: "Poppins",
                  marginTop: 12,
                }}
              >
                Após digitar o nome aguarde a busca.
              </Text>
            )}
          </ScrollView>

          <View style={{ marginTop: 25 }} />
          <NextBackButtons
            firstButtonLabel="Próximo"
            secondButtonLabel="Cancelar"
            firstButtonOnPress={nextStep}
            secondButtonOnPress={cancelRegister}
          />
        </>
      )}
    </View>
  );
};

export default memo(SecondStepRegisterPurchase);
