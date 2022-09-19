import React from "react";
import { StyleSheet, Text } from "react-native";
import { TextInput } from "react-native-paper";
import { TextInputProps } from "react-native-paper/lib/typescript/components/TextInput/TextInput";
import COLORS from "../../constants/colors";

interface InputComponentProps {
  style?: any;
  errors?: any;
  touched?: any;
  errorMessage?: string;
}

const InputComponent: React.FC<InputComponentProps & TextInputProps> = (
  props
) => {
  const { style, errors, touched, errorMessage } = props;
  return (
    <>
      <TextInput
        {...props}
        underlineColor={"transparent"}
        activeOutlineColor={"transparent"}
        outlineColor={"transparent"}
        activeUnderlineColor={"transparent"}
        placeholderTextColor={"rgba(0, 0, 0, 0.5)"}
        style={[styles.input, style]}
        theme={{
          fonts: {
            light: {
              fontFamily: "Raleway",
            },
            regular: {
              fontFamily: "Raleway",
            },
            medium: {
              fontFamily: "Raleway",
            },
            thin: {
              fontFamily: "Raleway",
            },
          },
        }}
      />
      {errors && touched && <Text style={styles.error}>{errorMessage}</Text>}
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#fff",
    height: 50,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderColor: "#C9D3E9",
    fontSize: 12,
    paddingHorizontal: 16,
  },
  error: {
    color: COLORS.primary,
    fontSize: 12,
    fontFamily: "Poppins",
  },
});

export default InputComponent;
