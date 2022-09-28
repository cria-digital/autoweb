import { View } from "react-native";
import { RecoilRoot } from "recoil";
import Constants from "expo-constants";
import Navigation from "./src/navigation";
import { StatusBar } from "expo-status-bar";
import useLocalFonts from "./src/hooks/useLocalFonts";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

const App = () => {
  const { fontsLoaded } = useLocalFonts();
  const theme = {
    ...DefaultTheme,
  };

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) await SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <PaperProvider theme={theme}>
      <StatusBar style="auto" />
      <View
        onLayout={onLayoutRootView}
        style={{ marginTop: Constants.statusBarHeight }}
      />
      <RecoilRoot>
        <Navigation />
      </RecoilRoot>
    </PaperProvider>
  );
};

export default App;
