import { Formik, useFormik } from "formik";
import React, { useState } from "react";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  editingInitialRegisterAvaliationValues,
  formSchemaRegisterAvaliation,
  initialRegisterAvaliationValues,
} from "../values";
import FifthStepRegisterAvaliation from "./fifth";
import FirstStepRegisterAvaliation from "./first";
import FourthStepRegisterAvaliation from "./fourth";
import SecondStepRegisterAvaliation from "./second";
import ThirdStepRegisterAvaliation from "./third";
import AlertModal from "../../../../components/alertModal";
import {
  editAvaliation,
  registerAvaliation,
} from "../../../../config/avaliacao";
import { useRecoilValue } from "recoil";
import AuthStatus from "../../../../atoms/auth";
import { useEffect } from "react";

export interface StepsRegisterAvaliationProps {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  handleSubmit: any;
  values: any;
  touched: any;
  errors: any;
  setFieldValue: any;
  isEditing?: boolean;
  cancelRegister: () => void;
}

interface MainStepsRegisterAvaliationProps {
  id?: string;
  currentStep: number;
  isEditing?: boolean;
  setCurrentStep: (step: number) => void;
}

const StepsRegisterAvaliation: React.FC<MainStepsRegisterAvaliationProps> = (
  props
) => {
  const { navigate } = useNavigation();
  const { tokenApi, tokenExpire } = useRecoilValue(AuthStatus);
  const { currentStep, setCurrentStep, isEditing, id } = props;
  const [cancelAvaliationModal, setCancelAvaliationModal] = useState(false);
  const [avaliationDeleted, setAvaliationDeleted] = useState(false);
  const [avaliationRegistered, setAvaliationRegistered] = useState(false);
  const [initialFormikValues, setInitialFormikValues] = useState({});
  const [loading, setLoading] = useState(true);
  const registerNewAvaliation = async (values) => {
    const result = await registerAvaliation(values, tokenApi);
    if (result) setAvaliationRegistered(true);
  };

  const handleSubmitForm = async (values: any) => {
    if (!isEditing) await registerNewAvaliation(values);
  };

  useEffect(() => {
    const getValuesOfEditAvaliation = async () => {
      const result = await editAvaliation(id, tokenApi);
      if (result) {
        setInitialFormikValues(editingInitialRegisterAvaliationValues(result));
        setLoading(false);
      }
    };
    if (isEditing) {
      getValuesOfEditAvaliation();
    } else {
      setInitialFormikValues(initialRegisterAvaliationValues);
      setLoading(false);
    }
  }, []);

  const cancelRegister = () => setCancelAvaliationModal(true);

  return (
    <ScrollView>
      {!loading && (
        <Formik
          initialValues={{ ...initialFormikValues }}
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
                  isEditing={isEditing}
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
      )}
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

      <AlertModal
        visible={avaliationRegistered}
        animationType="fade"
        firstButtonLabel="Fechar"
        okMessage
        beforeFirstStrongText="A"
        firstStrongText="avaliação"
        middleStrongText="foi"
        secondStrongText="cadastrada"
        afterSecondStrongText="com sucesso!"
        setVisible={setAvaliationRegistered}
        cancelOrClose={() => {
          setAvaliationRegistered(false);
          navigate("Vehicles");
        }}
      />
    </ScrollView>
  );
};

export default StepsRegisterAvaliation;
