import React from "react";
import BottomNavigation from "./bottomNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FilterVehiclesScreen from "../screens/vehicles/filterVehicles";
import RegisterAvaliation from "../screens/vehicles/registerAvaliation";
import ViewAvaliationScreen from "../screens/vehicles/viewAvaliation";

const Navigation = () => {
  const Stack = createNativeStackNavigator();
  const notHeader = { headerShown: false };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="UserMenu"
          component={BottomNavigation}
          options={notHeader}
        />
        <Stack.Screen
          name="FilterVehicles"
          component={FilterVehiclesScreen}
          options={notHeader}
        />
        <Stack.Screen
          name="RegisterAvaliation"
          component={RegisterAvaliation}
          options={notHeader}
        />
        <Stack.Screen
          name="ViewAvaliation"
          component={ViewAvaliationScreen}
          options={notHeader}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
