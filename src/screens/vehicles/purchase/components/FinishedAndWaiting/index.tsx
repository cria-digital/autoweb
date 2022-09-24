import React, { memo } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { vehiclesAwaitingApprovalData } from "../../../../../../data";
import CardPurchase from "../../../../../components/cardPurchase";
import LoadMore from "../../../../../components/loadMore";

interface FinishedAndAwaitingPurchaseTabProps {
  assessmentStatus: string;
  setCardOptionsVisible: (status: boolean) => void;
  setCardId: (id: number) => void;
}

const FinishedAndAwaitingPurchaseTab: React.FC<
  FinishedAndAwaitingPurchaseTabProps
> = (props) => {
  const { assessmentStatus, setCardOptionsVisible, setCardId } = props;
  const renderFinishedRegistrations = ({ item, index }: any) => (
    <CardPurchase
      assessorName={item.assessorName}
      code={item.code}
      carYear={item.carYear}
      evaluationDate={item.evaluationDate}
      licensePlate={item.licensePlate}
      vehicleImage={item.vehicleImage[0]}
      vehicleName={item.vehicleName}
      cardType="finished"
      onPressSignature={() => alert("Assinatura " + item.signature)}
      onPressDots={() => {
        setCardOptionsVisible(true);
        setCardId(item.id);
      }}
    />
  );
  const renderPendings = ({ item, index }: any) => (
    <CardPurchase
      assessorName={item.assessorName}
      code={item.code}
      carYear={item.carYear}
      evaluationDate={item.evaluationDate}
      licensePlate={item.licensePlate}
      vehicleImage={item.vehicleImage[0]}
      vehicleName={item.vehicleName}
      carValue={item.carValue}
      onPressDots={() => {
        setCardOptionsVisible(true);
        setCardId(item.id);
      }}
      cardType="waiting"
      reprovedMotive={
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam efficitur id ante pellentesque porttitor. Sed elementum odio eget arcu scelerisque porta."
      }
    />
  );
  return (
    <View>
      {assessmentStatus === "Finished" ? (
        <FlatList
          data={vehiclesAwaitingApprovalData}
          keyExtractor={(item, index) => `${item}${index}`}
          renderItem={renderFinishedRegistrations}
          style={styles.awaitingApprovalList}
          extraData={vehiclesAwaitingApprovalData}
          contentContainerStyle={{ paddingBottom: "100%" }}
          maxToRenderPerBatch={5}
          onEndReachedThreshold={0.5}
          ListFooterComponent={() => <LoadMore />}
          scrollEnabled
        />
      ) : (
        <FlatList
          data={vehiclesAwaitingApprovalData}
          keyExtractor={(item, index) => `${item}${index}`}
          renderItem={renderPendings}
          style={styles.awaitingApprovalList}
          extraData={vehiclesAwaitingApprovalData}
          contentContainerStyle={{ paddingBottom: "100%" }}
          maxToRenderPerBatch={5}
          onEndReachedThreshold={0.5}
          ListFooterComponent={() => <LoadMore />}
          scrollEnabled
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

export default FinishedAndAwaitingPurchaseTab;
