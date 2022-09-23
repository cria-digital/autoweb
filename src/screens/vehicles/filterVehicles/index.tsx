import React, { useState } from "react";
import { View, ScrollView, Text } from "react-native";
import { dropdownTemplates } from "../../../../data";
import ButtonComponent from "../../../components/button";
import DoubleDropdown from "../../../components/doubleDropdown";
import Dropdown from "../../../components/dropdown";
import SimpleNav from "../../../components/simpleNav";
import styles from "./styles";

const FilterVehiclesScreen = ({ navigation, route }: any) => {
  const { navigate, goBack } = navigation;
  const { params } = route;
  const [modelVehicles, setModelVehicles] = useState("");
  const [vehicleBrand, setVehicleBrand] = useState("");
  const [yearVehicle, setYearVehicle] = useState("");
  const [yearManufacture, setYearManufacture] = useState("");
  const [numberMatches, setNumberMatches] = useState("");
  const [numberDoors, setNumberDoors] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehicleFuel, setVehicleFuel] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [vehicleShielding, setVehicleShielding] = useState("");
  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.container}>
        <SimpleNav label="Filtrar resultados" onPressBack={goBack} />

        <View style={styles.mt25} />
        <Dropdown
          title="Modelo de veículo"
          placeholder="Selecione o modelo de veículo"
          content={dropdownTemplates}
          onPressMenuItem={(item) => setModelVehicles(item)}
          value={modelVehicles}
        />

        <View style={styles.mt25} />
        <Dropdown
          title="Marca do veículo"
          placeholder="Selecione a marca do veículo"
          content={dropdownTemplates}
          onPressMenuItem={(item) => setVehicleBrand(item)}
          value={vehicleBrand}
        />

        <View style={styles.mt25} />
        <DoubleDropdown
          leftContent={dropdownTemplates}
          rightContent={dropdownTemplates}
          leftTitle="Ano"
          rightTitle="Ano de fabricação"
          leftPlaceholder="Selecione o ano"
          leftValue={yearVehicle}
          rightValue={yearManufacture}
          rightPlaceholder="Selecione o ano de fabricação"
          onPressLeftMenuItem={(item) => setYearVehicle(item)}
          onPressRightMenuItem={(item) => setYearManufacture(item)}
        />
        <View style={styles.mt25} />
        <DoubleDropdown
          leftContent={dropdownTemplates}
          rightContent={dropdownTemplates}
          leftTitle="Número de Partidas"
          rightTitle="Número de portas"
          leftValue={numberMatches}
          rightValue={numberDoors}
          leftPlaceholder="Nº de partidas"
          rightPlaceholder="Nº de portas"
          onPressLeftMenuItem={(item) => setNumberMatches(item)}
          onPressRightMenuItem={(item) => setNumberDoors(item)}
        />
        <View style={styles.mt25} />
        <DoubleDropdown
          leftContent={dropdownTemplates}
          rightContent={dropdownTemplates}
          leftTitle="Cor"
          rightTitle="Combustível"
          leftValue={vehicleColor}
          rightValue={vehicleFuel}
          leftPlaceholder="Selecione a cor"
          rightPlaceholder="Tipo de combustível"
          onPressLeftMenuItem={(item) => setVehicleColor(item)}
          onPressRightMenuItem={(item) => setVehicleFuel(item)}
        />
        <View style={styles.mt25} />
        <DoubleDropdown
          leftContent={dropdownTemplates}
          rightContent={dropdownTemplates}
          leftTitle="Tipo de veículo"
          rightTitle="Blindado"
          leftValue={vehicleType}
          rightValue={vehicleShielding}
          leftPlaceholder="Selecione o tipo"
          rightPlaceholder="Tipo de Blindagem"
          onPressLeftMenuItem={(item) => setVehicleType(item)}
          onPressRightMenuItem={(item) => setVehicleShielding(item)}
        />

        <ButtonComponent
          mode="contained"
          label="Filtrar"
          onPress={() => navigate("Vehicles")}
          style={styles.button}
        />
      </View>
    </ScrollView>
  );
};

export default FilterVehiclesScreen;
