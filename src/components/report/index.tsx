import React from "react";
import { View, Text, StyleSheet, StyleProp, ViewStyle } from "react-native";
import COLORS from "../../constants/colors";

interface ReportComponentProps {
  type: "checklist" | "avaliations";
  title: string;
  avaliation?: string;
  price: number;
  observations?: string;
  style?: StyleProp<ViewStyle>;
}

const ReportComponent: React.FC<ReportComponentProps> = (props) => {
  const { type, title, avaliation, price, observations, style } = props;
  return (
    <View style={[{ marginTop: 24 }, style]}>
      {type === "checklist" && (
        <>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.flexContainer}>
            <View>
              <Text>Avaliação</Text>
              <Text>{avaliation}</Text>
            </View>
            <View>
              <Text>Custo aproximado</Text>
              <Text>{`R$ ${parseFloat(price).toFixed(2)}`}</Text>
            </View>
            <View>
              <Text>Observações</Text>
              <Text>{observations}</Text>
            </View>
          </View>
        </>
      )}
      {type === "avaliations" && (
        <View style={styles.avaliationsContainer}>
          <Text style={styles.titleAvaliations}>{title}</Text>
          <Text style={styles.priceAvaliations}>{`R$ ${parseFloat(
            price
          ).toFixed(2)}`}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: COLORS.primary,
    fontFamily: "RalewaySemiBold",
    fontSize: 16,
    marginBottom: 24,
  },
  flexContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  avaliationsContainer: {
    marginBottom: 24,
  },
  titleAvaliations: {
    fontFamily: "RalewaySemiBold",
    fontSize: 12,
    color: COLORS.primary,
  },
  priceAvaliations: {
    fontFamily: "RalewaySemiBold",
    fontSize: 16,
    color: COLORS.black,
  },
});

export default ReportComponent;
