import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import PencilIcon from "../../../../components/pencil";
import COLORS from "../../../../constants/colors";
import TrashMiniIcon from "../../../../icons/trashMini";

interface ProposalsComponentProps {}

const ProposalsComponent: React.FC<ProposalsComponentProps> = (props) => {
  return (
    <View>
      <View style={styles.row}>
        <View>
          <Text style={styles.normalText}>Vendedor</Text>
          <Text style={styles.boldText}>Lorem ipsum</Text>
        </View>

        <View style={styles.rowDir}>
          <TouchableOpacity>
            <PencilIcon />
          </TouchableOpacity>
          <TouchableOpacity>
            <TrashMiniIcon />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.mgv24}>
        <View style={{ width: "35%" }}>
          <Text style={styles.normalText}>Proposta</Text>
          <Text style={styles.boldText}>Bom</Text>
        </View>

        <View style={styles.twoColumnsTexts}>
          <View>
            <Text style={styles.normalText}>Desconto</Text>
            <Text style={styles.boldText}>R$ 100.000,00</Text>
          </View>

          <View style={{ marginLeft: 24 }}>
            <Text style={styles.normalText}>Observações</Text>
            <Text style={styles.redText}>R$ 100.000,00</Text>
          </View>
        </View>
      </View>

      <Text style={styles.normalText}>Observações</Text>
      <Text style={styles.boldText}>-----------</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowDir: {
    flexDirection: "row",
  },
  mgv24: {
    marginVertical: 24,
    flexDirection: "row",
  },
  twoColumnsTexts: {
    width: "60%",
    flexDirection: "row",
  },
  normalText: {
    fontSize: 12,
    fontFamily: "Raleway",
    color: "#000000",
  },
  boldText: {
    fontSize: 12,
    fontFamily: "RalewaySemiBold",
    color: "#000000",
  },
  redText: {
    fontSize: 12,
    fontFamily: "RalewaySemiBold",
    color: COLORS.primary,
  },
});

export default ProposalsComponent;
