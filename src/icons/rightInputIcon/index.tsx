import React from "react";
import { View } from "react-native";
import { TextInput } from "react-native-paper";

const RightInputIcon = (iconName: any, onPress: any) => (
  <TextInput.Icon
    name={iconName}
    color={"rgba(0,0,0,0.4)"}
    forceTextInputFocus={false}
    rippleColor={"white"}
    onPress={onPress}
    size={24}
  />
);

export default RightInputIcon;
