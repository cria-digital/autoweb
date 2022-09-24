import { Formik } from "formik";
import React from "react";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AlertModal from "../../../../../components/alertModal";
import { formSchemaAddProposal, initialRegisterAddProposal } from "./values";
import FirstStepAddProposal from "./first";
import SecondStepAddProposal from "./second";
import ThirdStepAddProposal from "./third";
import FourthStepsAddProposal from "./fourth";

export interface StepsAddProposalProps {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  handleSubmit: any;
  values: any;
  touched: any;
  errors: any;
  setFieldValue: any;
  cancelRegister: () => void;
}

interface MainStepsAddProposalProps {
  currentStep: number;
  setCurrentStep: (step: number) => void;
}

const StepsAddProposal: React.FC<MainStepsAddProposalProps> = (props) => {
  const { currentStep, setCurrentStep } = props;
  const { navigate } = useNavigation();
  const [cancelAvaliationModal, setCancelAvaliationModal] =
    React.useState(false);
  const [avaliationDeleted, setAvaliationDeleted] = React.useState(false);
  const [finishAddProposal, setFinishAddProposal] = React.useState(false);
  const handleSubmitForm = async (values: any) => {
    setFinishAddProposal(true);
  };

  const cancelRegister = () => {
    setCancelAvaliationModal(true);
  };

  return (
    <ScrollView>
      <Formik
        initialValues={initialRegisterAddProposal}
        onSubmit={handleSubmitForm}
        validationSchema={formSchemaAddProposal}
      >
        {({ handleSubmit, values, touched, errors, setFieldValue }) => (
          <>
            {currentStep === 0 && (
              <FirstStepAddProposal
                currentStep={currentStep}
                handleSubmit={handleSubmit}
                setFieldValue={setFieldValue}
                setCurrentStep={setCurrentStep}
                values={values}
                touched={touched}
                errors={errors}
                cancelRegister={cancelRegister}
              />
            )}
            {currentStep === 1 && (
              <SecondStepAddProposal
                currentStep={currentStep}
                handleSubmit={handleSubmit}
                setFieldValue={setFieldValue}
                setCurrentStep={setCurrentStep}
                values={values}
                touched={touched}
                errors={errors}
                cancelRegister={cancelRegister}
              />
            )}
            {currentStep === 2 && (
              <ThirdStepAddProposal
                currentStep={currentStep}
                handleSubmit={handleSubmit}
                setFieldValue={setFieldValue}
                setCurrentStep={setCurrentStep}
                values={values}
                touched={touched}
                errors={errors}
                cancelRegister={cancelRegister}
              />
            )}
            {currentStep === 3 && (
              <FourthStepsAddProposal
                currentStep={currentStep}
                handleSubmit={handleSubmit}
                setFieldValue={setFieldValue}
                setCurrentStep={setCurrentStep}
                values={values}
                touched={touched}
                errors={errors}
                cancelRegister={cancelRegister}
              />
            )}
          </>
        )}
      </Formik>
      <AlertModal
        visible={cancelAvaliationModal}
        animationType="fade"
        firstButtonLabel="Sim, cancelar proposta"
        secondButtonLabel="Não, voltar"
        warningMessage
        beforeFirstStrongText="Deseja mesmo"
        firstStrongText="cancelar"
        middleStrongText="a"
        secondStrongText="proposta"
        afterSecondStrongText="dessa venda?"
        setVisible={setCancelAvaliationModal}
        cancelOrClose={() => {
          setCancelAvaliationModal(false);
          setAvaliationDeleted(true);
        }}
      />
      <AlertModal
        visible={avaliationDeleted}
        animationType="fade"
        firstButtonLabel="Fechar"
        okMessage
        beforeFirstStrongText="A"
        firstStrongText="proposta"
        middleStrongText="foi"
        secondStrongText="cancelada"
        afterSecondStrongText="com sucesso!"
        setVisible={setAvaliationDeleted}
        cancelOrClose={() => {
          setAvaliationDeleted(false);
          navigate("Vehicles");
        }}
      />

      <AlertModal
        visible={finishAddProposal}
        animationType="fade"
        firstButtonLabel="Fechar"
        okMessage
        firstStrongText="Proposta de venda"
        middleStrongText="realizada com sucesso!"
        setVisible={setFinishAddProposal}
        cancelOrClose={() => {
          setFinishAddProposal(false);
          navigate("Vehicles");
        }}
      />
    </ScrollView>
  );
};

export default StepsAddProposal;
