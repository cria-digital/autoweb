import * as Yup from "yup";

export const initialRegisterPurchaseValues = {
  empresa: "1",
  placa: "",
  marca: "",
  modelo: "",
  ano: "",
  anoFabricacao: "",
  versao: "",
  cambio: "",
  numeroPortas: "",
  cor: "",
  combustivel: "",
  renavan: "",
  patio: "",
  tipoRecibo: "",
  tipoVeiculo: "Novo",
  blindado: "Não",
  sucata: "Não",
  leilao: "Não",
  km: "",
  chassi: "",

  comprador: "",
  usuario: "1",

  midia: "",
  valor: "",
  dataCompra: "",
  previsaoPagamento: "",
};

export const initialValuesEditPurchase = (value) => {
  const purchaseValue = value?.Veiculo;
  const checkItem = (check: any) => {
    switch (check) {
      case "False":
        return "Não";
      case "True":
        return "Sim";
    }
  };
  return {
    empresa: "1",
    placa: purchaseValue?.Placa,
    marca: purchaseValue?.IdMarca,
    modelo: purchaseValue?.IdModelo,
    ano: purchaseValue?.AnoModelo,
    anoFabricacao: purchaseValue?.AnoFabricacao,
    versao: purchaseValue?.IdVersao,
    cambio: "",
    numeroPortas: "",
    cor: "",
    combustivel: "",
    renavam: "",
    patio: "",
    tipoRecibo: purchaseValue?.TipoRecibo,
    tipoVeiculo: "",
    blindado: "Não",
    sucata: "Não",
    leilao: "Não",
    km: "",
    chassi: "",

    comprador: "",
    // usuario: "",

    midia: "",
    valor: purchaseValue?.ValorCompra,
    dataCompra: new Date().toLocaleDateString("pt-BR"),
    previsaoPagamento: "",
  };
};

export const formSchemaRegisterPurchase = Yup.object().shape({
  empresa: Yup.string().required("Campo obrigatório"),
  modelo: Yup.string().required("Campo obrigatório"),
  ano: Yup.string().required("Campo obrigatório"),
  anoFabricacao: Yup.string().required("Campo obrigatório"),
  versao: Yup.string().required("Campo obrigatório"),
  renavam: Yup.string().required("Campo obrigatório"),
  patio: Yup.string().required("Campo obrigatório"),
});
