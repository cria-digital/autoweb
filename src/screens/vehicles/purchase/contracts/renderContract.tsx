import styles from "./styles";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import RenderDoubleTextColumns from "../../viewAvaliation/renderDoubleTextColumns";
import { IconButton } from "react-native-paper";
import COLORS from "../../../../constants/colors";
import LessIcon from "../../../../components/less";
import EqualIcon from "../../../../components/equal";
import ValuesPanel from "../../../../components/valuesPanel";
import LineOne from "../../../../components/lineOne";

const RenderContract = () => {
  const IconCheck = () => (
    <IconButton
      icon="check"
      color={"white"}
      size={10}
      style={{ margin: 0, backgroundColor: COLORS.green }}
    />
  );
  return (
    <View style={styles.componentContainer}>
      <Text style={styles.normalText}>{`CPF/CPNJ: 52-123.123/0001-12
AL BARAO DE MILEIRA. 944
CAMPOS ELISEOS - SAO PAULO - SP
CEP. 01234567
TELEFONE: (11)2091-8269
www.autoweb.com.br`}</Text>
      <Text style={[styles.textTitle, { marginTop: 32, marginBottom: 24 }]}>
        Contrato de compra
      </Text>

      <Text style={[styles.title, { marginBottom: 10 }]}>
        Informações do vendedor
      </Text>

      <RenderDoubleTextColumns
        leftTitle="Nome"
        leftValue="Autoweb"
        rightTitle="CEP"
        rightValue="98765-987"
      />

      <RenderDoubleTextColumns
        leftTitle="CPF / CNPJ"
        leftValue="58.000.000/0001-00"
        rightTitle="Endereço"
        rightValue="Lorem ipsum dolor"
      />

      <RenderDoubleTextColumns
        leftTitle="I.E - Inscrição Estadual"
        leftValue="Isento"
        rightTitle="Cidade"
        rightValue="São Paulo"
      />

      <RenderDoubleTextColumns
        leftTitle="E-mail"
        leftValue="nome@gmail.com"
        rightTitle="Estado"
        rightValue="São Paulo"
      />

      <RenderDoubleTextColumns
        leftTitle="Contato"
        leftValue="11 99999-9999"
        rightTitle="Bairro"
        rightValue="Lorem ipsum"
      />

      <RenderDoubleTextColumns leftTitle="CNH" leftValue="123456789" />
      <Text style={[styles.title, { marginVertical: 10 }]}>
        Certificado em nome de
      </Text>

      <RenderDoubleTextColumns
        leftTitle="Nome"
        leftValue="Autoweb"
        rightTitle="CEP"
        rightValue="98765-987"
      />

      <RenderDoubleTextColumns
        leftTitle="CPF / CNPJ"
        leftValue="58.000.000/0001-00"
        rightTitle="Endereço"
        rightValue="Lorem ipsum dolor"
      />

      <RenderDoubleTextColumns
        leftTitle="I.E - Inscrição Estadual"
        leftValue="Isento"
        rightTitle="Cidade"
        rightValue="São Paulo"
      />

      <RenderDoubleTextColumns
        leftTitle="E-mail"
        leftValue="nome@gmail.com"
        rightTitle="Estado"
        rightValue="São Paulo"
      />

      <RenderDoubleTextColumns
        leftTitle="Contato"
        leftValue="11 99999-9999"
        rightTitle="Bairro"
        rightValue="Lorem ipsum"
      />

      <RenderDoubleTextColumns leftTitle="CNH" leftValue="123456789" />

      <Text style={[styles.title, { marginVertical: 10 }]}>
        Características do veículo
      </Text>
      <RenderDoubleTextColumns
        leftTitle="Marca"
        leftValue="Lorem ipsum"
        rightTitle="Cor"
        rightValue="Vermelho"
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
        leftValue="abc-1234"
        rightTitle="Portas"
        rightValue="4"
      />

      <Text style={[styles.title, { marginVertical: 10 }]}>
        Cópias de documentos
      </Text>

      <View style={styles.checkedIconContainer}>
        <IconCheck />
        <Text style={[styles.normalText, { marginLeft: 10 }]}>
          Comprovante de endereço
        </Text>
      </View>
      <View style={styles.checkedIconContainer}>
        <IconCheck />
        <Text style={[styles.normalText, { marginLeft: 10 }]}>CNH</Text>
      </View>
      <View style={styles.checkedIconContainer}>
        <IconCheck />
        <Text style={[styles.normalText, { marginLeft: 10 }]}>CPF</Text>
      </View>

      <Text style={styles.title}>Condição de pagamento</Text>

      <View style={[styles.checkedIconContainer, { marginVertical: 24 }]}>
        <View style={styles.grayBack}>
          <Text style={styles.textTitleValue}>Valor de compra</Text>
          <View style={styles.endFlex}>
            <Text style={styles.textValue}>R$ 100.000,00</Text>
          </View>
        </View>
        <View style={{ marginHorizontal: 2 }}>
          <LessIcon />
        </View>
        <View style={styles.grayBack}>
          <Text style={styles.textTitleValue}>Débitos</Text>
          <View style={styles.endFlex}>
            <Text style={styles.textValue}>R$ 50.000,00</Text>
          </View>
        </View>
        <View style={{ marginHorizontal: 2 }}>
          <EqualIcon />
        </View>
        <View style={styles.blackBack}>
          <Text style={styles.textTitleValue}>Valor a ser pago</Text>
          <View style={styles.endFlex}>
            <Text style={styles.textValue}>R$ 50.000,00</Text>
          </View>
        </View>
      </View>

      <ValuesPanel />
      <ValuesPanel />

      <Text style={styles.normalText}>
        O presente termo isenta o comprador (VISUAL COM DE VEICULOS LTDA), das
        responsabilidades e obrigações inerentes a infrações de trânsito e
        eventuais IMPOSTOS E/OU TAXAS (IPVA/SEGURO OBRIGATÓRIO/ LICENCIAMENTO/
        VISTORIA CONTROLAR) que ocorrerem até esta data, já o vendedor (CLIENTE)
        se responsabiliza por infrações de trânsito e eventuais IMPOSTOS E/OU
        TAXAS (IPVA/SEGURO OBRIGATÓRIO/ LICENCIAMENTO/ VISTORIA CONTROLAR) que
        ocorrerem até esta data. E por estar de pleno acordo com o aqui
        descrito, o vendedor (CLIENTE) assina o presente.
      </Text>

      <Text
        style={[styles.normalText, { marginTop: 24, alignSelf: "flex-end" }]}
      >
        Entrada do veículo na loja ___/___/___ as _____
      </Text>

      <Text
        style={[styles.normalText, { marginTop: 16, alignSelf: "flex-end" }]}
      >
        SAO PAULO, XX de Janeiro de 2020
      </Text>

      <LineOne style={styles.line} />
      <Text style={[styles.normalText, { textAlign: "center", marginTop: 8 }]}>
        Empresa: AUTOWEB
      </Text>

      <LineOne style={styles.line} />
      <Text style={[styles.normalText, { textAlign: "center", marginTop: 8 }]}>
        Testemunha
      </Text>

      <Text style={[styles.normalText, { marginTop: 16 }]}>Nome:</Text>
      <Text style={[styles.normalText, { marginTop: 16 }]}>RG:</Text>
      <Text style={[styles.normalText, { marginTop: 16 }]}>CPF:</Text>

      <LineOne style={styles.line} />
      <Text style={[styles.normalText, { textAlign: "center", marginTop: 8 }]}>
        Cliente: Loren Ipsum da Silva
      </Text>
      <Text style={[styles.normalText, { textAlign: "center", marginTop: 8 }]}>
        CNPJ: 12.345.678/0001-90
      </Text>

      <LineOne style={styles.line} />
      <Text style={[styles.normalText, { textAlign: "center", marginTop: 8 }]}>
        Testemunha
      </Text>

      <Text style={[styles.normalText, { marginTop: 16 }]}>Nome:</Text>
      <Text style={[styles.normalText, { marginTop: 16 }]}>RG:</Text>
      <Text style={[styles.normalText, { marginTop: 16, marginBottom: 70 }]}>
        CPF:
      </Text>
    </View>
  );
};

export default RenderContract;
