export interface Avaliations {
  idAvaliacao: string;
  Empresa: string;
  NomeEmpresa: string;
  Placa: string;
  AnoFabricacao: string;
  AnoModelo: string;
  ValorAvaliacao: string;
  Avaliador: string;
  DataAvaliacao: string;
  Marca: string;
  Modelo: string;
  Versao: string;
  Km: string;
  Renavam: string;
  Imagem: string;
}

export interface Purchase {
  IdVeiculo: string;
  Modelo: string;
  Marca: string;
  Versao: string;
  AnoModelo: string;
  AnoFabricacao: string;
  Placa: string;
  DataCadastro: string;
  Status: string;
  Avaliador: string;
  ValorCompra: string;
  TipoRecebido: string;
  Imagem: string;
}
