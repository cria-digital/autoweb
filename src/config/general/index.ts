import axios from "axios";
import { stringify } from "qs";
import { ApiBaseUrl } from "../compra";

export const consultBrands = async (tokenAPI: string) => {
  const config = {
    method: "post",
    url: `${ApiBaseUrl}/modulo_veiculos_consulta_dados.asp`,
    headers: {
      Funcao: "1",
      Authorization: `Bearer ${tokenAPI}`,
    },
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

export const consultModels = async (idBrand: string, tokenAPI: string) => {
  const data = stringify({
    idMarca: idBrand,
  });

  const config = {
    method: "post",
    url: `${ApiBaseUrl}/modulo_veiculos_consulta_dados.asp`,
    headers: {
      Funcao: "2",
      Authorization: `Bearer ${tokenAPI}`,
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

export const consultVersion = async (
  idModel: string,
  tokenAPI: string,
  yearModel?: string
) => {
  const data = stringify({ idModelo: idModel, AnoModelo: yearModel });

  const config = {
    method: "post",
    url: `${ApiBaseUrl}/modulo_veiculos_consulta_dados.asp`,
    headers: {
      Funcao: "3",
      Authorization: `Bearer ${tokenAPI}`,
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
