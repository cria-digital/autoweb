import * as Yup from "yup";

export const initialRegisterAddProposal = {
  clienteFornecedor: "",
  nome: "",
  dataNascimento: "",
  sexo: "",
  estadoCivil: "",
  possuiFilhos: "Sim",
  email: "",
  telefone: "",
  ramoAtividade: "",
  rendaMensal: "",
  classificacao: "Cliente",
  cpf: "",
  rg: "",
  cnh: "",
  vencimentoCnh: "",

  //Proprietário Pessoa Jurídica
  cnpj: "",
  ie: "",
  ramoAtividadeJuridica: "",
  classificacaoJuridica: "Cliente",
  possuiFilhosJuridica: "Não",
  nomeRepresentante: "",
  emailRepresentante: "",
  telefoneRepresentante: "",
  contaComercial: "",
  cnhRepresentante: "",
  vencimentoCnhRepresentante: "",

  endereco: "",
  numero: "",
  complemento: "",
  bairro: "",
  cidade: "",
  estado: "",
  observacoes: "",

  vendedor: "",
  midia: "",
  dataVenda: "",
  proposta: "",
  desconto: "",
  total: "",
  observacoesProposta: "",
};

export const formSchemaAddProposal = Yup.object().shape({
  clienteFornecedor: Yup.string().required("Campo obrigatório"),
  vendedor: Yup.string().required("Campo obrigatório"),
  midia: Yup.string().required("Campo obrigatório"),
});
