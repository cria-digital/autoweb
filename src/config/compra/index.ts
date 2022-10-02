import axios from "axios";
import { stringify } from "qs";
import Constants from "expo-constants";

export const ApiBaseUrl = Constants.manifest?.extra?.autoWebBaseUrl;

export const consultPurchases = async (tokenAPI: string) => {
  const data = stringify({
    Empresa: "1",
  });

  const config = {
    method: "post",
    url: `${ApiBaseUrl}/modulo_veiculos_compras.asp`,
    headers: {
      Funcao: "5",
      Authorization: `Bearer ${tokenAPI}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: data,
  };

  try {
    const result = await axios(config);
    return result.data.Requisicao.Retorno;
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log("Error", error.message);
    }
    return null;
  }
};

export const consultPurchaseByPlate = async (
  carPlate: string,
  tokenAPI: string
) => {
  const data = stringify({
    Empresa: "1",
    Placa: carPlate,
  });

  const config = {
    method: "post",
    url: `${ApiBaseUrl}/modulo_veiculos_compras.asp`,
    headers: {
      Funcao: "1",
      Authorization: `Bearer ${tokenAPI}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: data,
  };

  try {
    const result = await axios(config);
    return result.data.Requisicao.Retorno;
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log("Error", error.message);
    }
    return null;
  }
};

export const cancelPurchaseVehicle = async (
  idVehicle: string,
  tokenAPI: string
) => {
  const data = stringify({
    Empresa: "1",
    idVeiculo: idVehicle,
  });

  const config = {
    method: "post",
    url: `${ApiBaseUrl}/modulo_veiculos_compras.asp`,
    headers: {
      Funcao: "4",
      Authorization: `Bearer ${tokenAPI}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: data,
  };

  try {
    const result = await axios(config);
    return JSON.stringify(result.data);
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log("Error", error.message);
    }
    return null;
  }
};
