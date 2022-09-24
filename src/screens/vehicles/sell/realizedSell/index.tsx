import React, { useState, useEffect } from "react";
import { View, ScrollView, BackHandler, StyleSheet } from "react-native";
import SimpleNav from "../../../../components/simpleNav";
import StepsRegisterAvaliation from "../../registerAvaliation/steps";
import StepsRealizedSell from "./steps";
import StepsTwo from "./stepsTwo";

const RealizedSell = ({ navigation }: any) => {
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
        <SimpleNav label="Realizar venda" onPressBack={goBackSteps} />

        <StepsTwo currentStep={currentStep} />

        <StepsRealizedSell
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#fff",
  },
  container: {
    marginHorizontal: 18,
    marginTop: 35,
  },
});

export default RealizedSell;
