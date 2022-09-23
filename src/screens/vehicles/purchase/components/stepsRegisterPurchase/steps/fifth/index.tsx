import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { StepsRegisterAvaliationProps } from "..";
import CheckboxComponent from "../../../../../../../components/checkbox";
import InputComponent from "../../../../../../../components/input";
import InputLayout from "../../../../../../../components/inputLayout";
import NextBackButtons from "../../../../../../../components/nextBackButtons";
import StepsTitle from "../../../../../../../components/stepsTitle";

const FifthStepRegisterPurchase: React.FC<StepsRegisterAvaliationProps> = (
  props
) => {
  const { values, handleSubmit, cancelRegister } = props;
  const [copiaArquivos, setCopiaArquivos] = React.useState(false);
  const [certificadoBlindagem, setCertificadoBlindagem] = React.useState(false);
  const [comprovanteEndereco, setComprovanteEndereco] = React.useState(false);
  const [documentoQuitacao, setDocumentoQuitacao] = React.useState(false);
  const [dutBranco, setDutBranco] = React.useState(false);
  const [termoResponsabilidade, setTermoResponsabilidade] =
    React.useState(false);
  const [cnh, setCnh] = React.useState(false);
  const [cpf, setCpf] = React.useState(false);
  const [documentoCarro, setDocumentoCarro] = React.useState(false);
  const [laudoDequalc, setLaudoDequalc] = React.useState(false);
  const [reciboSistema, setReciboSistema] = React.useState(false);

  const nextStep = () => {
    handleSubmit(values);
  };
  return (
    <View>
      <View style={{ marginTop: 30, marginBottom: 30 }}>
        <StepsTitle title="Informações da empresa" allRequired />
      </View>

      <Text style={styles.bigText}>Recibo de compras</Text>

      <CheckboxComponent
        style={[styles.checkboxStyle, { marginTop: 15 }]}
        hasChecked={copiaArquivos}
        setHasChecked={setCopiaArquivos}
        label="Exibir as cópias de arquivos no recibo de compra"
      />

      <Text style={[styles.bigText, { marginTop: 30 }]}>
        Códia de documentos
      </Text>

      <CheckboxComponent
        style={[styles.checkboxStyle, { marginTop: 15 }]}
        hasChecked={certificadoBlindagem}
        setHasChecked={setCertificadoBlindagem}
        label={"Certificado de blindagem (se houver)"}
      />
      <CheckboxComponent
        style={styles.checkboxStyle}
        hasChecked={comprovanteEndereco}
        setHasChecked={setComprovanteEndereco}
        label={"Comprovante de endereço"}
      />
      <CheckboxComponent
        style={styles.checkboxStyle}
        hasChecked={documentoQuitacao}
        setHasChecked={setDocumentoQuitacao}
        label={"Documento de quitação"}
      />
      <CheckboxComponent
        style={styles.checkboxStyle}
        hasChecked={dutBranco}
        setHasChecked={setDutBranco}
        label={"DUT em branco"}
      />
      <CheckboxComponent
        style={styles.checkboxStyle}
        hasChecked={termoResponsabilidade}
        setHasChecked={setTermoResponsabilidade}
        label={"Termo de responsabilidade"}
      />
      <CheckboxComponent
        style={styles.checkboxStyle}
        hasChecked={cnh}
        setHasChecked={setCnh}
        label={"CNH"}
      />
      <CheckboxComponent
        style={styles.checkboxStyle}
        hasChecked={cpf}
        setHasChecked={setCpf}
        label={"CPF"}
      />
      <CheckboxComponent
        style={styles.checkboxStyle}
        hasChecked={documentoCarro}
        setHasChecked={setDocumentoCarro}
        label={"Documento do carro"}
      />
      <CheckboxComponent
        style={styles.checkboxStyle}
        hasChecked={laudoDequalc}
        setHasChecked={setLaudoDequalc}
        label={"Laudo / Dequalc"}
      />
      <CheckboxComponent
        style={styles.checkboxStyle}
        hasChecked={reciboSistema}
        setHasChecked={setReciboSistema}
        label={"Recibo do sistema"}
      />

      <Text style={[styles.bigText, { marginTop: 30 }]}>
        Observações gerais
      </Text>
      <Text style={{ fontFamily: "Raleway", fontSize: 12, marginTop: 20 }}>
        Caso tenha alguma observação relevante, que necessite ser incluída na
        impressão do recibo, basta preencher o campo abaixo.
      </Text>
      <Text
        style={{ fontFamily: "RalewaySemiBold", fontSize: 12, marginTop: 15 }}
      >
        Lembre-se! É muito importante discriminar tudo que está sendo combinado,
        esta será a sua garantia para eventuais problemas futuros.
      </Text>

      <InputLayout
        title="Observações"
        style={{ marginTop: 25, marginBottom: 25 }}
      >
        <InputComponent
          mode="flat"
          multiline
          numberOfLines={7}
          placeholder={"Digite as observações"}
        />
      </InputLayout>

      <NextBackButtons
        firstButtonLabel="Cadastrar compra"
        secondButtonLabel="Cancelar"
        firstButtonOnPress={nextStep}
        secondButtonOnPress={cancelRegister}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bigText: {
    fontFamily: "RalewaySemiBold",
    fontSize: 16,
    color: "#000",
  },
  checkboxStyle: {
    flexDirection: "row",
    marginTop: 0,
    alignItems: "center",
  },
});

export default FifthStepRegisterPurchase;
