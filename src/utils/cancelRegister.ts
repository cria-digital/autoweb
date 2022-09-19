import { Alert } from "react-native";

export const cancelRegister = (goBack: any) => {
  Alert.alert(
    "Cancelar cadastro",
    "Deseja cancelar o cadastro?",
    [
      {
        text: "Não",
        style: "cancel",
      },
      {
        text: "Sim",
        onPress: () => goBack(),
      },
    ],
    { cancelable: false }
  );
};
