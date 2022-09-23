import React from "react";
import { View } from "react-native";
import DoubleDropdown from "../../../../../components/doubleDropdown";
import Dropdown from "../../../../../components/dropdown";
import InputComponent from "../../../../../components/input";
import InputLayout from "../../../../../components/inputLayout";
import RadioOptions from "../../../../../components/radioOptions";

interface ProprietarioPessoaJuridicaProps {
  values: any;
  touched: any;
  errors: any;
  setFieldValue: any;
  handleSubmit: any;
}

const ProprietarioPessoaJuridica: React.FC<ProprietarioPessoaJuridicaProps> = (
  props
) => {
  const { values, touched, errors, setFieldValue, handleSubmit } = props;
  return (
    <View>
      <InputLayout required title="Cliente" style={{ marginTop: 25 }}>
        <InputComponent
          mode="flat"
          placeholder="Nome do cliente"
          value={values.clienteFornecedor}
          errors={errors.clienteFornecedor}
          touched={touched.clienteFornecedor}
          errorMessage="Cliente ou fornecedor é obrigatório"
          onChangeText={(text) => setFieldValue("clienteFornecedor", text)}
        />
      </InputLayout>

      <InputLayout title="CNPJ" style={{ marginTop: 25 }}>
        <InputComponent
          mode="flat"
          placeholder="Digite o CNPJ"
          value={values.cnpj}
          onChangeText={(text) => setFieldValue("cnpj", text)}
        />
      </InputLayout>
      <InputLayout title="IE - Inscrição estadual" style={{ marginTop: 25 }}>
        <InputComponent
          mode="flat"
          placeholder="Digite a inscrição estadual"
          value={values.ie}
          onChangeText={(text) => setFieldValue("ie", text)}
        />
      </InputLayout>

      <View style={{ marginTop: 25 }} />
      <Dropdown
        content={["ramo 1", "ramo 2"]}
        title="Ramo da atividade"
        onPressMenuItem={(item) => setFieldValue("ramoAtividadeJuridica", item)}
        value={values.ramoAtividadeJuridica}
        placeholder="Selecione o ramo da atividade"
      />

      <RadioOptions
        firstOption="Cliente"
        secondOption="Fornecedor"
        actualOption={values.classificacaoJuridica}
        onPressFirstOption={() => setFieldValue("classificacaoJuridica", "Sim")}
        onPressSecondOption={() =>
          setFieldValue("classificacaoJuridica", "Não")
        }
        label="Classificação"
      />
      <RadioOptions
        firstOption="Sim"
        secondOption="Não"
        actualOption={values.possuiFilhosJuridica}
        onPressFirstOption={() => setFieldValue("possuiFilhosJuridica", "Sim")}
        onPressSecondOption={() => setFieldValue("possuiFilhosJuridica", "Não")}
        label="Possui filhos"
      />

      <InputLayout title="Nome" style={{ marginTop: 25 }}>
        <InputComponent
          mode="flat"
          placeholder="Digite o nome"
          value={values.nomeRepresentante}
          onChangeText={(text) => setFieldValue("nomeRepresentante", text)}
        />
      </InputLayout>

      <InputLayout title="E-mail" style={{ marginTop: 25 }}>
        <InputComponent
          mode="flat"
          placeholder="Digite o e-mail"
          value={values.emailRepresentante}
          onChangeText={(text) => setFieldValue("emailRepresentante", text)}
        />
      </InputLayout>

      <InputLayout title="Telefone" style={{ marginTop: 25 }}>
        <InputComponent
          mode="flat"
          placeholder="Digite seu telefone"
          value={values.telefoneRepresentante}
          onChangeText={(text) => setFieldValue("telefoneRepresentante", text)}
        />
      </InputLayout>

      <InputLayout title="Conta comercial" style={{ marginTop: 25 }}>
        <InputComponent
          mode="flat"
          placeholder="Digite sua conta comercial"
          value={values.contaComercial}
          onChangeText={(text) => setFieldValue("contaComercial", text)}
        />
      </InputLayout>

      <InputLayout title="CNH" style={{ marginTop: 25 }}>
        <InputComponent
          mode="flat"
          placeholder="Digite o número da sua CNH"
          value={values.cnhRepresentante}
          onChangeText={(text) => setFieldValue("cnhRepresentante", text)}
        />
      </InputLayout>

      <InputLayout title="Vencimento da CNH" style={{ marginTop: 25 }}>
        <InputComponent
          mode="flat"
          placeholder="Digite a data do vencimento da CNH"
          value={values.vencimentoCnhRepresentante}
          onChangeText={(text) =>
            setFieldValue("vencimentoCnhRepresentante", text)
          }
        />
      </InputLayout>

      <InputLayout title="Endereço" style={{ marginTop: 25 }}>
        <InputComponent
          mode="flat"
          placeholder="Digite o nome da rua/avenida"
          value={values.enderecoRepresentante}
          onChangeText={(text) => setFieldValue("enderecoRepresentante", text)}
        />
      </InputLayout>

      <View style={{ marginTop: 25 }} />
      <DoubleDropdown
        leftPlaceholder="Digite o número"
        rightPlaceholder="Digite o complemento"
        leftValue={values.numeroRepresentante}
        rightValue={values.complementoRepresentante}
        onPressLeftMenuItem={(text) =>
          setFieldValue("numeroRepresentante", text)
        }
        onPressRightMenuItem={(text) =>
          setFieldValue("complementoRepresentante", text)
        }
        leftTitle="Número"
        rightTitle="Complemento"
        leftHasInput
        rightHasInput
      />

      <InputLayout title="Bairro" style={{ marginTop: 25 }}>
        <InputComponent
          mode="flat"
          placeholder="Digite o bairro"
          value={values.bairroRepresentante}
          onChangeText={(text) => setFieldValue("bairroRepresentante", text)}
        />
      </InputLayout>

      <InputLayout title="Cidade" style={{ marginTop: 25 }}>
        <InputComponent
          mode="flat"
          placeholder="Digite o nome da cidade"
          value={values.cidadeRepresentante}
          onChangeText={(text) => setFieldValue("cidadeRepresentante", text)}
        />
      </InputLayout>

      <InputLayout title="Estado" style={{ marginTop: 25 }}>
        <InputComponent
          mode="flat"
          placeholder="Digite o nome do estado"
          value={values.estadoRepresentante}
          onChangeText={(text) => setFieldValue("estadoRepresentante", text)}
        />
      </InputLayout>

      <InputLayout title="Observações" style={{ marginTop: 25 }}>
        <InputComponent
          mode="flat"
          multiline
          numberOfLines={7}
          placeholder="Digite as observações"
          value={values.observacoesRepresentante}
          onChangeText={(text) =>
            setFieldValue("observacoesRepresentante", text)
          }
        />
      </InputLayout>
    </View>
  );
};

export default ProprietarioPessoaJuridica;
