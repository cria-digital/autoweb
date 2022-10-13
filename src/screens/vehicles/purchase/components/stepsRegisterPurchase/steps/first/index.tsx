import React, { useEffect, useState } from "react";
import { useCallback } from "react";
import { View } from "react-native";
import { useRecoilValue } from "recoil";
import AuthStatus from "../../../../../../../atoms/auth";
import ButtonComponent from "../../../../../../../components/button";
import DoubleDropdown from "../../../../../../../components/doubleDropdown";
import Dropdown from "../../../../../../../components/dropdown";
import DropdownMarca from "../../../../../../../components/dropdownMarca";
import DropdownModelo from "../../../../../../../components/dropdownModelo";
import DropdownVersao from "../../../../../../../components/dropdownVersao";
import InputComponent from "../../../../../../../components/input";
import InputLayout from "../../../../../../../components/inputLayout";
import Loading from "../../../../../../../components/loading";
import NextBackButtons from "../../../../../../../components/nextBackButtons";
import RadioOptions from "../../../../../../../components/radioOptions";
import StepsTitle from "../../../../../../../components/stepsTitle";
import {
  consultBrands,
  consultCambios,
  consultColors,
  consultDoors,
  consultFuel,
  consultModels,
  consultPatios,
  consultVersion,
} from "../../../../../../../config/general";
import { getImage } from "../../../../../../../utils/getImage";
import { StepsRegisterAvaliationProps } from "../../../../../registerAvaliation/steps";

const FirstStepRegisterPurchase: React.FC<StepsRegisterAvaliationProps> = (
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
  const nextStep = () => {
    if (
      !values.empresa ||
      !values.placa ||
      !values.modelo ||
      !values.ano ||
      !values.anoFabricacao ||
      !values.versao ||
      !values.renavam ||
      !values.patio
    ) {
      handleSubmit(values);
    } else {
      setCurrentStep(currentStep + 1);
    }
  };
  const { tokenApi } = useRecoilValue(AuthStatus);
  const [loading, setLoading] = useState(false);
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [versions, setVersions] = useState([]);
  const [doors, setDoors] = useState([]);
  const [cambios, setCambios] = useState([]);
  const [colors, setColors] = useState([]);
  const [fuel, setFuel] = useState([]);
  const [patios, setPatios] = useState([]);

  const [brandString, setBrandString] = useState("");
  const [modelString, setModelString] = useState("");
  const [versionString, setVersionString] = useState("");

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

  async function getGeneralValues(tokenAPI: string) {
    const cambios = await consultCambios(tokenAPI);
    const doors = await consultDoors(tokenAPI);
    const colors = await consultColors(tokenAPI);
    const fuels = await consultFuel(tokenAPI);

    const patios = await consultPatios(tokenAPI, "1");

    if (cambios && doors && colors && fuels) {
      setCambios(cambios.Cambios);
      setDoors(doors.Portas);
      setColors(colors.Cor);
      setFuel(fuels.Combustivel);
      setPatios(patios.Patio);
      setLoading(false);
    }
  }

  function getDropdownValue(
    idCompare: string,
    array: { id: string; result: string }[]
  ) {
    const filter = array?.filter((item) => item?.id === idCompare);
    return filter[0]?.result;
  }

  useEffect(() => {
    const checkIfIsEditing = async () => {
      if (isEditing) {
        setLoading(true);
        getAllBrands();
        getAllModels();
        getAllVersions();
        getGeneralValues(tokenApi);
      }
    };
    checkIfIsEditing();
  }, []);

  useEffect(() => {
    setLoading(true);
    getAllBrands();
    getGeneralValues(tokenApi);
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
            content={["1"]}
            onPressMenuItem={(value) => setFieldValue("empresa", value)}
          />

          <InputLayout required title="Placa" style={{ marginTop: 25 }}>
            <InputComponent
              mode="flat"
              value={values.placa}
              errors={errors.placa}
              touched={touched.placa}
              placeholder={"Digite a placa aqui"}
              errorMessage={"Placa é obrigatório"}
              onChangeText={(text: string) => setFieldValue("placa", text)}
            />
          </InputLayout>

          <InputLayout style={{ marginTop: 25 }}>
            <DropdownMarca
              title="Marca"
              required
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
              required
              content={models}
              value={modelString}
              errorMessage={errors.modelo}
              touched={touched.modelo}
              errors={errors.modelo}
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
              required
              content={versions}
              value={versionString}
              errorMessage={errors.versao}
              touched={touched.versao}
              errors={errors.versao}
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
            leftHasInput
            rightHasInput
            leftTitle={"Ano do modelo"}
            rightTitle={"Ano de fabricação"}
            style={{ marginTop: 25 }}
          />

          <DoubleDropdown
            onPressLeftMenuItem={(item) => {
              const result = cambios?.filter((door) => door?.Cambio === item);
              setFieldValue("cambio", result[0]?.idCambio);
            }}
            onPressRightMenuItem={(item) => {
              const result = doors?.filter((door) => door?.Portas === item);
              setFieldValue("numeroPortas", result[0]?.idPortas);
            }}
            leftContent={cambios?.map((item) => item?.Cambio)}
            rightContent={doors?.map((item) => item?.Portas)}
            leftPlaceholder={"Tipo de câmbio"}
            rightPlaceholder={"Nº de portas"}
            leftValue={getDropdownValue(
              values.cambio,
              cambios.map((item) => ({
                id: item?.idCambio,
                result: item?.Cambio,
              }))
            )}
            rightValue={getDropdownValue(
              values.numeroPortas,
              doors.map((item) => ({
                id: item?.idPortas,
                result: item?.Portas,
              }))
            )}
            leftTitle={"Câmbio"}
            rightTitle={"Número de portas"}
            style={{ marginTop: 25 }}
          />
          <DoubleDropdown
            onPressLeftMenuItem={(item) => {
              const result = colors?.filter((door) => door?.Cor === item);
              setFieldValue("cor", result[0]?.idCor);
            }}
            onPressRightMenuItem={(item) => {
              const result = fuel?.filter((fuel) => fuel?.Combustivel === item);
              setFieldValue("combustivel", result[0]?.idCombustivel);
            }}
            leftContent={colors?.map((item) => item?.Cor)}
            rightContent={fuel?.map((item) => item?.Combustivel)}
            leftPlaceholder={"Cor"}
            rightPlaceholder={"Combustível"}
            leftValue={getDropdownValue(
              values.cor,
              colors.map((item) => ({
                id: item?.idCor,
                result: item?.Cor,
              }))
            )}
            rightValue={getDropdownValue(
              values.combustivel,
              fuel.map((item) => ({
                id: item?.idCombustivel,
                result: item?.Combustivel,
              }))
            )}
            leftTitle={"Cor"}
            rightTitle={"Combustível"}
            style={{ marginTop: 25 }}
          />

          <InputLayout required title="Renavam" style={{ marginTop: 25 }}>
            <InputComponent
              mode="flat"
              value={values.renavam}
              errors={errors.renavam}
              touched={touched.renavam}
              placeholder={"Digite renavam aqui"}
              errorMessage={"Renavam é obrigatório"}
              onChangeText={(text: string) => setFieldValue("renavam", text)}
            />
          </InputLayout>

          <View style={{ marginTop: 25 }} />
          <Dropdown
            required
            title="Pátio"
            value={getDropdownValue(
              values.patio,
              patios?.map((item) => ({
                id: item?.idPatio,
                result: item?.Patio,
              }))
            )}
            errorMessage={errors.patio}
            touched={touched.patio}
            errors={errors.patio}
            placeholder="Selecione o pátio"
            content={patios?.map((item) => item?.Patio)}
            onPressMenuItem={(value) => {
              const result = patios?.filter((pat) => pat?.Patio === value);
              setFieldValue("patio", result[0]?.idPatio);
            }}
          />

          <View style={{ marginTop: 25 }}>
            <Dropdown
              required
              title="Tipo de recibo"
              styleMenu={{ left: -18 }}
              value={values.tipoRecibo}
              errorMessage={errors.tipoRecibo}
              touched={touched.tipoRecibo}
              errors={errors.tipoRecibo}
              placeholder="Tipo de recibo"
              content={["1", "2", "3", "4"]}
              onPressMenuItem={(value) => setFieldValue("tipoRecibo", value)}
            />
          </View>

          <DoubleDropdown
            onPressLeftMenuItem={(item) => setFieldValue("km", item)}
            onPressRightMenuItem={(item) => setFieldValue("chassi", item)}
            style={{ marginTop: 25 }}
            rightPlaceholder={"Chassi"}
            rightValue={values.chassi}
            leftPlaceholder={"km"}
            leftValue={values.km}
            rightTitle={"Chassi"}
            leftTitle={"KM"}
            rightHasInput
            leftHasInput
            leftRequired
            rightRequired
          />

          <RadioOptions
            actualOption={values.tipoVeiculo}
            firstOption="0"
            secondOption="1"
            label="Tipo de veículo"
            onPressFirstOption={(text) => setFieldValue("tipoVeiculo", "0")}
            onPressSecondOption={(text) => setFieldValue("tipoVeiculo", "1")}
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
      )}
    </View>
  );
};

export default FirstStepRegisterPurchase;
