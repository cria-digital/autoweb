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

export const getVehiclePurchaseDates = async (
  vehicleID: any,
  tokenAPI: string
) => {
  const data = stringify({
    Empresa: "1",
    Veiculo: vehicleID,
  });
  const config = {
    method: "post",
    url: `${ApiBaseUrl}/modulo_veiculos_compras.asp`,
    headers: {
      Funcao: "6",
      Authorization: `Bearer ${tokenAPI}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data,
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

export const registerVehiclePurchase = async (
  values: any,
  tokenAPI: string
) => {
  const checkStatus = (check: string) => {
    switch (check) {
      case "Não":
        return "0";
      case "Sim":
        return "1";
    }
  };
  const data = stringify({
    Empresa: "1",
    Placa: values.placa,
    Marca: values.marca,
    Modelo: values.modelo,
    Versao: values.versao,
    Cambio: values.cambio,
    Valor: values.valor,
    Cor: values.cor,
    Chassi: values.chassi,
    DataCompra: values.dataCompra,
    PrevisaoPagamento: values.previsaoPagamento,
    Portas: values.numeroPortas,
    Combustivel: values.combustivel,
    TipoVeiculo: values.tipoVeiculo,
    Blindando: checkStatus(values.blindado),
    Sucata: checkStatus(values.sucata),
    Leilao: checkStatus(values.leilao),
    Km: values.km,
    TipoRecibo: values.tipoRecibo,
    Renavam: values.renavam,
    Midia: values.midia,
    AnoFabricacao: values.anoFabricacao,
    AnoModelo: values.ano,
    Comprador: values.comprador,
    Patio: values.patio,
    Usuario: "1",
  });
  const config = {
    method: "post",
    url: `${ApiBaseUrl}/modulo_veiculos_compras.asp`,
    headers: {
      Funcao: "2",
      Authorization: `Bearer ${tokenAPI}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data,
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

export const updateVehiclePurchase = async (
  values: any,
  tokenAPI: string,
  vehicleID: string
) => {
  const checkStatus = (check: string) => {
    switch (check) {
      case "Não":
        return "0";
      case "Sim":
        return "1";
    }
  };
  const data = stringify({
    Empresa: "1",
    Placa: values.placa,
    Marca: values.marca,
    Modelo: values.modelo,
    Versao: values.versao,
    Cambio: values.cambio,
    Valor: values.valor,
    Cor: values.cor,
    Chassi: values.chassi,
    DataCompra: values.dataCompra,
    PrevisaoPagamento: values.previsaoPagamento,
    Portas: values.numeroPortas,
    Combustivel: values.combustivel,
    TipoVeiculo: values.tipoVeiculo,
    Blindado: checkStatus(values.blindado),
    Sucata: checkStatus(values.sucata),
    Leilao: checkStatus(values.leilao),
    Km: values.km,
    TipoRecibo: values.tipoRecibo,
    Renavam: values.renavam,
    Midia: values.midia,
    AnoFabricacao: values.anoFabricacao,
    AnoModelo: values.ano,
    Comprador: values.comprador,
    Patio: values.patio,
    IdVeiculo: vehicleID,
  });
  const config = {
    method: "post",
    url: `${ApiBaseUrl}/modulo_veiculos_compras.asp`,
    headers: {
      Funcao: "3",
      Authorization: `Bearer ${tokenAPI}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data,
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
