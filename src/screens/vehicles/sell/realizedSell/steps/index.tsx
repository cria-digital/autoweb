import { Formik } from "formik";
import React from "react";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AlertModal from "../../../../../components/alertModal";
import FirstStepRealizedSell from "./first";
import SecondStepRealizedSell from "./second";

export interface MainStepsRealizedSellProps {
  currentStep: number;
  setCurrentStep: (step: number) => void;
}

const StepsRealizedSell: React.FC<MainStepsRealizedSellProps> = (props) => {
  const { currentStep, setCurrentStep } = props;
  const { navigate } = useNavigation();
  const [cancelRealizedSell, setCancelRealizedSell] = React.useState(false);
  const [realizeSell, setRealizeSell] = React.useState(false);
  const [sellFinish, setSellFinish] = React.useState(false);
  const [sellDeleted, setSellDeleted] = React.useState(false);

  const cancelRegister = () => {
    setCancelRealizedSell(true);
  };

  return (
    <ScrollView>
      {currentStep === 0 && (
        <FirstStepRealizedSell
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          cancelRegister={cancelRegister}
        />
      )}

      {currentStep === 1 && (
        <SecondStepRealizedSell
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          cancelRegister={cancelRegister}
          setRealizeSell={setRealizeSell}
        />
      )}

      <AlertModal
        visible={cancelRealizedSell}
        animationType="fade"
        firstButtonLabel="Sim, cancelar venda"
        secondButtonLabel="Não, continuar cadastrando"
        warningMessage
        beforeFirstStrongText="Deseja mesmo"
        firstStrongText="cancelar"
        middleStrongText="essa venda?"
        setVisible={setCancelRealizedSell}
        cancelOrClose={() => {
          setCancelRealizedSell(false);
          setSellDeleted(true);
        }}
      />
      <AlertModal
        visible={sellDeleted}
        animationType="fade"
        firstButtonLabel="Fechar"
        okMessage
        beforeFirstStrongText="A"
        firstStrongText="venda"
        middleStrongText="foi"
        secondStrongText="cancelada"
        afterSecondStrongText="com sucesso!"
        setVisible={setSellDeleted}
        cancelOrClose={() => {
          setSellDeleted(false);
          navigate("Vehicles");
        }}
      />

      <AlertModal
        visible={realizeSell}
        animationType="fade"
        firstButtonLabel="Sim, vender veículo"
        secondButtonLabel="Não, voltar"
        warningMessage
        beforeFirstStrongText="Deseja mesmo"
        firstStrongText="realizar a venda"
        middleStrongText="desse veículo?"
        setVisible={setRealizeSell}
        cancelOrClose={() => {
          setRealizeSell(false);
          setSellFinish(true);
        }}
      />
      <AlertModal
        visible={sellFinish}
        animationType="fade"
        firstButtonLabel="Fechar"
        okMessage
        beforeFirstStrongText="A"
        firstStrongText="venda"
        middleStrongText="foi"
        secondStrongText="realizada"
        afterSecondStrongText="com sucesso!"
        setVisible={setSellFinish}
        cancelOrClose={() => {
          setSellFinish(false);
          navigate("Vehicles");
        }}
      />
    </ScrollView>
  );
};

export default StepsRealizedSell;
