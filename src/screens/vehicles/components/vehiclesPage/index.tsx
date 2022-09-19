import React, { memo, useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";
import { Menu, Provider } from "react-native-paper";
import { vehiclesAwaitingApprovalData } from "../../../../../data";
import CardComponent from "../../../../components/card";
import DoubleButtonsComponent from "../../../../components/doubleButtons";
import FilterButton from "../../../../components/filterButton";
import InputComponent from "../../../../components/input";
import RadioPagination from "../../../../components/radioPagination";
import COLORS from "../../../../constants/colors";
import MagnifyIcon from "../../../../icons/magnify";
import RightInputIcon from "../../../../icons/rightInputIcon";
import CardModal from "../cardModal";

interface VehiclesPageProps {
  assessmentStatus: string;
  setAssessmentStatus: (status: string) => void;
  navigate: any;
}

const VehiclesPage: React.FC<VehiclesPageProps> = (props) => {
  const { assessmentStatus, setAssessmentStatus, navigate } = props;
  const [cardOptionsVisible, setCardOptionsVisible] = useState(false);
  const [cardId, setCardId] = useState<number | null>(null);
  const renderAwaitingApproval = ({ item, index }: any) => (
    <CardComponent
      assessorName={item.assessorName}
      carValue={item.carValue}
      carYear={item.carYear}
      evaluationDate={item.evaluationDate}
      licensePlate={item.licensePlate}
      vehicleImage={item.vehicleImage[0]}
      vehicleName={item.vehicleName}
      onPressDots={() => {
        setCardOptionsVisible(true);
        setCardId(item.id);
      }}
    />
  );
  return (
    <Provider>
      <DoubleButtonsComponent
        labelLeft="Gerar relatório"
        labelRight="Cadastrar avaliação"
        onPressLeft={() => {}}
        onPressRight={() => navigate("RegisterAvaliation")}
      />

      <View style={styles.inputView}>
        <InputComponent
          mode="flat"
          right={RightInputIcon(
            () => (
              <MagnifyIcon color={"#000000"} />
            ),
            () => navigate("FilterVehicles")
          )}
        />
      </View>

      <FilterButton label="Filtrar" />

      <View style={styles.radioButtons}>
        <RadioPagination
          assessmentStatus={assessmentStatus}
          setAssessmentStatus={setAssessmentStatus}
        />
      </View>

      {assessmentStatus === "Waiting" ? (
        <>
          <FlatList
            data={vehiclesAwaitingApprovalData}
            keyExtractor={(item, index) => `${item}${index}`}
            renderItem={renderAwaitingApproval}
            style={styles.awaitingApprovalList}
            extraData={vehiclesAwaitingApprovalData}
            maxToRenderPerBatch={5}
          />

          <TouchableOpacity
            style={styles.loadMoreContainer}
            activeOpacity={0.5}
          >
            <Text style={styles.loadMore}>Carregar mais</Text>
          </TouchableOpacity>
        </>
      ) : null}
      <CardModal
        animationType="fade"
        visible={cardOptionsVisible}
        setVisible={setCardOptionsVisible}
        onPressMenuItems={(item: string) => {
          switch (item) {
            case "Visualizar":
              navigate("ViewAvaliation", {
                id: cardId,
              });
              break;
            case "Editar":
              alert("Trabalhando na edição");
              break;
            case "Aprovar/Reprovar":
              alert("Trabalhando na aprovação");
              break;
            case "Excluir":
              alert("excluir");
              break;
          }
        }}
      />
    </Provider>
  );
};

const styles = StyleSheet.create({
  inputView: {
    marginTop: 24,
    marginBottom: 16,
  },
  radioButtons: {
    marginVertical: 28,
  },
  awaitingApprovalList: {
    marginHorizontal: -18,
    borderTopWidth: 1,
    borderTopColor: "rgba(0, 0, 0, 0.04)",
  },
  loadMore: {
    textAlign: "center",
    color: COLORS.black,
    fontSize: 18,
    fontFamily: "Poppins",
    width: "auto",
  },
  loadMoreContainer: {
    marginVertical: 24,
  },
});

export default memo(VehiclesPage);
