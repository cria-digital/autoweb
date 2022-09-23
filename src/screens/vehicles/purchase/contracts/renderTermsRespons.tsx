import React from "react";
import { View, Text } from "react-native";
import LineOne from "../../../../components/lineOne";
import RenderDoubleTextColumns from "../../viewAvaliation/renderDoubleTextColumns";
import styles from "./styles";

interface RenderTermsResponsProps {}

const RenderTermsRespons: React.FC<RenderTermsResponsProps> = (props) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.normalText, { marginTop: 24 }]}>
        {`CPF/CNPJ: 52.934.916/0001-12 (11) 2091-8269 - www.autoweb.com.br`}
      </Text>

      <Text style={[styles.textTitle, { marginTop: 32, marginBottom: 24 }]}>
        Contrato de compra
      </Text>

      <Text style={[styles.normalText, { marginBottom: 32 }]}>
        {`
EU, ADM,
RG n. IS.ENT.O, CPF/MF n. 58.194.337/0001-67,
Endereco R. SEUL, 56,
Bairro VILA CARRAO, Municipio SAO PAULO, Estado SP,
Cep 03441-040, Telefone : (11)2091-8269, Telefone Cel : ().

1 - Pelo presente Instrumento Particular de Termo de Responsabilidade e na melhor forma de direito, declaro ter vendido o veículo automotor abaixo identificado, de minha propriedade, livre e desembaraçado de quaisquer ônus, dúvidas, litígios e impostos de quaisquer natureza, a VISUAL COM DE VEICULOS LTDA inscrita no CNPJ (MF) sob nº. 52.934.916/0001-12 e IE 110.965.747.110.
2 - Declaro estar ciente das minhas responsabilidades quanto ao veículo ora transacionado, no que tange à questão civil, trabalhista, tributária, criminal e especialmente, quanto aos pontos na Carteira Nacional de Habilitação -CNH que deverão ser incluídos em meu prontuário junto ao DETRAN alusivos às multas de trânsito, que eventualmente estiverem gravando o automóvel até esta data, servindo o presente como indicação do condutor do veículo e autorização para tal finalida-de.
3 - Comprometo-me ainda, pagar as multas de trânsito, eventualmente existente até a presente data, bem como das mul-tas cometidas anteriormente que por ventura, ainda não constam no sistema do DETRAN, as quais após cientificado formalmente, reconheço ser de minha inteira responsabilidade.
4 - A configuração formal do ato de ciência operar-se-á mediante o envio de mensagem informativa pelo comprador, via e-mail, correio (AR) ou telegrama, limitando o prazo de 5 ( cinco dias ) a contar de seu recebimento, para a quitação dos valores apurados.
5 - No caso em que os valores previamente apurados não sejam quitados no prazo mencionado, autorizo a emissão de boleto bancário, com vencimento à vista, sendo que na falta de pagamento, o mesmo será levado a protesto e fica ex-pressamente convencionado que, se a compradora tiver que promover cobrança ou interpor qualquer medida judicial, ao seu valor será acrescido juros moratórios legais, multa penal de 2 % (dois por cento) e correção monetária, sujeitando-se, ainda, o vendedor, às custas e despesas de ordem processual, mais a verba honorária à base de 20% (vinte por cento) sobre o valor total da condenação.
6 - No caso de serem as multas quitadas pela compradora, evitando, assim, o perecimento do direito, ficará a mesma SUB-ROGADA nestes créditos.
7- Me responsabilizo pela veracidade do KM ______________________ (....................................................................................
..........................................................) informado no carro até a presente data.
8 - Destarte, no caso de ser impugnada judicialmente por terceiros, a validade do respectivo CERTIFICADO DE PRO-PRIEDADE ou levada a efeito pela Polícia e/ou Justiça a APRESENTAÇÃO DO VEÍCULO com base em tais impugna-ções, comprometendo-me de forma irrevogável e independentemente de qualquer medida judicial por parte do compra-dor, a devolver em moeda corrente o valor integral da venda, acrescido de juros e correção monetária, calculada a partir desta data, inclusive respondendo por eventuais processos de busca e apreensão ou qualquer outro feito decorrente de alienações pretéritas, havidas mediante fraude junto a instituições financeiras privadas, em especial, constatando-se a qualquer tempo, que o veiculo fora objeto de recuperação de sinistro, indenizado pela Cia. seguradora, fica automatica-mente rescindido o presente contrato.`}
      </Text>

      <Text style={[styles.title, { marginBottom: 10 }]}>
        Características do veículo
      </Text>

      <RenderDoubleTextColumns
        leftTitle="Marca"
        leftValue="Volkswagen"
        rightTitle="Cor"
        rightValue="Azul"
      />
      <RenderDoubleTextColumns
        leftTitle="Modelo"
        leftValue="Lorem ipsum"
        rightTitle="Chassi"
        rightValue="123456"
      />
      <RenderDoubleTextColumns
        leftTitle="Versão"
        leftValue="Lorem ipsum"
        rightTitle="Renavan"
        rightValue="9876543"
      />
      <RenderDoubleTextColumns
        leftTitle="Ano/Modelo"
        leftValue="2021/2022"
        rightTitle="Combustível"
        rightValue="Gasolina"
      />
      <RenderDoubleTextColumns
        leftTitle="Placa"
        leftValue="abc5d456"
        rightTitle="Portas"
        rightValue="4"
      />

      <Text
        style={[styles.normalText, { alignSelf: "flex-end", marginTop: 32 }]}
      >
        O veículo foi entregue em: ___/___/_____ às _______
      </Text>

      <LineOne style={[styles.line]} />
      <Text style={[styles.normalText, { alignSelf: "center", marginTop: 6 }]}>
        Proprietário Lorem ipsum da Silva
      </Text>
      <Text
        style={[
          styles.normalText,
          { alignSelf: "center", marginTop: 6, marginBottom: 70 },
        ]}
      >
        CNPJ: 00.000.000/0000-00
      </Text>
    </View>
  );
};

export default RenderTermsRespons;
