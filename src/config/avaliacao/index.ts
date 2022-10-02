import axios from "axios";
import { stringify } from "qs";
import Constants from "expo-constants";

const ApiBaseUrl = Constants.manifest?.extra?.autoWebBaseUrl;

export const registerAvaliation = async (values: any, tokenAPI) => {
  const precoSugerido = parseInt(values.avaliacaoLoja) - 1000;
  const statusCheck = (value) => {
    if (value === "Bom") return "1";
    if (value === "Regular") return "2";
    if (value === "Ruim") return "3";
  };
  const data = stringify({
    idUnidade: "1",
    idUsuario: "1",
    idVeiculo: "1",
    txtPlaca: values.placa ?? "",
    cboMarcas: "1",
    cboModelos: "1",
    cboVersao: "1",
    txt_ano_fabricacao: values.anoFabricacao ?? "",
    txt_ano_modelo: values.ano ?? "",
    cboCombustivel: "1",
    txt_Renavam: values.renavam ?? "",
    txtKM: 1000,
    chkBlindagem: values.blindado === "Sim" ? 1 : 0,
    vlFipe: values.valorFipe ?? "",
    vlWebMotors: values.valorWebMotors ?? "",
    vlAutoWeb: values.valorWebMotors ?? "",
    vlAutoAvaliado: values.avaliacaoLoja ?? "",
    vlAvaliacao: values.avaliacaoLoja ?? "",
    vlSugerido: precoSugerido ?? "",
    vlMedio: values.valorMedio ?? "",
    vlLucro: values.lucroPrevisto ?? "",
    vlLucroP: values.lucroPrevisto ?? "",
    chkItem_1: statusCheck(values.mecanica.status) ?? "",
    chkItem_2: statusCheck(values.eletrica.status) ?? "",
    chkItem_3: statusCheck(values.tapecaria.status) ?? "",
    chkItem_4: statusCheck(values.pneus.status) ?? "",
    chkItem_5: statusCheck(values.funilaria.status) ?? "",
    chkItem_6: statusCheck(values.martelinho.status) ?? "",
    txtItem_1: "teste",
    txtItem_2: "teste",
    txtItem_3: "testes",
    txtItem_4: "teste",
    txtItem_5: "teste",
    txtItem_6: "teste",
    lblValor_1: values.mecanica.custoAproximado ?? "",
    lblValor_2: values.eletrica.custoAproximado ?? "",
    lblValor_3: values.tapecaria.custoAproximado ?? "",
    lblValor_4: values.pneus.custoAproximado ?? "",
    lblValor_5: values.funilaria.custoAproximado ?? "",
    lblValor_6: values.martelinho.custoAproximado ?? "",
    txtObs_1: values.mecanica.observacoes ?? "",
    txtObs_2: values.eletrica.observacoes ?? "",
    txtObs_3: values.tapecaria.observacoes ?? "",
    txtObs_4: values.pneus.observacoes ?? "",
    txtObs_5: values.funilaria.observacoes ?? "",
    txtObs_6: values.martelinho.observacoes ?? "",
    vlImpostos_1: "1000",
    vlImpostos_2: "1000",
    vlImpostos_3: "1000",
    vlImpostos_4: "1000",
    vlImpostos_5: "1000",
  });

  const config = {
    method: "post",
    url: `${ApiBaseUrl}/modulo_veiculos_avaliacao.asp`,
    headers: {
      Funcao: "1",
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

export const consultAvaliations = async (tokenAPI) => {
  const data = stringify({
    Empresa: "1",
  });

  const config = {
    method: "post",
    url: `${ApiBaseUrl}/modulo_veiculos_avaliacao.asp`,
    headers: {
      Funcao: "4",
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

export const deleteAvaliation = async (idAvaliation: string, tokenAPI) => {
  const data = stringify({
    idAvaliacao: idAvaliation,
  });

  const config = {
    method: "post",
    url: `${ApiBaseUrl}/modulo_veiculos_avaliacao.asp`,
    headers: {
      Funcao: "3",
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

export const editAvaliation = async (idAvaliation: string, tokenAPI) => {
  const data = stringify({
    idAvaliacao: idAvaliation,
  });

  const config = {
    method: "post",
    url: `${ApiBaseUrl}/modulo_veiculos_avaliacao.asp`,
    headers: {
      Funcao: "6",
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

export const approveAvaliation = async (idAvaliation: string, tokenAPI) => {
  const data = stringify({
    idAvaliacao: idAvaliation,
  });

  const config = {
    method: "post",
    url: `${ApiBaseUrl}/modulo_veiculos_avaliacao.asp`,
    headers: {
      Funcao: "7",
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
