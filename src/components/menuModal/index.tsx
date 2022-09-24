import React from "react";
import COLORS from "../../constants/colors";
import MenuMosaicIcon from "../../icons/menuMosaic";
import SwapArrowsIcon from "../../icons/swapArrows";
import VehicleIcon from "../../icons/vehicle";
import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Modal, StyleSheet, TouchableOpacity, Text } from "react-native";
import DespachanteIcon from "../../icons/despachante";
import FinancialIcon from "../../icons/financial";
import UsersIcon from "../../icons/users";
import UserIcon from "../../icons/user";
import CogIcon from "../../icons/cog";
import ButtonComponent from "../button";

interface MenuModalProps {
  visible: boolean;
  animationType?: "none" | "slide" | "fade";
  onPressArrow?: () => void;
  isFullScreen?: boolean;
}

const MenuModal: React.FC<MenuModalProps> = (props) => {
  const { visible, animationType, onPressArrow, isFullScreen } = props;
  const { navigate } = useNavigation();
  const { name: nameScreen } = useRoute();
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType={animationType}
      onDismiss={onPressArrow}
      style={[isFullScreen && { zIndex: -999 }]}
      onRequestClose={onPressArrow}
    >
      <View
        style={[styles.innerModalContainer, isFullScreen && { zIndex: -50 }]}
      >
        <View
          style={[
            styles.innerContainer,
            isFullScreen ? { flex: 1 } : { flex: 0.5 },
          ]}
        >
          <TouchableOpacity
            style={styles.arrowsIcon}
            activeOpacity={0.4}
            onPress={onPressArrow}
          >
            <SwapArrowsIcon />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonsContainer}
            activeOpacity={0.5}
            onPress={onPressArrow}
          >
            <View style={styles.icon}>
              <MenuMosaicIcon />
            </View>
            <Text style={styles.text}>Painel</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonsContainer}
            activeOpacity={0.5}
            onPress={onPressArrow}
          >
            <View
              style={[
                styles.icon,
                nameScreen === "Vehicles" && styles.primaryColor,
              ]}
            >
              <VehicleIcon />
            </View>
            <Text
              style={[
                styles.text,
                nameScreen === "Vehicles" && styles.textPrimary,
              ]}
            >
              Veículos
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonsContainer}
            activeOpacity={0.5}
            onPress={() => alert("tela despachante não criada")}
          >
            <View
              style={[
                styles.icon,
                nameScreen === "Despachante" && styles.primaryColor,
              ]}
            >
              <DespachanteIcon />
            </View>
            <Text
              style={[
                styles.text,
                nameScreen === "Despachante" && styles.textPrimary,
              ]}
            >
              Despachantes
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonsContainer}
            activeOpacity={0.5}
            onPress={() => alert("tela Financeiro não criada")}
          >
            <View
              style={[
                styles.icon,
                nameScreen === "Financial" && styles.primaryColor,
              ]}
            >
              <FinancialIcon />
            </View>
            <Text
              style={[
                styles.text,
                nameScreen === "Financial" && styles.textPrimary,
              ]}
            >
              Financeiro
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonsContainer}
            activeOpacity={0.5}
            onPress={() => alert("tela Clientes não criada")}
          >
            <View
              style={[
                styles.icon,
                nameScreen === "Clients" && styles.primaryColor,
              ]}
            >
              <UsersIcon />
            </View>
            <Text
              style={[
                styles.text,
                nameScreen === "Clients" && styles.textPrimary,
              ]}
            >
              Clientes
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonsContainer}
            activeOpacity={0.5}
            onPress={() => alert("tela Usuários não criada")}
          >
            <View
              style={[
                styles.icon,
                nameScreen === "Profiles" && styles.primaryColor,
              ]}
            >
              <UserIcon />
            </View>
            <Text
              style={[
                styles.text,
                nameScreen === "Profiles" && styles.textPrimary,
              ]}
            >
              Usuários
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonsContainer}
            activeOpacity={0.5}
            onPress={() => alert("tela Configurações não criada")}
          >
            <View
              style={[
                styles.icon,
                nameScreen === "Configuration" && styles.primaryColor,
              ]}
            >
              <CogIcon />
            </View>
            <Text
              style={[
                styles.text,
                nameScreen === "Configuration" && styles.textPrimary,
              ]}
            >
              Configurações
            </Text>
          </TouchableOpacity>

          <ButtonComponent
            mode="contained"
            label="Sair"
            style={{ marginTop: 70 }}
            onPress={onPressArrow}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  innerModalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.1)",
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 69,
  },
  innerContainer: {
    backgroundColor: "#11111D",
    width: "100%",
    shadowColor: "rgba(0,0,0,0.1)",
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    elevation: 4,
    padding: 28,
  },
  arrowsIcon: {
    alignSelf: "flex-end",
  },
  text: {
    fontFamily: "Raleway500",
    fontSize: 16,
    color: "#fff",
    marginLeft: 25,
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32,
  },
  icon: {
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  primaryColor: {
    backgroundColor: COLORS.primary,
  },
  textPrimary: {
    color: COLORS.primary,
  },
});

export default MenuModal;
