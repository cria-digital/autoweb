import React from "react";
import { View } from "react-native";
import DoubleDropdown from "../../../../../components/doubleDropdown";
import Dropdown from "../../../../../components/dropdown";
import InputComponent from "../../../../../components/input";
import InputLayout from "../../../../../components/inputLayout";
import RadioOptions from "../../../../../components/radioOptions";

interface IntermediarioPessoaJuridicaProps {
  values: any;
  touched: any;
  errors: any;
  setFieldValue: any;
  handleSubmit: any;
}

const IntermediarioPessoaJuridica: React.FC<
  IntermediarioPessoaJuridicaProps
> = (props) => {
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

      <InputLayout title="CNPJ" style={{ marginTop: 25 }}>
        <InputComponent
          mode="flat"
          placeholder="Digite o CNPJ"
          value={values.cnpjIntermediario}
          onChangeText={(text) => setFieldValue("cnpjIntermediario", text)}
        />
      </InputLayout>
      <InputLayout title="IE - Inscrição estadual" style={{ marginTop: 25 }}>
        <InputComponent
          mode="flat"
          placeholder="Digite a inscrição estadual"
          value={values.ieIntermediario}
          onChangeText={(text) => setFieldValue("ieIntermediario", text)}
        />
      </InputLayout>

      <View style={{ marginTop: 25 }} />
      <Dropdown
        content={["ramo 1", "ramo 2"]}
        title="Ramo da atividade"
        onPressMenuItem={(item) =>
          setFieldValue("ramoAtividadeJuridicaIntermediario", item)
        }
        value={values.ramoAtividadeJuridicaIntermediario}
        placeholder="Selecione o ramo da atividade"
      />

      <RadioOptions
        firstOption="Cliente"
        secondOption="Fornecedor"
        actualOption={values.classificacaoJuridicaIntermediario}
        onPressFirstOption={() =>
          setFieldValue("classificacaoJuridicaIntermediario", "Sim")
        }
        onPressSecondOption={() =>
          setFieldValue("classificacaoJuridicaIntermediario", "Não")
        }
        label="Classificação"
      />
      <RadioOptions
        firstOption="Sim"
        secondOption="Não"
        actualOption={values.possuiFilhosJuridicaIntermediario}
        onPressFirstOption={() =>
          setFieldValue("possuiFilhosJuridicaIntermediario", "Sim")
        }
        onPressSecondOption={() =>
          setFieldValue("possuiFilhosJuridicaIntermediario", "Não")
        }
        label="Possui filhos"
      />

      <InputLayout title="Nome" style={{ marginTop: 25 }}>
        <InputComponent
          mode="flat"
          placeholder="Digite o nome"
          value={values.nomeRepresentanteIntermediario}
          onChangeText={(text) =>
            setFieldValue("nomeRepresentanteIntermediario", text)
          }
        />
      </InputLayout>

      <InputLayout title="E-mail" style={{ marginTop: 25 }}>
        <InputComponent
          mode="flat"
          placeholder="Digite o e-mail"
          value={values.emailRepresentanteIntermediario}
          onChangeText={(text) =>
            setFieldValue("emailRepresentanteIntermediario", text)
          }
        />
      </InputLayout>

      <InputLayout title="Telefone" style={{ marginTop: 25 }}>
        <InputComponent
          mode="flat"
          placeholder="Digite seu telefone"
          value={values.telefoneRepresentanteIntermediario}
          onChangeText={(text) =>
            setFieldValue("telefoneRepresentanteIntermediario", text)
          }
        />
      </InputLayout>

      <InputLayout title="Conta comercial" style={{ marginTop: 25 }}>
        <InputComponent
          mode="flat"
          placeholder="Digite sua conta comercial"
          value={values.contaComercialIntermediario}
          onChangeText={(text) =>
            setFieldValue("contaComercialIntermediario", text)
          }
        />
      </InputLayout>

      <InputLayout title="CNH" style={{ marginTop: 25 }}>
        <InputComponent
          mode="flat"
          placeholder="Digite o número da sua CNH"
          value={values.cnhRepresentanteIntermediario}
          onChangeText={(text) =>
            setFieldValue("cnhRepresentanteIntermediario", text)
          }
        />
      </InputLayout>

      <InputLayout title="Vencimento da CNH" style={{ marginTop: 25 }}>
        <InputComponent
          mode="flat"
          placeholder="Digite a data do vencimento da CNH"
          value={values.vencimentoCnhRepresentanteIntermediario}
          onChangeText={(text) =>
            setFieldValue("vencimentoCnhRepresentanteIntermediario", text)
          }
        />
      </InputLayout>

      <InputLayout title="Endereço" style={{ marginTop: 25 }}>
        <InputComponent
          mode="flat"
          placeholder="Digite o nome da rua/avenida"
          value={values.enderecoRepresentanteIntermediario}
          onChangeText={(text) =>
            setFieldValue("enderecoRepresentanteIntermediario", text)
          }
        />
      </InputLayout>

      <View style={{ marginTop: 25 }} />
      <DoubleDropdown
        leftPlaceholder="Digite o número"
        rightPlaceholder="Digite o complemento"
        leftValue={values.numeroRepresentanteIntermediario}
        rightValue={values.complementoRepresentanteIntermediario}
        onPressLeftMenuItem={(text) =>
          setFieldValue("numeroRepresentanteIntermediario", text)
        }
        onPressRightMenuItem={(text) =>
          setFieldValue("complementoRepresentanteIntermediario", text)
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
          value={values.bairroRepresentanteIntermediario}
          onChangeText={(text) =>
            setFieldValue("bairroRepresentanteIntermediario", text)
          }
        />
      </InputLayout>

      <InputLayout title="Cidade" style={{ marginTop: 25 }}>
        <InputComponent
          mode="flat"
          placeholder="Digite o nome da cidade"
          value={values.cidadeRepresentanteIntermediario}
          onChangeText={(text) =>
            setFieldValue("cidadeRepresentanteIntermediario", text)
          }
        />
      </InputLayout>

      <InputLayout title="Estado" style={{ marginTop: 25 }}>
        <InputComponent
          mode="flat"
          placeholder="Digite o nome do estado"
          value={values.estadoRepresentanteIntermediario}
          onChangeText={(text) =>
            setFieldValue("estadoRepresentanteIntermediario", text)
          }
        />
      </InputLayout>

      <InputLayout title="Observações" style={{ marginTop: 25 }}>
        <InputComponent
          mode="flat"
          multiline
          numberOfLines={7}
          placeholder="Digite as observações"
          value={values.observacoesRepresentanteIntermediario}
          onChangeText={(text) =>
            setFieldValue("observacoesRepresentanteIntermediario", text)
          }
        />
      </InputLayout>
    </View>
  );
};

export default IntermediarioPessoaJuridica;
