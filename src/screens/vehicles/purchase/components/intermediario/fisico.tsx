import React from "react";
import { View } from "react-native";
import DoubleDropdown from "../../../../../components/doubleDropdown";
import Dropdown from "../../../../../components/dropdown";
import InputComponent from "../../../../../components/input";
import InputLayout from "../../../../../components/inputLayout";
import RadioOptions from "../../../../../components/radioOptions";

interface IntermediarioPessoaFisicaProps {
  values: any;
  touched: any;
  errors: any;
  setFieldValue: any;
  handleSubmit: any;
}

const IntermediarioPessoaFisica: React.FC<IntermediarioPessoaFisicaProps> = (
  props
) => {
  const { values, touched, errors, setFieldValue, handleSubmit } = props;
  return (
    <View>
      <InputLayout required title="Cliente" style={{ marginTop: 25 }}>
        <InputComponent
          mode="flat"
          placeholder="Nome do cliente"
          value={values.clienteFornecedorIntermediario}
          errors={errors.clienteFornecedorIntermediario}
          touched={touched.clienteFornecedorIntermediario}
          errorMessage="Cliente ou fornecedor é obrigatório"
          onChangeText={(text) =>
            setFieldValue("clienteFornecedorIntermediario", text)
          }
        />
      </InputLayout>

      <InputLayout title="Nome completo" style={{ marginTop: 25 }}>
        <InputComponent
          mode="flat"
          placeholder="Digite seu nome completo"
          value={values.nomeIntermediario}
          onChangeText={(text) => setFieldValue("nomeIntermediario", text)}
        />
      </InputLayout>
      <InputLayout title="Data de nascimento" style={{ marginTop: 25 }}>
        <InputComponent
          mode="flat"
          placeholder="Ex: DD/MM/AAAA"
          value={values.dataNascimentoIntermediario}
          onChangeText={(text) =>
            setFieldValue("dataNascimentoIntermediario", text)
          }
        />
      </InputLayout>

      <View style={{ marginTop: 25 }} />
      <Dropdown
        content={["masculino", "feminino"]}
        title="Sexo"
        onPressMenuItem={(item) => setFieldValue("sexoIntermediario", item)}
        value={values.sexoIntermediario}
        placeholder="Selecione seu sexo"
      />

      <View style={{ marginTop: 25 }} />
      <Dropdown
        content={["casado", "solteiro", "divorciado", "viuvo"]}
        title="Estado civil"
        onPressMenuItem={(item) =>
          setFieldValue("estadoCivilIntermediario", item)
        }
        value={values.estadoCivilIntermediario}
        placeholder="Selecione seu estado civil"
      />

      <RadioOptions
        firstOption="Sim"
        secondOption="Não"
        actualOption={values.possuiFilhosIntermediario}
        onPressFirstOption={() =>
          setFieldValue("possuiFilhosIntermediario", "Sim")
        }
        onPressSecondOption={() =>
          setFieldValue("possuiFilhosIntermediario", "Não")
        }
        label="Possui filhos?"
      />

      <InputLayout title="E-mail" style={{ marginTop: 25 }}>
        <InputComponent
          mode="flat"
          placeholder="Digite seu e-mail"
          value={values.emailIntermediario}
          onChangeText={(text) => setFieldValue("emailIntermediario", text)}
        />
      </InputLayout>

      <InputLayout title="Telefone" style={{ marginTop: 25 }}>
        <InputComponent
          mode="flat"
          placeholder="Digite seu telefone"
          value={values.telefoneIntermediario}
          onChangeText={(text) => setFieldValue("telefoneIntermediario", text)}
        />
      </InputLayout>

      <View style={{ marginTop: 25 }} />
      <Dropdown
        content={["ramo 1", "ramo 2", "ramo 3"]}
        title="Ramo da atividade"
        onPressMenuItem={(item) =>
          setFieldValue("ramoAtividadeIntermediario", item)
        }
        value={values.ramoAtividadeIntermediario}
        placeholder="Selecione o ramo da atividade"
      />

      <InputLayout title="Renda mensal (R$)" style={{ marginTop: 25 }}>
        <InputComponent
          mode="flat"
          placeholder="Digite sua renda mensal"
          value={values.rendaMensalIntermediario}
          onChangeText={(text) =>
            setFieldValue("rendaMensalIntermediario", text)
          }
        />
      </InputLayout>

      <RadioOptions
        firstOption="Cliente"
        secondOption="Fornecedor"
        thirdOption="Ambos"
        label="Classificação"
        actualOption={values.classificacaoIntermediario}
        onPressFirstOption={(text) =>
          setFieldValue("classificacaoIntermediario", text)
        }
        onPressSecondOption={(text) =>
          setFieldValue("classificacaoIntermediario", text)
        }
        onPressThirdOption={(text) =>
          setFieldValue("classificacaoIntermediario", text)
        }
      />

      <InputLayout title="CPF" style={{ marginTop: 25 }}>
        <InputComponent
          mode="flat"
          placeholder="Digite o seu CPF"
          value={values.cpfIntermediario}
          onChangeText={(text) => setFieldValue("cpfIntermediario", text)}
        />
      </InputLayout>

      <InputLayout title="RG" style={{ marginTop: 25 }}>
        <InputComponent
          mode="flat"
          placeholder="Digite seu RG"
          value={values.rgIntermediario}
          onChangeText={(text) => setFieldValue("rgIntermediario", text)}
        />
      </InputLayout>

      <InputLayout title="CNH" style={{ marginTop: 25 }}>
        <InputComponent
          mode="flat"
          placeholder="Digite o número da CNH"
          value={values.cnhIntermediario}
          onChangeText={(text) => setFieldValue("cnhIntermediario", text)}
        />
      </InputLayout>

      <InputLayout title="Vencimento da CNH" style={{ marginTop: 25 }}>
        <InputComponent
          mode="flat"
          placeholder="Digite a data do vencimento da CNH"
          value={values.vencimentoCnhIntermediario}
          onChangeText={(text) =>
            setFieldValue("vencimentoCnhIntermediario", text)
          }
        />
      </InputLayout>

      <InputLayout title="Endereço" style={{ marginTop: 25 }}>
        <InputComponent
          mode="flat"
          placeholder="Digite o nome da rua/avenida"
          value={values.enderecoIntermediario}
          onChangeText={(text) => setFieldValue("enderecoIntermediario", text)}
        />
      </InputLayout>

      <View style={{ marginTop: 25 }} />
      <DoubleDropdown
        leftPlaceholder="Digite o número"
        rightPlaceholder="Digite o complemento"
        leftValue={values.numeroIntermediario}
        rightValue={values.complementoIntermediario}
        onPressLeftMenuItem={(text) =>
          setFieldValue("numeroIntermediario", text)
        }
        onPressRightMenuItem={(text) =>
          setFieldValue("complementoIntermediario", text)
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
          value={values.bairroIntermediario}
          onChangeText={(text) => setFieldValue("bairroIntermediario", text)}
        />
      </InputLayout>

      <InputLayout title="Cidade" style={{ marginTop: 25 }}>
        <InputComponent
          mode="flat"
          placeholder="Digite o nome da cidade"
          value={values.cidadeIntermediario}
          onChangeText={(text) => setFieldValue("cidadeIntermediario", text)}
        />
      </InputLayout>

      <InputLayout title="Estado" style={{ marginTop: 25 }}>
        <InputComponent
          mode="flat"
          placeholder="Digite o nome do estado"
          value={values.estadoIntermediario}
          onChangeText={(text) => setFieldValue("estadoIntermediario", text)}
        />
      </InputLayout>

      <InputLayout title="Observações" style={{ marginTop: 25 }}>
        <InputComponent
          mode="flat"
          multiline
          numberOfLines={7}
          placeholder="Digite as observações"
          value={values.observacoesIntermediario}
          onChangeText={(text) =>
            setFieldValue("observacoesIntermediario", text)
          }
        />
      </InputLayout>
    </View>
  );
};

export default IntermediarioPessoaFisica;
