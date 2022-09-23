import React from "react";
import { View, Text, StyleSheet } from "react-native";
import COLORS from "../../constants/colors";

interface ValuesPanelProps {}

const ValuesPanel: React.FC<ValuesPanelProps> = (props) => {
  return (
    <View style={styles.container}>
      <View
        style={{ borderWidth: 1, borderColor: "#C9D3E9", marginBottom: 24 }}
      >
        <View style={styles.rowGraph}>
          <Text style={styles.bold10}>Tipo de débito</Text>
          <Text style={styles.bold10}>{`Valor do débito (R$)`}</Text>
          <Text style={styles.bold10}>Data / Prazo</Text>
          <Text style={styles.bold10}> Informações</Text>
        </View>

        <View style={styles.innerGraph}>
          <Text style={styles.textInnerGraph}>IPVA</Text>
          <Text style={styles.textInnerGraph}>{`1.000,00`}</Text>
          <Text style={styles.textInnerGraph}>30/06/2021</Text>
          <Text style={styles.textInformation}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            quis enim explicabo sint deserunt quisquam consectetur,
          </Text>
        </View>

        <View
          style={{ height: 2, backgroundColor: "#C9D3E9", marginVertical: 8 }}
        />

        <View style={styles.innerGraph}>
          <Text style={styles.textInnerGraph}>Multa</Text>
          <Text style={styles.textInnerGraph}>{`3.000,00`}</Text>
          <Text style={styles.textInnerGraph}>30/06/2021</Text>
          <Text style={styles.textInformation}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            adipisci hic officia atque dicta in perspiciatis sapiente fugit
            beatae dolor deleniti voluptates
          </Text>
        </View>
      </View>
      <View style={styles.total}>
        <Text style={styles.totalText}>TOTAL DÉBITOS</Text>
        <Text style={styles.totalText}>X.000,00</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  bold10: {
    fontFamily: "RalewayBold",
    fontSize: 10,
    color: COLORS.black,
    width: "23%",
    textAlign: "center",
    paddingHorizontal: "1%",
  },
  rowGraph: {
    backgroundColor: "#C9D3E9",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 46,
  },
  innerGraph: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  textInnerGraph: {
    fontFamily: "Raleway",
    fontSize: 10,
    color: COLORS.black,
    width: "23%",
    textAlign: "center",
    paddingHorizontal: "1%",
  },
  textInformation: {
    fontFamily: "Raleway",
    fontSize: 10,
    color: COLORS.black,
    width: "27%",
    textAlign: "left",
    paddingHorizontal: "1%",
  },
  total: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "60%",
    backgroundColor: "#C9D3E9",
    height: 46,
  },
  totalText: {
    fontFamily: "RalewaySemiBold",
    fontSize: 12,
    color: COLORS.black,
    paddingHorizontal: 8,
  },
});

export default ValuesPanel;
