import React from "react";
import { View } from "react-native";
import DoubleDropdown from "../../../../../components/doubleDropdown";
import Dropdown from "../../../../../components/dropdown";
import InputComponent from "../../../../../components/input";
import InputLayout from "../../../../../components/inputLayout";
import RadioOptions from "../../../../../components/radioOptions";

interface ProprietarioPessoaFisicaProps {
  values: any;
  touched: any;
  errors: any;
  setFieldValue: any;
  handleSubmit: any;
}

const ProprietarioPessoaFisica: React.FC<ProprietarioPessoaFisicaProps> = (
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

      <InputLayout title="Nome completo" style={{ marginTop: 25 }}>
        <InputComponent
          mode="flat"
          placeholder="Digite seu nome completo"
          value={values.nome}
          onChangeText={(text) => setFieldValue("nome", text)}
        />
      </InputLayout>
      <InputLayout title="Data de nascimento" style={{ marginTop: 25 }}>
        <InputComponent
          mode="flat"
          placeholder="Ex: DD/MM/AAAA"
          value={values.dataNascimento}
          onChangeText={(text) => setFieldValue("dataNascimento", text)}
        />
      </InputLayout>

      <View style={{ marginTop: 25 }} />
      <Dropdown
        content={["masculino", "feminino"]}
        title="Sexo"
        onPressMenuItem={(item) => setFieldValue("sexo", item)}
        value={values.sexo}
        placeholder="Selecione seu sexo"
      />

      <View style={{ marginTop: 25 }} />
      <Dropdown
        content={["casado", "solteiro", "divorciado", "viuvo"]}
        title="Estado civil"
        onPressMenuItem={(item) => setFieldValue("estadoCivil", item)}
        value={values.estadoCivil}
        placeholder="Selecione seu estado civil"
      />

      <RadioOptions
        firstOption="Sim"
        secondOption="Não"
        actualOption={values.possuiFilhos}
        onPressFirstOption={() => setFieldValue("possuiFilhos", "Sim")}
        onPressSecondOption={() => setFieldValue("possuiFilhos", "Não")}
        label="Possui filhos?"
      />

      <InputLayout title="E-mail" style={{ marginTop: 25 }}>
        <InputComponent
          mode="flat"
          placeholder="Digite seu e-mail"
          value={values.email}
          onChangeText={(text) => setFieldValue("email", text)}
        />
      </InputLayout>

      <InputLayout title="Telefone" style={{ marginTop: 25 }}>
        <InputComponent
          mode="flat"
          placeholder="Digite seu telefone"
          value={values.telefone}
          onChangeText={(text) => setFieldValue("telefone", text)}
        />
      </InputLayout>

      <View style={{ marginTop: 25 }} />
      <Dropdown
        content={["ramo 1", "ramo 2", "ramo 3"]}
        title="Ramo da atividade"
        onPressMenuItem={(item) => setFieldValue("ramoAtividade", item)}
        value={values.ramoAtividade}
        placeholder="Selecione o ramo da atividade"
      />

      <InputLayout title="Renda mensal (R$)" style={{ marginTop: 25 }}>
        <InputComponent
          mode="flat"
          placeholder="Digite sua renda mensal"
          value={values.rendaMensal}
          onChangeText={(text) => setFieldValue("rendaMensal", text)}
        />
      </InputLayout>

      <RadioOptions
        firstOption="Cliente"
        secondOption="Fornecedor"
        thirdOption="Ambos"
        label="Classificação"
        actualOption={values.classificacao}
        onPressFirstOption={(text) => setFieldValue("classificacao", text)}
        onPressSecondOption={(text) => setFieldValue("classificacao", text)}
        onPressThirdOption={(text) => setFieldValue("classificacao", text)}
      />

      <InputLayout title="CPF" style={{ marginTop: 25 }}>
        <InputComponent
          mode="flat"
          placeholder="Digite o seu CPF"
          value={values.cpf}
          onChangeText={(text) => setFieldValue("cpf", text)}
        />
      </InputLayout>

      <InputLayout title="RG" style={{ marginTop: 25 }}>
        <InputComponent
          mode="flat"
          placeholder="Digite seu RG"
          value={values.rg}
          onChangeText={(text) => setFieldValue("rg", text)}
        />
      </InputLayout>

      <InputLayout title="CNH" style={{ marginTop: 25 }}>
        <InputComponent
          mode="flat"
          placeholder="Digite o número da CNH"
          value={values.cnh}
          onChangeText={(text) => setFieldValue("cnh", text)}
        />
      </InputLayout>

      <InputLayout title="Vencimento da CNH" style={{ marginTop: 25 }}>
        <InputComponent
          mode="flat"
          placeholder="Digite a data do vencimento da CNH"
          value={values.vencimentoCnh}
          onChangeText={(text) => setFieldValue("vencimentoCnh", text)}
        />
      </InputLayout>

      <InputLayout title="Endereço" style={{ marginTop: 25 }}>
        <InputComponent
          mode="flat"
          placeholder="Digite o nome da rua/avenida"
          value={values.endereco}
          onChangeText={(text) => setFieldValue("endereco", text)}
        />
      </InputLayout>

      <View style={{ marginTop: 25 }} />
      <DoubleDropdown
        leftPlaceholder="Digite o número"
        rightPlaceholder="Digite o complemento"
        leftValue={values.numero}
        rightValue={values.complemento}
        onPressLeftMenuItem={(text) => setFieldValue("numero", text)}
        onPressRightMenuItem={(text) => setFieldValue("complemento", text)}
        leftTitle="Número"
        rightTitle="Complemento"
        leftHasInput
        rightHasInput
      />

      <InputLayout title="Bairro" style={{ marginTop: 25 }}>
        <InputComponent
          mode="flat"
          placeholder="Digite o bairro"
          value={values.bairro}
          onChangeText={(text) => setFieldValue("bairro", text)}
        />
      </InputLayout>

      <InputLayout title="Cidade" style={{ marginTop: 25 }}>
        <InputComponent
          mode="flat"
          placeholder="Digite o nome da cidade"
          value={values.cidade}
          onChangeText={(text) => setFieldValue("cidade", text)}
        />
      </InputLayout>

      <InputLayout title="Estado" style={{ marginTop: 25 }}>
        <InputComponent
          mode="flat"
          placeholder="Digite o nome do estado"
          value={values.estado}
          onChangeText={(text) => setFieldValue("estado", text)}
        />
      </InputLayout>

      <InputLayout title="Observações" style={{ marginTop: 25 }}>
        <InputComponent
          mode="flat"
          multiline
          numberOfLines={7}
          placeholder="Digite as observações"
          value={values.observacoes}
          onChangeText={(text) => setFieldValue("observacoes", text)}
        />
      </InputLayout>
    </View>
  );
};

export default ProprietarioPessoaFisica;
