import React, { useEffect } from "react";
import UsersIcon from "../../icons/users";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import VehicleIcon from "../../icons/vehicle";
import styles from "./styles";
import FinancialIcon from "../../icons/financial";
import ClientsScreen from "../../screens/clients";
import PanelScreen from "../../screens/panel";
import FinancialScreen from "../../screens/financial";
import MenuScreen from "../../screens/menu";
import IconBottomNavigation from "../../components/iconBottomNavigation";
import MiniMenuIcon from "../../icons/miniMenu";
import MenuNavigationIcon from "../../icons/menuNavigation";
import VehiclesScreen from "../../screens/vehicles";
import MenuModal from "../../components/menuModal";
import { useNavigation } from "@react-navigation/native";

const BottomNavigation = () => {
  const { navigate } = useNavigation();
  const Bottom = createMaterialTopTabNavigator();
  const [visibleMenu, setVisibleMenu] = React.useState(false);

  const RenderMenuModal = () => (
    <MenuModal
      visible={visibleMenu}
      animationType="slide"
      isFullScreen
      isSelectedScreen="Vehicles"
      onPressArrow={() => {
        setVisibleMenu(false);
        navigate("Vehicles");
      }}
    />
  );

  return (
    <Bottom.Navigator
      tabBarPosition="bottom"
      initialRouteName="Vehicles"
      screenListeners={({ navigation, route }) => ({
        tabPress: (e) => {
          if (route.name === "Panel") {
            setVisibleMenu(true);
            return e.preventDefault();
          }
        },
      })}
      screenOptions={({ route }) => ({
        swipeEnabled: false,
        tabBarShowIcon: true,
        tabBarShowLabel: false,
        tabBarIcon({ focused }) {
          const hasFocused = focused ? "white" : "rgba(255, 255, 255, 0.4)";
          switch (route.name) {
            case "Clients":
              return (
                <IconBottomNavigation
                  icon={() => <UsersIcon color={hasFocused} />}
                  focused={focused}
                  label="Clientes"
                />
              );
            case "Vehicles":
              return (
                <IconBottomNavigation
                  icon={() => <VehicleIcon color={hasFocused} />}
                  focused={focused}
                  label="Veículos"
                />
              );
            case "Panel":
              return (
                <IconBottomNavigation
                  icon={() => <MiniMenuIcon color={hasFocused} />}
                  focused={focused}
                  label="Painel"
                />
              );
            case "Financial":
              return (
                <IconBottomNavigation
                  icon={() => <FinancialIcon color={hasFocused} />}
                  focused={focused}
                  label="Financeiro"
                />
              );
            case "Menu":
              return (
                <IconBottomNavigation
                  icon={() => <MenuNavigationIcon color={hasFocused} />}
                  focused={focused}
                  label="Menu"
                />
              );
          }
        },
        tabBarIndicatorStyle: styles.tabBarIndicatorStyle,
        tabBarStyle: styles.tabBarStyle,
        tabBarContentContainerStyle: styles.tabBarContentContainerStyle,
      })}
    >
      <Bottom.Screen name="Clients" component={ClientsScreen} />
      <Bottom.Screen name="Vehicles" component={VehiclesScreen} />
      <Bottom.Screen name="Panel" component={RenderMenuModal} />
      <Bottom.Screen name="Financial" component={FinancialScreen} />
      <Bottom.Screen name="Menu" component={MenuScreen} />
    </Bottom.Navigator>
  );
};

export default BottomNavigation;
