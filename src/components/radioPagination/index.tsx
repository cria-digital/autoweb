import React from "react";
import { View } from "react-native";
import RadioButtonComponent from "../radioButton";

interface RadioPaginationProps {
  assessmentStatus: string;
  setAssessmentStatus: (status: string) => void;
  firstStatus?: string;
  secondStatus?: string;
  firstLabel?: string;
  secondLabel?: string;
}

const RadioPagination: React.FC<RadioPaginationProps> = (props) => {
  const {
    setAssessmentStatus,
    assessmentStatus,
    firstStatus,
    secondStatus,
    firstLabel,
    secondLabel,
  } = props;
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        width: "95%",
      }}
    >
      <RadioButtonComponent
        status={assessmentStatus === firstStatus ? "checked" : "unchecked"}
        onPress={() => setAssessmentStatus(firstStatus)}
        label={firstLabel}
      />
      <RadioButtonComponent
        status={assessmentStatus === secondStatus ? "checked" : "unchecked"}
        onPress={() => setAssessmentStatus(secondStatus)}
        label={secondLabel}
      />
    </View>
  );
};

export default RadioPagination;
