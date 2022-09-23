import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { vehiclesAwaitingApprovalData } from "../../../../../data";
import Card from "../../../../components/card";

interface WaitingAndApprovedsProps {
  assessmentStatus: string;
  setCardOptionsVisible: (status: boolean) => void;
  setCardId: (id: number) => void;
}

const WaitingAndApproveds: React.FC<WaitingAndApprovedsProps> = (props) => {
  const { assessmentStatus, setCardOptionsVisible, setCardId } = props;
  const renderAwaitingApproval = ({ item, index }: any) => (
    <Card
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
  const renderReproveds = ({ item, index }: any) => (
    <Card
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
      cardType="reproved"
      reprovedMotive={
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam efficitur id ante pellentesque porttitor. Sed elementum odio eget arcu scelerisque porta."
      }
    />
  );
  return (
    <View>
      {assessmentStatus === "Waiting" ? (
        <FlatList
          data={vehiclesAwaitingApprovalData}
          keyExtractor={(item, index) => `${item}${index}`}
          renderItem={renderAwaitingApproval}
          style={styles.awaitingApprovalList}
          extraData={vehiclesAwaitingApprovalData}
          maxToRenderPerBatch={5}
        />
      ) : (
        <FlatList
          data={vehiclesAwaitingApprovalData}
          keyExtractor={(item, index) => `${item}${index}`}
          renderItem={renderReproveds}
          style={styles.awaitingApprovalList}
          extraData={vehiclesAwaitingApprovalData}
          maxToRenderPerBatch={5}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  awaitingApprovalList: {
    marginHorizontal: -18,
    borderTopWidth: 1,
    borderTopColor: "rgba(0, 0, 0, 0.04)",
  },
});

export default WaitingAndApproveds;
