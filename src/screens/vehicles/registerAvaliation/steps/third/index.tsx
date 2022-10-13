import React from "react";
import { View } from "react-native";
import { StepsRegisterAvaliationProps } from "..";
import NextBackButtons from "../../../../../components/nextBackButtons";
import StepsTitle from "../../../../../components/stepsTitle";
import ChecklistContextAvaliation from "./checklist";

const ThirdStepRegisterAvaliation: React.FC<StepsRegisterAvaliationProps> = (
  props
) => {
  const {
    currentStep,
    setCurrentStep,
    setFieldValue,
    values,
    touched,
    errors,
    cancelRegister,
  } = props;
  const nextStep = () => setCurrentStep(currentStep + 1);

  return (
    <View>
      <View style={{ marginTop: 30 }}>
        <StepsTitle title="Checklist" />
      </View>

      <ChecklistContextAvaliation
        labelRadioOption="Mecânica"
        actualOption={values.mecanica.status}
        onPressFirstOption={(text) => setFieldValue("mecanica.status", text)}
        onPressSecondOption={(text) => setFieldValue("mecanica.status", text)}
        onPressThirdOption={(text) => setFieldValue("mecanica.status", text)}
        inputCustoAproximado={values.mecanica.custoAproximado}
        inputCustoAproximadoOnChange={(text: string) =>
          setFieldValue("mecanica.custoAproximado", text)
        }
        inputObservationValue={values.mecanica.observacao}
        inputObservationPlaceholder="Ex: Cuidado ao abrir o carburador"
        inputObservationOnChange={(text: string) =>
          setFieldValue("mecanica.observacao", text)
        }
      />

      <ChecklistContextAvaliation
        labelRadioOption="Elétrica"
        actualOption={values.eletrica.status}
        onPressFirstOption={(text) => setFieldValue("eletrica.status", text)}
        onPressSecondOption={(text) => setFieldValue("eletrica.status", text)}
        onPressThirdOption={(text) => setFieldValue("eletrica.status", text)}
        inputCustoAproximado={values.eletrica.custoAproximado}
        inputCustoAproximadoOnChange={(text: string) =>
          setFieldValue("eletrica.custoAproximado", text)
        }
        inputObservationValue={values.eletrica.observacao}
        inputObservationPlaceholder="Ex: Cuidado com piscas"
        inputObservationOnChange={(text: string) =>
          setFieldValue("eletrica.observacao", text)
        }
      />

      <ChecklistContextAvaliation
        labelRadioOption="Tapeçaria"
        actualOption={values.tapecaria.status}
        onPressFirstOption={(text) => setFieldValue("tapecaria.status", text)}
        onPressSecondOption={(text) => setFieldValue("tapecaria.status", text)}
        onPressThirdOption={(text) => setFieldValue("tapecaria.status", text)}
        inputCustoAproximado={values.tapecaria.custoAproximado}
        inputCustoAproximadoOnChange={(text: string) =>
          setFieldValue("tapecaria.custoAproximado", text)
        }
        inputObservationValue={values.tapecaria.observacao}
        inputObservationPlaceholder="Ex: Tapete de motorista esta novo"
        inputObservationOnChange={(text: string) =>
          setFieldValue("tapecaria.observacao", text)
        }
      />

      <ChecklistContextAvaliation
        labelRadioOption="Pneus"
        actualOption={values.pneus.status}
        onPressFirstOption={(text) => setFieldValue("pneus.status", text)}
        onPressSecondOption={(text) => setFieldValue("pneus.status", text)}
        onPressThirdOption={(text) => setFieldValue("pneus.status", text)}
        inputCustoAproximado={values.pneus.custoAproximado}
        inputCustoAproximadoOnChange={(text: string) =>
          setFieldValue("pneus.custoAproximado", text)
        }
        inputObservationValue={values.pneus.observacao}
        inputObservationPlaceholder="Ex: Pneus traseiros novos"
        inputObservationOnChange={(text: string) =>
          setFieldValue("pneus.observacao", text)
        }
      />

      <ChecklistContextAvaliation
        labelRadioOption="Funilaria/Pintura"
        actualOption={values.funilaria.status}
        onPressFirstOption={(text) => setFieldValue("funilaria.status", text)}
        onPressSecondOption={(text) => setFieldValue("funilaria.status", text)}
        onPressThirdOption={(text) => setFieldValue("funilaria.status", text)}
        inputCustoAproximado={values.funilaria.custoAproximado}
        inputCustoAproximadoOnChange={(text: string) =>
          setFieldValue("funilaria.custoAproximado", text)
        }
        inputObservationValue={values.funilaria.observacao}
        inputObservationPlaceholder="Ex: Arranhão na porta do carona"
        inputObservationOnChange={(text: string) =>
          setFieldValue("funilaria.observacao", text)
        }
      />

      <ChecklistContextAvaliation
        labelRadioOption="Martelinho"
        actualOption={values.martelinho.status}
        onPressFirstOption={(text) => setFieldValue("martelinho.status", text)}
        onPressSecondOption={(text) => setFieldValue("martelinho.status", text)}
        onPressThirdOption={(text) => setFieldValue("martelinho.status", text)}
        inputCustoAproximado={values.martelinho.custoAproximado}
        inputCustoAproximadoOnChange={(text: string) =>
          setFieldValue("martelinho.custoAproximado", text)
        }
        inputObservationValue={values.martelinho.observacao}
        inputObservationPlaceholder="Ex: Amassado no porta malas"
        inputObservationOnChange={(text: string) =>
          setFieldValue("martelinho.observacao", text)
        }
      />

      <View style={{ marginTop: 24 }}>
        <NextBackButtons
          firstButtonLabel="Próximo"
          secondButtonLabel="Cancelar"
          firstButtonOnPress={nextStep}
          secondButtonOnPress={cancelRegister}
        />
      </View>
    </View>
  );
};

export default ThirdStepRegisterAvaliation;
