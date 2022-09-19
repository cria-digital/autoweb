import React from "react";
import { StyleProp, Text, TextStyle, View, ViewStyle } from "react-native";
import { IconButton } from "react-native-paper";
import COLORS from "../../constants/colors";

import styles from "./styles";

type PropTypes = {
  required?: boolean;
  title?: string;
  error?: boolean | string | false | undefined | string[];
  touched?: boolean | string | false | undefined | string[];
  errorMessage?: string | string[];
  style?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  subtitleStyle?: StyleProp<ViewStyle>;
  errorStyle?: StyleProp<TextStyle>;
  subtitle?: string;
  children?: React.ReactNode;
};

const InputLayout: React.FC<PropTypes> = ({
  children,
  required,
  title,
  error,
  touched,
  errorMessage,
  style,
  titleStyle,
  errorStyle,
}) => (
  <View style={style}>
    <View style={styles.containerTitle}>
      {title && <Text style={[styles.titleInput, titleStyle]}>{title}</Text>}
      {required && (
        <IconButton
          icon={"information"}
          size={12}
          color={COLORS.black}
          style={styles.required}
        />
      )}
    </View>
    {children}
    {error && touched && (
      <Text style={[styles.errorStyle, errorStyle]}>{errorMessage}</Text>
    )}
  </View>
);

export default InputLayout;
