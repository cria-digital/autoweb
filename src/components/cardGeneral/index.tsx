import React, { memo } from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { IconButton, Menu, Provider } from "react-native-paper";
import { StatusGeneral } from "../../../enums";
import COLORS from "../../constants/colors";

interface CardGeneralProps {
  vehicleImage: string;
  vehicleName: string;
  carYear: string;
  code: string;
  licensePlate: string;
  onPressDots?: () => void;
  despachante?: string;
  vendido?: string;
  status: string;
}

const CardGeneral: React.FC<CardGeneralProps> = (props) => {
  const {
    vehicleImage,
    carYear,
    vehicleName,
    code,
    licensePlate,
    onPressDots,
    despachante,
    vendido,
    status,
  } = props;

  const getStatusColor = (status: any) => {
    switch (status) {
      case StatusGeneral.AV:
        return COLORS.warning;
      case StatusGeneral.CMP:
        return "#319ECD";
      case StatusGeneral.EST:
        return "#8B38FF";
      case StatusGeneral.VND:
        return "#FF7398";
      case StatusGeneral.VDD:
        return COLORS.green;
    }
  };

  return (
    <View style={styles.container}>
      <IconButton
        icon="information"
        color={COLORS.black}
        size={20}
        style={styles.dotsContainer}
        onPress={onPressDots}
        rippleColor={"rgb(240, 240, 240)"}
      />
      <View style={styles.carInfosContainer}>
        <Image source={{ uri: vehicleImage }} style={styles.image} />

        <View style={styles.carInfos}>
          <Text style={styles.carName}>{`${vehicleName} ${carYear}`}</Text>
          <Text style={styles.licensePlate}>{`Placa: ${licensePlate}`}</Text>
          <Text style={styles.carCode}>Código: {code}</Text>
        </View>
      </View>

      <View style={styles.footerContainer}>
        <View style={{ width: "50%" }}>
          <View style={styles.row}>
            <Text style={styles.normalText}>Despachante:</Text>
            <Text style={styles.strongText}> {despachante ?? "Sim"}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.normalText}>Vendido:</Text>
            <Text style={styles.strongText}> {vendido ?? "Sim"}</Text>
          </View>
        </View>

        <View style={{ width: "50%" }}>
          <Text style={styles.strongText}>Status</Text>
          <View>
            <Text
              style={[
                styles.statusText,
                { backgroundColor: getStatusColor(status) },
              ]}
            >
              {status}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.04)",
  },
  image: {
    width: 77,
    height: 77,
    borderRadius: 8,
  },
  carInfosContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  carInfos: {
    marginLeft: 13,
  },
  carName: {
    fontFamily: "RalewayBold",
    fontSize: 14,
    color: COLORS.primary,
  },
  carCode: {
    fontFamily: "RalewayBold",
    fontSize: 14,
    color: COLORS.black,
  },
  licensePlate: {
    fontFamily: "Raleway",
    fontSize: 12,
    color: "rgba(0, 0, 0, 0.4)",
    marginBottom: 8,
  },
  carValue: {
    fontFamily: "RalewayBold",
    fontSize: 16,
    color: COLORS.black,
  },
  carValueInfo: {
    fontFamily: "Raleway",
    fontSize: 12,
    color: "rgba(0, 0, 0, 0.4)",
    marginLeft: 8,
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
    width: "100%",
  },
  strongText: {
    fontFamily: "RalewayBold",
    fontSize: 12,
    color: COLORS.black,
  },
  normalText: {
    fontFamily: "Raleway",
    fontSize: 12,
    color: COLORS.black,
  },
  menuItem: {
    fontFamily: "Poppins",
    fontSize: 12,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  dotsContainer: {
    position: "absolute",
    right: 0,
    zIndex: 3,
    margin: 0,
    marginRight: 0,
    marginTop: 20,
    opacity: 0.4,
  },
  signature: {
    fontFamily: "RalewaySemiBold",
    fontSize: 12,
    color: COLORS.primary,
    textDecorationLine: "underline",
  },
  statusText: {
    fontFamily: "RalewaySemiBold",
    fontSize: 12,
    color: "white",
    borderRadius: 20,
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 2,
    marginTop: 4,
  },
});

export default CardGeneral;
