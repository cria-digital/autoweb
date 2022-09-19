import React from "react";
import { View } from "react-native";
import RadioButtonComponent from "../radioButton";

interface RadioPaginationProps {
  assessmentStatus: string;
  setAssessmentStatus: (status: string) => void;
}

const RadioPagination: React.FC<RadioPaginationProps> = (props) => {
  const { setAssessmentStatus, assessmentStatus } = props;
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        width: "95%",
      }}
    >
      <RadioButtonComponent
        status={assessmentStatus === "Waiting" ? "checked" : "unchecked"}
        onPress={() => setAssessmentStatus("Waiting")}
        label={"Aguardando Aprovação"}
      />
      <RadioButtonComponent
        status={assessmentStatus === "Rejected" ? "checked" : "unchecked"}
        onPress={() => setAssessmentStatus("Rejected")}
        label={"Reprovado"}
      />
    </View>
  );
};

export default RadioPagination;
