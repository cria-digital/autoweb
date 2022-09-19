import React from "react";
import { View } from "react-native";
import ButtonComponent from "../button";

interface NextBackButtonsProps {
  firstButtonLabel: string;
  secondButtonLabel: string;
  firstButtonOnPress: () => void;
  secondButtonOnPress: () => void;
}

const NextBackButtons: React.FC<NextBackButtonsProps> = (props) => {
  const {
    firstButtonLabel,
    secondButtonLabel,
    firstButtonOnPress,
    secondButtonOnPress,
  } = props;
  return (
    <View>
      <ButtonComponent
        mode="contained"
        label={firstButtonLabel}
        onPress={firstButtonOnPress}
      />
      <ButtonComponent
        style={{ marginTop: 12, marginBottom: 30 }}
        mode="outlined"
        label={secondButtonLabel}
        onPress={secondButtonOnPress}
      />
    </View>
  );
};

export default NextBackButtons;
