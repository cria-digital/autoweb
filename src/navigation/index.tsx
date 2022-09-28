import React, { useEffect } from "react";
import BottomNavigation from "./bottomNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FilterVehiclesScreen from "../screens/vehicles/filterVehicles";
import RegisterAvaliation from "../screens/vehicles/registerAvaliation";
import ViewAvaliationScreen from "../screens/vehicles/viewAvaliation";
import RegisterPurchase from "../screens/vehicles/purchase/registerPurchase";
import ViewPurchases from "../screens/vehicles/purchase/viewPurchases";
import ContractsPurchase from "../screens/vehicles/purchase/contracts";
import AddProposal from "../screens/vehicles/sell/addProposal";
import RealizedSell from "../screens/vehicles/sell/realizedSell";
import ViewSellScreen from "../screens/vehicles/sell/viewSell";
import { useRecoilState } from "recoil";
import AuthStatus from "../atoms/auth";
import { generateTokenApi } from "../config/axiosConfig";

const Navigation = () => {
  const [{ tokenApi, tokenExpire }, setAuthStatus] = useRecoilState(AuthStatus);
  const Stack = createNativeStackNavigator();
  const notHeader = { headerShown: false };

  useEffect(() => {
    const momentHour = new Date().toLocaleTimeString();

    async function GetApiAccessToken() {
      const resultDataGenerateTokenApi = await generateTokenApi();
      setAuthStatus((old) => ({
        ...old,
        tokenApi: resultDataGenerateTokenApi.Requisicao.Retorno.TokenAcesso,
        tokenExpire:
          resultDataGenerateTokenApi.Requisicao.Retorno.HorarioExpiracao,
      }));
    }
    if (!tokenApi || momentHour >= tokenExpire) GetApiAccessToken();
  }, [tokenApi, tokenExpire]);

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
          name="RegisterPurchase"
          component={RegisterPurchase}
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
        <Stack.Screen
          name="ViewPurchase"
          component={ViewPurchases}
          options={notHeader}
        />
        <Stack.Screen
          name="ContractsPurchase"
          component={ContractsPurchase}
          options={notHeader}
        />
        <Stack.Screen
          name="AddProposal"
          component={AddProposal}
          options={notHeader}
        />
        <Stack.Screen
          name="RealizedSell"
          component={RealizedSell}
          options={notHeader}
        />
        <Stack.Screen
          name="ViewSell"
          component={ViewSellScreen}
          options={notHeader}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
