import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import {
  Raleway_400Regular,
  Raleway_600SemiBold,
  Raleway_700Bold,
  Raleway_700Bold_Italic,
  Raleway_500Medium,
} from "@expo-google-fonts/raleway";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";

const useLocalFonts = () => {
  const [fontsLoaded] = useFonts({
    Poppins: Poppins_400Regular,
    PoppinsBold: Poppins_600SemiBold,
    RalewaySemiBold: Raleway_600SemiBold,
    RalewayBold: Raleway_700Bold,
    RalewayBoldItalic: Raleway_700Bold_Italic,
    Raleway: Raleway_400Regular,
    Raleway500: Raleway_500Medium,
  });

  useEffect(() => {
    const prepare = async () => await SplashScreen.preventAutoHideAsync();
    prepare();
  }, []);

  return { fontsLoaded };
};
export default useLocalFonts;
