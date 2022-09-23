import React from "react";
import { View } from "react-native";
import COLORS from "../../constants/colors";
import ButtonComponent from "../button";

interface NextBackButtonsProps {
  firstButtonLabel: string;
  secondButtonLabel: string;
  firstButtonOnPress: () => void;
  secondButtonOnPress: () => void;
  approvalButton?: boolean;
}

const NextBackButtons: React.FC<NextBackButtonsProps> = (props) => {
  const {
    firstButtonLabel,
    secondButtonLabel,
    firstButtonOnPress,
    secondButtonOnPress,
    approvalButton,
  } = props;
  return (
    <View>
      <ButtonComponent
        mode="contained"
        style={[approvalButton && { backgroundColor: COLORS.green }]}
        labelStyle={{ color: "white" }}
        label={firstButtonLabel}
        onPress={firstButtonOnPress}
      />
      <ButtonComponent
        style={[
          { marginTop: 12, marginBottom: 30 },
          approvalButton && { backgroundColor: COLORS.primary },
        ]}
        labelStyle={[approvalButton && { color: "white" }]}
        mode="outlined"
        label={secondButtonLabel}
        onPress={secondButtonOnPress}
      />
    </View>
  );
};

export default NextBackButtons;
