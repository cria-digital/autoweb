import React from "react";
import { View } from "react-native";
import InputComponent from "../../../../../components/input";
import InputLayout from "../../../../../components/inputLayout";
import RadioOptions from "../../../../../components/radioOptions";

interface ChecklistProps {
  labelRadioOption: string;
  actualOption: string;
  onPressFirstOption: (text: string) => void;
  onPressSecondOption: (text: string) => void;
  onPressThirdOption: (text: string) => void;
  inputCustoAproximado: string;
  inputCustoAproximadoError: any;
  inputCustoAproximadoTouched: any;
  inputCustoAproximadoOnChange: (text: string) => void;
  inputObservationValue: string;
  inputObservationPlaceholder: string;
  inputObservationOnChange: (text: string) => void;
}

const ChecklistContextAvaliation: React.FC<ChecklistProps> = (props) => {
  const {
    labelRadioOption,
    actualOption,
    onPressFirstOption,
    onPressSecondOption,
    onPressThirdOption,
    inputCustoAproximado,
    inputCustoAproximadoError,
    inputCustoAproximadoTouched,
    inputCustoAproximadoOnChange,
    inputObservationValue,
    inputObservationPlaceholder,
    inputObservationOnChange,
  } = props;
  return (
    <>
      <RadioOptions
        label="Mecânica"
        firstOption="Bom"
        secondOption="Regular"
        thirdOption="Ruim"
        actualOption={actualOption}
        onPressFirstOption={onPressFirstOption}
        onPressSecondOption={onPressSecondOption}
        onPressThirdOption={onPressThirdOption}
      />

      <InputLayout required title="Custo aproximado" style={{ marginTop: 25 }}>
        <InputComponent
          mode="flat"
          value={inputCustoAproximado}
          errors={inputCustoAproximadoError}
          touched={inputCustoAproximadoTouched}
          placeholder={"Digite o custo"}
          errorMessage={"Custo é obrigatório"}
          onChangeText={inputCustoAproximadoOnChange}
        />
      </InputLayout>

      <InputLayout title="Observação" style={{ marginTop: 25 }}>
        <InputComponent
          mode="flat"
          value={inputObservationValue}
          placeholder={inputObservationPlaceholder}
          onChangeText={inputObservationOnChange}
        />
      </InputLayout>
    </>
  );
};

export default ChecklistContextAvaliation;
