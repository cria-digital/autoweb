import React, { memo } from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { IconButton, Menu, Provider } from "react-native-paper";
import COLORS from "../../constants/colors";

interface CardPurchaseProps {
  cardType?: "finished" | "waiting";
  reprovedMotive?: string;
  vehicleImage: string;
  vehicleName: string;
  carYear: string;
  code: string;
  carValue?: string;
  licensePlate: string;
  assessorName: string;
  evaluationDate: string;
  onPressSignature?: () => void;
  onPressDots?: () => void;
  onPressContinueRegistration?: () => void;
}

const CardPurchase: React.FC<CardPurchaseProps> = (props) => {
  const {
    vehicleImage,
    reprovedMotive,
    cardType,
    carYear,
    vehicleName,
    code,
    carValue,
    licensePlate,
    assessorName,
    evaluationDate,
    onPressSignature,
    onPressDots,
    onPressContinueRegistration,
  } = props;

  return (
    <View style={styles.container}>
      {cardType === "finished" && (
        <>
          <IconButton
            icon="dots-vertical"
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
              <Text
                style={styles.licensePlate}
              >{`Placa: ${licensePlate}`}</Text>
              <Text style={styles.carCode}>Código: {code}</Text>
            </View>
          </View>
          <View style={styles.footerContainer}>
            <View>
              <Text style={styles.strongText}>Assinatura digital</Text>
              <TouchableOpacity activeOpacity={0.5} onPress={onPressSignature}>
                <Text style={styles.signature}>Ver assinatura</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.strongText}>Status</Text>
              <Text style={styles.statusText}>Aguardando liberação</Text>
            </View>
          </View>
        </>
      )}

      {cardType === "waiting" && (
        <>
          <IconButton
            icon="dots-vertical"
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
              <Text
                style={styles.licensePlate}
              >{`Placa: ${licensePlate}`}</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={styles.carValue}>{`R$ ${carValue}`}</Text>
                <Text style={styles.carValueInfo}>avaliado pela loja</Text>
              </View>
            </View>
          </View>
          <View style={styles.footerContainer}>
            <View>
              <Text style={styles.strongText}>Avaliado por</Text>
              <Text style={styles.normalText}>{assessorName}</Text>
            </View>
            <View>
              <Text style={styles.strongText}>Data da avaliação</Text>
              <Text style={styles.normalText}>{evaluationDate}</Text>
            </View>
          </View>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={onPressContinueRegistration}
          >
            <Text
              style={[
                styles.signature,
                { alignSelf: "flex-end", marginTop: 24 },
              ]}
            >
              Continuar cadastro
            </Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.04)",
    paddingHorizontal: 18,
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
    color: COLORS.primary,
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
    width: "85%",
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
  dotsContainer: {
    position: "absolute",
    right: 0,
    zIndex: 3,
    margin: 0,
    marginRight: 20,
    marginTop: 20,
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
    backgroundColor: COLORS.warning,
    borderRadius: 20,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginTop: 4,
  },
});

export default CardPurchase;
