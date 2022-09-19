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

export interface StepsRegisterAvaliationProps {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  handleSubmit: any;
  values: any;
  touched: any;
  errors: any;
  setFieldValue: any;
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
  const handleSubmitForm = async (values: any) => {
    alert("SUCESSO");
    navigate("Vehicles");
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
              />
            )}
          </>
        )}
      </Formik>
    </ScrollView>
  );
};

export default StepsRegisterAvaliation;
