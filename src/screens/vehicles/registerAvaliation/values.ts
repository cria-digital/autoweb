import * as Yup from "yup";
import { Avaliations } from "../../../../types";

export const initialRegisterAvaliationValues = {
  nomeEmpresa: "",
  filial: "",
  marca: "",
  modelo: "",
  versao: "",
  ano: "",
  anoFabricacao: "",
  cambio: "",
  numeroPartidas: "",
  numeroPortas: "",
  cor: "",
  renavam: "",
  chassi: "",
  placa: "",
  combustivel: "",
  tipoVeiculo: "",
  blindado: "",

  mecanica: {
    status: "Bom",
    custoAproximado: "",
    observacoes: "",
  },
  eletrica: {
    status: "Bom",
    custoAproximado: "",
    observacoes: "",
  },
  tapecaria: {
    status: "Bom",
    custoAproximado: "",
    observacoes: "",
  },
  pneus: {
    status: "Bom",
    custoAproximado: "",
    observacoes: "",
  },
  funilaria: {
    status: "Bom",
    custoAproximado: "",
    observacoes: "",
  },
  martelinho: {
    status: "Bom",
    custoAproximado: "",
    observacoes: "",
  },

  valorFipe: "",
  valorWebMotos: "",
  valorRegiao: "",
  valorMedio: "",
  avaliacaoLoja: "",
  avaliacaoEletronica: "",
  valorSugeridoVenda: "",
  lucroPrevisto: "",
};

export const editingInitialRegisterAvaliationValues = (value) => {
  const avaliationValue = value?.Avaliacao;
  const avaliationItems = value?.Itens;
  const statusCheck = (status) => {
    if (status === "0") return "Bom";
    if (status === "1") return "Regular";
    if (status === "2") return "Ruim";
  };
  return {
    nomeEmpresa: avaliationValue?.idEmpresa,
    filial: "",
    marca: avaliationValue?.idMarca,
    modelo: avaliationValue?.idModelo,
    versao: avaliationValue?.idVersao,
    ano: avaliationValue?.AnoModelo,
    anoFabricacao: avaliationValue?.AnoFabricacao,
    cambio: "",
    numeroPartidas: "",
    numeroPortas: "",
    cor: "",
    renavam: avaliationValue?.Renavam,
    chassi: "",
    placa: avaliationValue?.Placa,
    combustivel: avaliationValue?.idCombustivel,
    tipoVeiculo: avaliationValue?.idVeiculo,
    blindado: avaliationValue?.Blindado,

    mecanica: {
      status: statusCheck(avaliationItems?.vlItem) ?? "Bom",
      custoAproximado: "",
      observacoes: "",
    },
    eletrica: {
      status: statusCheck(avaliationItems?.vlItem) ?? "Bom",
      custoAproximado: "",
      observacoes: "",
    },
    tapecaria: {
      status: statusCheck(avaliationItems?.vlItem) ?? "Bom",
      custoAproximado: "",
      observacoes: "",
    },
    pneus: {
      status: statusCheck(avaliationItems?.vlItem) ?? "Bom",
      custoAproximado: "",
      observacoes: "",
    },
    funilaria: {
      status: statusCheck(avaliationItems?.vlItem) ?? "Bom",
      custoAproximado: "",
      observacoes: "",
    },
    martelinho: {
      status: statusCheck(avaliationItems?.vlItem) ?? "Bom",
      custoAproximado: "",
      observacoes: "",
    },

    valorFipe: avaliationValue?.ValorFipe ?? "",
    valorWebMotos: avaliationValue?.ValorWebMotos ?? "",
    valorRegiao: "",
    valorMedio: "",
    avaliacaoLoja: avaliationValue?.ValorAvaliadoEmpresa ?? "",
    avaliacaoEletronica: avaliationValue?.ValorAvaliacao ?? "",
    valorSugeridoVenda: avaliationValue?.ValorSugerido ?? "",
    lucroPrevisto: "",
  };
};

export const formSchemaRegisterAvaliation = Yup.object().shape({
  nomeEmpresa: Yup.string().required("Campo obrigatório"),
  filial: Yup.string().required("Campo obrigatório"),
  ano: Yup.string().required("Campo obrigatório"),
  anoFabricacao: Yup.string().required("Campo obrigatório"),
  mecanica: Yup.object().shape({
    custoAproximado: Yup.string().required("Campo obrigatório"),
  }),
  eletrica: Yup.object().shape({
    custoAproximado: Yup.string().required("Campo obrigatório"),
  }),
  tapecaria: Yup.object().shape({
    custoAproximado: Yup.string().required("Campo obrigatório"),
  }),
  pneus: Yup.object().shape({
    custoAproximado: Yup.string().required("Campo obrigatório"),
  }),
  funilaria: Yup.object().shape({
    custoAproximado: Yup.string().required("Campo obrigatório"),
  }),
  martelinho: Yup.object().shape({
    custoAproximado: Yup.string().required("Campo obrigatório"),
  }),
  valorFipe: Yup.string().required("Campo obrigatório"),
  valorWebMotors: Yup.string().required("Campo obrigatório"),
  valorRegiao: Yup.string().required("Campo obrigatório"),
  valorMedio: Yup.string().required("Campo obrigatório"),
  avaliacaoLoja: Yup.string().required("Campo obrigatório"),
  avaliacaoEletronica: Yup.string().required("Campo obrigatório"),
  valorSugeridoVenda: Yup.string().required("Campo obrigatório"),
  lucroPrevisto: Yup.string().required("Campo obrigatório"),
});
