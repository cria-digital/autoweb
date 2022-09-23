import React from "react";
import { View, Text, StyleSheet, StyleProp, ViewStyle } from "react-native";

interface ViewChecklistProps {
  style?: StyleProp<ViewStyle>;
  itemLabel: string;
  condition: string;
  value: string;
}

const ViewChecklist: React.FC<ViewChecklistProps> = (props) => {
  const { style, condition, itemLabel, value } = props;
  return (
    <View style={style}>
      <View style={[styles.rowContainer]}>
        <Text style={[styles.normalText]}>Item</Text>
        <Text style={[styles.normalText]}>Avaliação</Text>
        <Text style={[styles.normalText]}>Custo aprox.</Text>
      </View>

      <View style={[styles.rowContainer]}>
        <Text style={[styles.semiboldText]}>{itemLabel}</Text>
        <Text style={[styles.semiboldText]}>{condition}</Text>
        <Text style={[styles.semiboldText]}>R$ {value}</Text>
      </View>

      <Text style={[styles.normalText, { marginTop: 16 }]}>Observações</Text>
      <Text style={{ marginBottom: 24 }}>-----------</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  normalText: {
    fontFamily: "Raleway",
    fontSize: 12,
    color: "#000",
    textAlign: "left",
    width: "33.333%",
  },
  semiboldText: {
    fontFamily: "RalewaySemiBold",
    fontSize: 16,
    color: "#000",
    textAlign: "left",
    width: "33.333%",
  },
});

export default ViewChecklist;
