import { Formik } from "formik";
import React from "react";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  formSchemaRegisterAvaliation,
  initialRegisterAvaliationValues,
} from "../values";
import FifthStepRegisterAvaliation from "./fifth";
import FirstStepRegisterAvaliation from "./first";
import FourthStepRegisterAvaliation from "./fourth";
import SecondStepRegisterAvaliation from "./second";
import ThirdStepRegisterAvaliation from "./third";
import AlertModal from "../../../../components/alertModal";

export interface StepsRegisterAvaliationProps {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  handleSubmit: any;
  values: any;
  touched: any;
  errors: any;
  setFieldValue: any;
  cancelRegister: () => void;
}

interface MainStepsRegisterAvaliationProps {
  currentStep: number;
  setCurrentStep: (step: number) => void;
}

const StepsRegisterAvaliation: React.FC<MainStepsRegisterAvaliationProps> = (
  props
) => {
  const { currentStep, setCurrentStep } = props;
  const { navigate } = useNavigation();
  const [cancelAvaliationModal, setCancelAvaliationModal] =
    React.useState(false);
  const [avaliationDeleted, setAvaliationDeleted] = React.useState(false);
  const handleSubmitForm = async (values: any) => {
    alert("SUCESSO");
    navigate("Vehicles");
  };

  const cancelRegister = () => {
    setCancelAvaliationModal(true);
  };

  return (
    <ScrollView>
      <Formik
        initialValues={initialRegisterAvaliationValues}
        onSubmit={handleSubmitForm}
        validationSchema={formSchemaRegisterAvaliation}
      >
        {({ handleSubmit, values, touched, errors, setFieldValue }) => (
          <>
            {currentStep === 0 && (
              <FirstStepRegisterAvaliation
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
              <SecondStepRegisterAvaliation
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
              <ThirdStepRegisterAvaliation
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
              <FourthStepRegisterAvaliation
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
            {currentStep === 4 && (
              <FifthStepRegisterAvaliation
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
        firstButtonLabel="Sim, cancelar avaliação"
        secondButtonLabel="Não, continuar cadastrando"
        warningMessage
        beforeFirstStrongText="Deseja mesmo"
        firstStrongText="cancelar"
        middleStrongText="a"
        secondStrongText="avaliação"
        afterSecondStrongText="desse veículo?"
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
        firstStrongText="avaliação"
        middleStrongText="foi"
        secondStrongText="excluída"
        afterSecondStrongText="com sucesso!"
        setVisible={setAvaliationDeleted}
        cancelOrClose={() => {
          setAvaliationDeleted(false);
          navigate("Vehicles");
        }}
      />
    </ScrollView>
  );
};

export default StepsRegisterAvaliation;
