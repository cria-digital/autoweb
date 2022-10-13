import axios from "axios";
import { stringify } from "qs";
import Constants from "expo-constants";

const ApiBaseUrl = Constants.manifest?.extra?.autoWebBaseUrl;

export const registerAvaliation = async (values: any, tokenAPI: any) => {
  const statusCheck = (value: any) => {
    if (value === "Bom") return "0";
    if (value === "Regular") return "1";
    if (value === "Ruim") return "2";
  };
  const data = stringify({
    idUnidade: "1",
    idUsuario: "1",
    idVeiculo: "1",
    txtPlaca: values.placa ?? "",
    cboMarcas: values.marca ?? "1",
    cboModelos: values.modelo ?? "1",
    cboVersao: values.versao ?? "1",
    txt_ano_fabricacao: values.anoFabricacao ?? "",
    txt_ano_modelo: values.ano ?? "",
    cboCombustivel: values.combustivel,
    txt_Renavam: values.renavam ?? "",
    txtKM: values.km ?? "",
    chkBlindagem: values.blindado === "Sim" ? 1 : 0,
    vlFipe: values.valorFipe ?? "",
    vlWebMotors: values.valorWebMotors ?? "",
    vlAutoWeb: values.valorAutoWeb ?? "",
    vlAutoAvaliado: values.valorAvaliadoEmpresa ?? "",
    vlAvaliacao: values.valorAvaliacao ?? "",
    vlSugerido: values.valorSugeridoVenda ?? "",
    vlMedio: values.valorMedio ?? "",
    vlLucro: values.lucroPrevisto ?? "",
    vlLucroP: values.lucroPrevisto ?? "",
    chkItem_1: statusCheck(values.mecanica.status) ?? "1",
    chkItem_2: statusCheck(values.eletrica.status) ?? "1",
    chkItem_3: statusCheck(values.tapecaria.status) ?? "1",
    chkItem_4: statusCheck(values.pneus.status) ?? "1",
    chkItem_5: statusCheck(values.funilaria.status) ?? "1",
    chkItem_6: statusCheck(values.martelinho.status) ?? "1",
    txtItem_1: "teste",
    txtItem_2: "teste",
    txtItem_3: "testes",
    txtItem_4: "teste",
    txtItem_5: "teste",
    txtItem_6: "teste",
    lblValor_1: "100",
    lblValor_2: "100",
    lblValor_3: "100",
    lblValor_4: "100",
    lblValor_5: "100",
    lblValor_6: "100",
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

export const consultAvaliations = async (tokenAPI: any) => {
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

export const deleteAvaliation = async (idAvaliation: string, tokenAPI: any) => {
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

export const editAvaliation = async (idAvaliation: string, tokenAPI: any) => {
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

export const approveAvaliation = async (
  idAvaliation: string,
  tokenAPI: any
) => {
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

export const updateAvaliation = async (
  values: any,
  tokenAPI: any,
  idAvaliation: string
) => {
  const statusCheck = (value: any) => {
    if (value === "Bom") return "1";
    if (value === "Regular") return "2";
    if (value === "Ruim") return "3";
  };
  const lucroPercent =
    (parseFloat(values.valorAvaliadoEmpresa) *
      parseFloat(values.lucroPrevisto)) /
    100;
  const data = stringify({
    idAvaliacao: idAvaliation,
    idUnidade: "1",
    idUsuario: "1",
    idVeiculo: values.tipoVeiculo ?? "",
    txtPlaca: values.placa ?? "",
    cboMarcas: values.marca ?? "1",
    cboModelos: values.modelo ?? "1",
    cboVersao: values.versao ?? "1",
    txt_ano_fabricacao: values.anoFabricacao ?? "",
    txt_ano_modelo: values.ano ?? "",
    cboCombustivel: values.combustivel,
    txt_Renavam: values.renavam ?? "",
    txtKM: values.km ?? "",
    chkBlindagem: values.blindado === "Sim" ? 1 : 0,
    vlFipe: values.valorFipe ?? "",
    vlWebMotors: values.valorWebMotors ?? "",
    vlAutoWeb: values.valorWebMotors ?? "",
    vlAutoAvaliado: values.valorAvaliadoEmpresa ?? "",
    vlAvaliacao: values.valorAvaliacao ?? "",
    vlSugerido: values.valorSugeridoVenda ?? "",
    vlMedio: values.valorMedio ?? "",
    vlLucro: values.lucroPrevisto ?? "",
    vlLucroP: lucroPercent.toString() ?? "",
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
    lblValor_1: "100",
    lblValor_2: "100",
    lblValor_3: "100",
    lblValor_4: "100",
    lblValor_5: "100",
    lblValor_6: "100",
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
      Funcao: "2",
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

export const uploadImageForAvaliation = async (
  tokenAPI: any,
  urlImage: string,
  idAvaliation?: string
) => {
  const data = new FormData();
  data.append("upload_unidade", "1");
  data.append("upload_avaliacao", "");
  data.append("documento", urlImage);

  const config = {
    method: "post",
    url: `${ApiBaseUrl}/modulo_veiculos_avaliacao.asp`,
    headers: {
      Funcao: "8",
      Authorization: `Bearer ${tokenAPI}`,
      "Content-Type": "multipart/form-data",
    },
    data: data,
  };

  try {
    const result = await axios(config);
    if (result.status == 200) {
      return alert("Imagem enviada com sucesso!");
    }
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
