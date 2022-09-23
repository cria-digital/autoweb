import styles from "./styles";
import React, { useState, useEffect } from "react";
import { View, ScrollView, BackHandler } from "react-native";
import SimpleNav from "../../../../components/simpleNav";
import StepsRegisterAvaliation from "../../registerAvaliation/steps";
import Steps from "../../../../components/steps";
import StepsRegisterPurchase from "../components/stepsRegisterPurchase";

const RegisterPurchase = ({ navigation }: any) => {
  const { goBack } = navigation;
  const [currentStep, setCurrentStep] = useState(0);

  const goBackSteps = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else {
      goBack();
    }
  };

  useEffect(() => {
    const backAction = () => {
      goBackSteps();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, [currentStep]);

  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.container}>
        <SimpleNav label="Cadastrar compra" onPressBack={goBackSteps} />

        <Steps currentStep={currentStep} />

        <StepsRegisterPurchase
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
      </View>
    </ScrollView>
  );
};

export default RegisterPurchase;
