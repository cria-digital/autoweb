import React from "react";
import { View } from "react-native";
import LineOne from "../../../components/lineOne";
import ReportComponent from "../../../components/report";

interface RenderAvaliationPricesProps {
  firstTitle: string;
  firstPrice: number;
  secondTitle: string;
  secondPrice: number;
  thirdTitle: string;
  thirdPrice: number;
  fourthTitle: string;
  fourthPrice: number;
}

const RenderAvaliationPrices: React.FC<RenderAvaliationPricesProps> = (
  props
) => {
  const {
    firstTitle,
    firstPrice,
    secondTitle,
    secondPrice,
    thirdTitle,
    thirdPrice,
    fourthTitle,
    fourthPrice,
  } = props;
  return (
    <View>
      <ReportComponent
        type="avaliations"
        title={firstTitle}
        price={firstPrice}
      />
      <LineOne />
      <ReportComponent
        type="avaliations"
        title={secondTitle}
        price={secondPrice}
      />
      <LineOne />
      <ReportComponent
        type="avaliations"
        title={thirdTitle}
        price={thirdPrice}
      />
      <LineOne />
      <ReportComponent
        type="avaliations"
        title={fourthTitle}
        price={fourthPrice}
      />
    </View>
  );
};

export default RenderAvaliationPrices;
