import * as Yup from "yup";

export const initialRegisterAvaliationValues = {
  nomeEmpresa: "",
  marca: "",
  modelo: "",
  versao: "",
  ano: "",
  anoFabricacao: "",
  renavam: "",
  km: "",
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
  valorWebMotors: "",
  valorAutoWeb: "",
  valorMedio: "",
  valorAvaliadoEmpresa: "",
  valorAvaliacao: "",
  valorSugeridoVenda: "",
  lucroPrevisto: "",
};

export const editingInitialRegisterAvaliationValues = (value) => {
  const avaliationValue = value?.Avaliacao;
  const avaliationItems = value?.Itens;
  const checkItem = (check: any) => {
    switch (check) {
      case "False":
        return "Não";
      case "True":
        return "Sim";
    }
  };

  const statusCheck = (status) => {
    switch (status) {
      case "0":
        return "Ruim";
      case "1":
        return "Bom";
      case "2":
        return "Ótimo";
      default:
        return "Bom";
    }
  };
  return {
    nomeEmpresa: avaliationValue?.idEmpresa,
    marca: avaliationValue?.idMarca,
    modelo: avaliationValue?.idModelo,
    versao: avaliationValue?.idVersao,
    ano: avaliationValue?.AnoModelo,
    anoFabricacao: avaliationValue?.AnoFabricacao,
    renavam: avaliationValue?.Renavam,
    km: avaliationValue?.Km,
    placa: avaliationValue?.Placa,
    combustivel: avaliationValue?.idCombustivel,
    tipoVeiculo: avaliationValue?.idVeiculo,
    blindado: checkItem(avaliationValue?.Blindado),

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

    valorFipe: avaliationValue?.ValorFIPE ?? "",
    valorWebMotors: avaliationValue?.ValorWebMotors ?? "",
    valorAutoWeb: avaliationValue?.ValorAutoWeb ?? "",
    valorMedio: "",
    valorAvaliadoEmpresa: avaliationValue?.ValorAvaliadoEmpresa ?? "",
    valorAvaliacao: avaliationValue?.ValorAvaliacao ?? "",
    valorSugeridoVenda: avaliationValue?.ValorSugerido ?? "",
    lucroPrevisto: "",
  };
};

export const formSchemaRegisterAvaliation = Yup.object().shape({
  nomeEmpresa: Yup.string().required("Campo obrigatório"),
  ano: Yup.string().required("Campo obrigatório"),
  anoFabricacao: Yup.string().required("Campo obrigatório"),
  valorFipe: Yup.string().required("Campo obrigatório"),
  valorWebMotors: Yup.string().required("Campo obrigatório"),
  valorAutoWeb: Yup.string().required("Campo obrigatório"),
  valorMedio: Yup.string().required("Campo obrigatório"),
  valorAvaliadoEmpresa: Yup.string().required("Campo obrigatório"),
  valorAvaliacao: Yup.string().required("Campo obrigatório"),
  valorSugeridoVenda: Yup.string().required("Campo obrigatório"),
  lucroPrevisto: Yup.string().required("Campo obrigatório"),
});
