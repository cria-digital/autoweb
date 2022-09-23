import { Formik } from "formik";
import React from "react";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AlertModal from "../../../../../components/alertModal";
import FirstStepRegisterPurchase from "./steps/first";
import SecondStepRegisterPurchase from "./steps/second";
import ThirdStepRegisterAvaliation from "../../../registerAvaliation/steps/third";
import FourthStepRegisterPurchase from "./steps/fourth";
import FifthStepRegisterPurchase from "./steps/fifth";
import {
  formSchemaRegisterPurchase,
  initialRegisterPurchaseValues,
} from "../../registerPurchase/values";
import ThirdStepRegisterPurchase from "./steps/third";

interface MainStepsRegisterAvaliationProps {
  currentStep: number;
  setCurrentStep: (step: number) => void;
}

const StepsRegisterPurchase: React.FC<MainStepsRegisterAvaliationProps> = (
  props
) => {
  const { currentStep, setCurrentStep } = props;
  const { navigate } = useNavigation();
  const [cancelPurchaseModal, setCancelPurchaseModal] = React.useState(false);
  const [purchaseDeleted, setPurchaseDeleted] = React.useState(false);
  const [finishedRegister, setFinishedRegister] = React.useState(false);
  const handleSubmitForm = async (values: any) => {
    setFinishedRegister(true);
  };

  const cancelRegister = () => {
    setCancelPurchaseModal(true);
  };

  return (
    <ScrollView>
      <Formik
        initialValues={initialRegisterPurchaseValues}
        onSubmit={handleSubmitForm}
        validationSchema={formSchemaRegisterPurchase}
      >
        {({ handleSubmit, values, touched, errors, setFieldValue }) => (
          <>
            {currentStep === 0 && (
              <FirstStepRegisterPurchase
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
              <SecondStepRegisterPurchase
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
              <ThirdStepRegisterPurchase
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
              <FourthStepRegisterPurchase
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
              <FifthStepRegisterPurchase
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
        visible={cancelPurchaseModal}
        animationType="fade"
        firstButtonLabel="Sim, cancelar compra"
        secondButtonLabel="Não, continuar cadastrando"
        warningMessage
        beforeFirstStrongText="Deseja mesmo"
        firstStrongText="cancelar"
        middleStrongText="a"
        secondStrongText="compra"
        afterSecondStrongText="desse veículo?"
        setVisible={setCancelPurchaseModal}
        cancelOrClose={() => {
          setCancelPurchaseModal(false);
          setPurchaseDeleted(true);
        }}
      />
      <AlertModal
        visible={purchaseDeleted}
        animationType="fade"
        firstButtonLabel="Fechar"
        okMessage
        beforeFirstStrongText="A"
        firstStrongText="compra"
        middleStrongText="foi"
        secondStrongText="excluída"
        afterSecondStrongText="com sucesso!"
        setVisible={setPurchaseDeleted}
        cancelOrClose={() => {
          setPurchaseDeleted(false);
          navigate("Vehicles");
        }}
      />

      <AlertModal
        visible={finishedRegister}
        animationType="fade"
        firstButtonLabel="Visualizar contrato de compra"
        secondButtonLabel="Fechar"
        okMessage
        beforeFirstStrongText="A"
        firstStrongText="avaliação"
        middleStrongText="foi"
        secondStrongText="excluída"
        afterSecondStrongText="com sucesso!"
        setVisible={setPurchaseDeleted}
        cancelOrClose={() => {
          setFinishedRegister(false);
          navigate("ContractsPurchase");
        }}
        secondButtonPress={() => {
          setFinishedRegister(false);
          navigate("Vehicles");
        }}
      />
    </ScrollView>
  );
};

export default StepsRegisterPurchase;
