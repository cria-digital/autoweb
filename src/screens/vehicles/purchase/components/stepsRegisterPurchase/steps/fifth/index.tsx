import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRecoilValue } from "recoil";
import AuthStatus from "../../../../../../../atoms/auth";
import CheckboxComponent from "../../../../../../../components/checkbox";
import Dropdown from "../../../../../../../components/dropdown";
import Loading from "../../../../../../../components/loading";
import NextBackButtons from "../../../../../../../components/nextBackButtons";
import StepsTitle from "../../../../../../../components/stepsTitle";
import { consultMidias } from "../../../../../../../config/general";
import { StepsRegisterAvaliationProps } from "../../../../../registerAvaliation/steps";

const FifthStepRegisterPurchase: React.FC<StepsRegisterAvaliationProps> = (
  props
) => {
  const {
    values,
    handleSubmit,
    cancelRegister,
    errors,
    touched,
    setFieldValue,
  } = props;
  const { tokenApi } = useRecoilValue(AuthStatus);
  const [cnh, setCnh] = useState(false);
  const [cpf, setCpf] = useState(false);
  const [dutBranco, setDutBranco] = useState(false);
  const [laudoDequalc, setLaudoDequalc] = useState(false);
  const [reciboSistema, setReciboSistema] = useState(false);
  const [copiaArquivos, setCopiaArquivos] = useState(false);
  const [documentoCarro, setDocumentoCarro] = useState(false);
  const [documentoQuitacao, setDocumentoQuitacao] = useState(false);
  const [comprovanteEndereco, setComprovanteEndereco] = useState(false);
  const [certificadoBlindagem, setCertificadoBlindagem] = useState(false);
  const [termoResponsabilidade, setTermoResponsabilidade] = useState(false);

  const [midias, setMidias] = useState([]);
  const [loading, setLoading] = useState(false);

  const nextStep = () => {
    if (!values.midia) {
      return;
    } else {
      console.log("VALUES", values);
      handleSubmit(values);
    }
  };

  const getAllMidias = async () => {
    setLoading(true);
    const result = await consultMidias(tokenApi);
    if (result) {
      setMidias(result?.Midia);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllMidias();
  }, []);

  function getMidiaValue() {
    const filter = midias?.filter((item) => item?.idMidia === values.midia);
    return filter[0]?.Midia;
  }

  return (
    <View>
      <View style={{ marginTop: 30, marginBottom: 30 }}>
        <StepsTitle title="Informações da empresa" allRequired />
      </View>

      {loading && (
        <Loading isLoading size={50} style={{ height: 50, marginTop: 100 }} />
      )}
      {!loading && (
        <View>
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

          <Text style={[styles.bigText, { marginVertical: 25 }]}>
            Fontes externas de marketing
          </Text>

          <Dropdown
            required
            title="Mídias"
            value={getMidiaValue()}
            errorMessage={errors.midia}
            touched={touched.midia}
            errors={errors.midia}
            placeholder="Como o cliente ficou sabendo da empresa!"
            content={midias?.map((item) => item?.Midia)}
            onPressMenuItem={(value) => {
              const result = midias?.filter((item) => item?.Midia === value);
              setFieldValue("midia", result[0]?.idMidia);
            }}
          />
          <View style={{ marginTop: 25 }} />

          <NextBackButtons
            firstButtonLabel="Cadastrar compra"
            secondButtonLabel="Cancelar"
            firstButtonOnPress={nextStep}
            secondButtonOnPress={cancelRegister}
          />
        </View>
      )}
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
