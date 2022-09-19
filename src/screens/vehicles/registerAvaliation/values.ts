import * as Yup from "yup";

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
  renavan: "",
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
