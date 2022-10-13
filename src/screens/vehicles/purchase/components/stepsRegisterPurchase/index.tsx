import { Formik } from "formik";
import React, { useState } from "react";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AlertModal from "../../../../../components/alertModal";
import FirstStepRegisterPurchase from "./steps/first";
import SecondStepRegisterPurchase from "./steps/second";
import ThirdStepRegisterPurchase from "./steps/third";
import FourthStepRegisterPurchase from "./steps/fourth";
import FifthStepRegisterPurchase from "./steps/fifth";
import {
  formSchemaRegisterPurchase,
  initialRegisterPurchaseValues,
  initialValuesEditPurchase,
} from "../../registerPurchase/values";
import { useEffect } from "react";
import {
  getVehiclePurchaseDates,
  registerVehiclePurchase,
  updateVehiclePurchase,
} from "../../../../../config/compra";
import { useRecoilValue } from "recoil";
import AuthStatus from "../../../../../atoms/auth";
import Loading from "../../../../../components/loading";
import { SafeAreaView } from "react-native-safe-area-context";

interface MainStepsRegisterAvaliationProps {
  carPlate: string;
  carID?: string;
  isEditing?: boolean;
  currentStep: number;
  setCurrentStep: (step: number) => void;
}

const StepsRegisterPurchase: React.FC<MainStepsRegisterAvaliationProps> = (
  props
) => {
  const { navigate } = useNavigation();
  const { currentStep, setCurrentStep, carPlate, isEditing, carID } = props;
  const [cancelPurchaseModal, setCancelPurchaseModal] = useState(false);
  const [purchaseDeleted, setPurchaseDeleted] = useState(false);
  const [finishedRegister, setFinishedRegister] = useState(false);
  const [initialFormikValues, setInitialFormikValues] = useState({});
  const [idVehicle, setIdVehicle] = useState("");
  const [loading, setLoading] = useState(true);
  const { tokenApi } = useRecoilValue(AuthStatus);
  const registerNewPurchase = async (values: any) => {
    const result = await registerVehiclePurchase(values, tokenApi);
    if (result) setFinishedRegister(true);
  };
  const editPurchase = async (values: any) => {
    const result = await updateVehiclePurchase(values, tokenApi, idVehicle);
    if (result) setFinishedRegister(true);
  };

  const handleSubmitForm = async (values: any) => {
    if (isEditing) editPurchase(values);
    else registerNewPurchase(values);
  };

  const cancelRegister = () => setCancelPurchaseModal(true);

  useEffect(() => {
    async function getValuesOfEditPurchase() {
      const result = await getVehiclePurchaseDates(carID, tokenApi);
      if (result) {
        setInitialFormikValues(initialValuesEditPurchase(result));
        setIdVehicle(result?.Veiculo?.IdVeiculo);
        setLoading(false);
      }
    }
    if (isEditing) {
      getValuesOfEditPurchase();
    } else {
      setInitialFormikValues(initialRegisterPurchaseValues);
      setLoading(false);
    }
  }, []);

  return (
    <ScrollView>
      {loading && (
        <Loading isLoading size={50} style={{ height: 50, marginTop: 100 }} />
      )}
      {!loading && (
        <SafeAreaView>
          <Formik
            initialValues={{ ...initialFormikValues }}
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
                    isEditing={isEditing}
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
                {/* {currentStep === 2 && (
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
            )} */}
                {currentStep === 2 && (
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
                {currentStep === 3 && (
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
        </SafeAreaView>
      )}
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
