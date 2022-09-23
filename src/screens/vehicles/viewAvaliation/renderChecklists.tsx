import React from "react";
import { View } from "react-native";
import LineOne from "../../../components/lineOne";
import ReportComponent from "../../../components/report";

interface RenderChecklistsProps {}
const RenderChecklistsAvaliations: React.FC<RenderChecklistsProps> = (
  props
) => {
  return (
    <View>
      <ReportComponent
        title="Mecânica"
        type="checklist"
        avaliation="Bom"
        price={100}
        observations="Observações"
      />
      <LineOne />
      <ReportComponent
        title="Tapeçaria"
        type="checklist"
        avaliation="Bom"
        price={100}
        observations="Observações"
      />
      <LineOne />
      <ReportComponent
        title="Pneus"
        type="checklist"
        avaliation="Bom"
        price={100}
        observations="Observações"
      />
      <LineOne />
      <ReportComponent
        title="Elétrica"
        type="checklist"
        avaliation="Bom"
        price={100}
        observations="Observações"
      />
      <LineOne />
      <ReportComponent
        title="Funilaria/Pintura"
        type="checklist"
        avaliation="Bom"
        price={100}
        observations="Observações"
      />
      <LineOne />
      <ReportComponent
        title="Martelinho"
        type="checklist"
        avaliation="Bom"
        price={100}
        observations="Observações"
      />
    </View>
  );
};

export default RenderChecklistsAvaliations;
