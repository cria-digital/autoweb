import React, { useState } from "react";
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
import {
  consultBrands,
  consultModels,
  consultVersion,
} from "../../../../../config/general";
import { useRecoilValue } from "recoil";
import AuthStatus from "../../../../../atoms/auth";
import { useEffect } from "react";
import DropdownMarca from "../../../../../components/dropdownMarca";
import DropdownModelo from "../../../../../components/dropdownModelo";
import DropdownVersao from "../../../../../components/dropdownVersao";
import Loading from "../../../../../components/loading";

const SecondStepRegisterAvaliation: React.FC<StepsRegisterAvaliationProps> = (
  props
) => {
  const {
    currentStep,
    setCurrentStep,
    values,
    touched,
    errors,
    isEditing,
    setFieldValue,
    handleSubmit,
    cancelRegister,
  } = props;
  const { tokenApi } = useRecoilValue(AuthStatus);
  const [loading, setLoading] = useState(false);
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [versions, setVersions] = useState([]);

  const [brandString, setBrandString] = useState("");
  const [modelString, setModelString] = useState("");
  const [versionString, setVersionString] = useState("");

  const nextStep = () => {
    if (!values.ano || !values.anoFabricacao) {
      handleSubmit();
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  async function getAllBrands() {
    if (isEditing) {
      const result = await consultBrands(tokenApi);
      setBrands(result?.Marcas);
      setFieldValue(
        "marca",
        result?.Marcas.filter((item) => item.idMarca === values.marca)[0]
          .idMarca
      );
      setBrandString(
        result?.Marcas.filter((item) => item.idMarca === values.marca)[0].Marca
      );
    } else {
      const result = await consultBrands(tokenApi);
      setBrands(result?.Marcas);
    }
  }
  async function getAllModels() {
    if (isEditing) {
      const result = await consultModels(values.marca, tokenApi);
      setModels(result?.Modelos);
      setFieldValue(
        "modelo",
        result?.Modelos.filter((item) => item.idModelo === values.modelo)[0]
          .idModelo
      );
      setModelString(
        result?.Modelos.filter((item) => item.idModelo === values.modelo)[0]
          .Modelo
      );
    } else {
      if (!values.marca) return alert("Selecione uma marca");
      const result = await consultModels(values.marca, tokenApi);
      setModels(result?.Modelos);
    }
  }
  async function getAllVersions() {
    if (isEditing) {
      const result = await consultVersion(values.modelo, tokenApi);
      setVersions(result?.Versoes);
      setLoading(false);
      setFieldValue(
        "versao",
        result?.Versoes.filter((item) => item.idVersao === values.versao)[0]
          .idVersao
      );
      setVersionString(
        result?.Versoes.filter((item) => item.idVersao === values.versao)[0]
          .Versao
      );
    } else {
      if (!values.modelo) return alert("Selecione um modelo");
      const result = await consultVersion(values.modelo, tokenApi);
      setVersions(result?.Versoes);
    }
  }

  useEffect(() => {
    const checkIfIsEditing = async () => {
      if (isEditing) {
        setLoading(true);
        getAllBrands();
        getAllModels();
        getAllVersions();
      }
    };
    checkIfIsEditing();
  }, []);

  useEffect(() => {
    getAllBrands();
  }, []);

  useEffect(() => {
    if (values.marca) getAllModels();
  }, [values.marca]);

  useEffect(() => {
    if (values.modelo) getAllVersions();
  }, [values.modelo]);

  return (
    <View>
      {loading && <Loading isLoading style={{ marginTop: 200, height: 50 }} />}
      {!loading && (
        <>
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
            <DropdownMarca
              title="Marca"
              content={brands}
              value={brandString}
              placeholder={"Selecione a marca"}
              onPressMenuItem={(item) => {
                setBrandString(item?.Marca);
                setFieldValue("marca", item?.idMarca);
              }}
            />
          </InputLayout>

          <InputLayout style={{ marginTop: 25 }}>
            <DropdownModelo
              title="Modelo"
              content={models}
              value={modelString}
              placeholder={"Selecione o modelo"}
              onPressMenuItem={(item) => {
                setModelString(item?.Modelo);
                setFieldValue("modelo", item?.idModelo);
              }}
            />
          </InputLayout>

          <InputLayout style={{ marginTop: 25 }}>
            <DropdownVersao
              title="Versão"
              content={versions}
              value={versionString}
              placeholder={"Selecione a versão"}
              onPressMenuItem={(item) => {
                setVersionString(item?.Versao);
                setFieldValue("versao", item?.idVersao);
              }}
            />
          </InputLayout>

          <DoubleDropdown
            onPressLeftMenuItem={(item) => setFieldValue("ano", item)}
            onPressRightMenuItem={(item) =>
              setFieldValue("anoFabricacao", item)
            }
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
            style={{ marginTop: 25 }}
            leftHasInput
            rightHasInput
          />

          <DoubleDropdown
            onPressLeftMenuItem={(item) => setFieldValue("cambio", item)}
            onPressRightMenuItem={(item) =>
              setFieldValue("numeroPartidas", item)
            }
            leftContent={["Marca 1", "Marca 2", "Marca 3"]}
            rightContent={["Marca 1", "Marca 2", "Marca 3"]}
            leftPlaceholder={"Tipo de câmbio"}
            rightPlaceholder={"Nº de partidas"}
            leftValue={values.cambio}
            rightValue={values.numeroPartidas}
            leftTitle={"Câmbio"}
            rightTitle={"Número de partidas"}
            style={{ marginTop: 25 }}
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
            style={{ marginTop: 25 }}
          />

          <InputLayout title="Renavam" style={{ marginTop: 25 }}>
            <InputComponent
              mode="flat"
              value={values.renavam}
              placeholder={"Digite renavam aqui"}
              onChangeText={(text: string) => setFieldValue("renavam", text)}
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
            style={{ marginTop: 25 }}
            leftHasInput
          />

          <DoubleDropdown
            onPressLeftMenuItem={(item) => setFieldValue("tipoVeiculo", item)}
            onPressRightMenuItem={(item) => setFieldValue("blindado", item)}
            leftContent={["Marca 1", "Marca 2", "Marca 3"]}
            rightContent={["Sim", "Não"]}
            leftPlaceholder={"Selecione o tipo"}
            rightPlaceholder={"Tipo de blindagem"}
            leftValue={values.tipoVeiculo}
            rightValue={values.blindado}
            leftTitle={"Tipo de veículo"}
            rightTitle={"Blindado"}
            style={{ marginTop: 25 }}
          />

          <View style={{ marginTop: 25 }}>
            <NextBackButtons
              firstButtonLabel="Próximo"
              secondButtonLabel="Cancelar"
              firstButtonOnPress={nextStep}
              secondButtonOnPress={cancelRegister}
            />
          </View>
        </>
      )}
    </View>
  );
};

export default SecondStepRegisterAvaliation;
