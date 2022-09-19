import React from "react";
import { View, Text } from "react-native";
import COLORS from "../../constants/colors";
import RadioButtonComponent from "../radioButton";

interface RadioOptionsProps {
  label: string;
  onPressFirstOption: (text: string) => void;
  onPressSecondOption: (text: string) => void;
  onPressThirdOption: (text: string) => void;
  actualOption: string;
  firstOption: string;
  secondOption: string;
  thirdOption: string;
}

const RadioOptions: React.FC<RadioOptionsProps> = (props) => {
  const {
    label,
    actualOption,
    onPressFirstOption,
    onPressSecondOption,
    onPressThirdOption,
    firstOption,
    secondOption,
    thirdOption,
  } = props;
  return (
    <View style={{ marginTop: 30 }}>
      <Text
        style={{
          fontFamily: "RalewaySemiBold",
          fontSize: 12,
          color: COLORS.black,
          fontWeight: "bold",
        }}
      >
        {label}
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "70%",
          marginTop: 24,
        }}
      >
        <RadioButtonComponent
          label={firstOption}
          onPress={() => onPressFirstOption(firstOption)}
          status={actualOption === firstOption ? "checked" : "unchecked"}
        />
        <RadioButtonComponent
          label={secondOption}
          onPress={() => onPressSecondOption(secondOption)}
          status={actualOption === secondOption ? "checked" : "unchecked"}
        />
        <RadioButtonComponent
          label={thirdOption}
          onPress={() => onPressThirdOption(thirdOption)}
          status={actualOption === thirdOption ? "checked" : "unchecked"}
        />
      </View>
    </View>
  );
};

export default RadioOptions;
