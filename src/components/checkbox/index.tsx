import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Checkbox, IconButton } from "react-native-paper";
import COLORS from "../../constants/colors";

interface CheckboxComponentProps {
  hasChecked: boolean;
  label: string;
  style?: any;
  setHasChecked: (hasChecked: boolean) => void;
  inverted?: boolean;
}

const CheckboxComponent: React.FC<CheckboxComponentProps> = (props) => {
  const { hasChecked, setHasChecked, label, style, inverted } = props;
  return (
    <View style={[style ?? styles.container]}>
      {!inverted && (
        <View>
          <Checkbox
            status={hasChecked ? "checked" : "unchecked"}
            onPress={() => setHasChecked(!hasChecked)}
            color={"#C9D3E9"}
            uncheckedColor={"#C9D3E9"}
          />
          <Text style={styles.textStyle}>{label}</Text>
        </View>
      )}
      {inverted && (
        <View style={styles.container}>
          <Text style={styles.invertedTextStyle}>{label}</Text>
          <IconButton
            icon={"check"}
            color={"white"}
            size={14}
            onPress={() => setHasChecked(!hasChecked)}
            rippleColor={"white"}
            style={[
              { margin: 0 },
              hasChecked
                ? { backgroundColor: COLORS.green }
                : { backgroundColor: "#C9D3E9" },
            ]}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: "Raleway",
    fontSize: 12,
    color: COLORS.black,
  },
  invertedTextStyle: {
    fontFamily: "Poppins",
    fontSize: 12,
    color: COLORS.black,
    marginRight: 10,
  },
  container: {
    flexDirection: "row",
    marginTop: 30,
    alignItems: "center",
  },
});

export default CheckboxComponent;
