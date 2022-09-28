import axios from "axios";
import { stringify } from "qs";
import Constants from "expo-constants";

const ApiBaseUrl = Constants.manifest?.extra?.autoWebBaseUrl;
const Usuario = Constants.manifest?.extra?.AUTOWEB_USUARIO;
const Senha = Constants.manifest?.extra?.AUTOWEB_API_SENHA;

export const generateTokenApi = async () => {
  const params = new URLSearchParams();
  params.append("Usuario", Usuario);
  params.append("Senha", Senha);

  const data = {
    Usuario,
    Senha,
  };

  const config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Funcao: "4",
    },
  };

  const result = await axios.post(
    `${ApiBaseUrl}/modulo_api.asp`,
    stringify(data),
    config
  );

  return result.data;
};
