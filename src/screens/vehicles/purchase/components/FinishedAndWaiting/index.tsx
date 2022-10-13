import React, { memo } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { vehiclesAwaitingApprovalData } from "../../../../../../data";
import { Purchase } from "../../../../../../types";
import CardPurchase from "../../../../../components/cardPurchase";
import LoadMore from "../../../../../components/loadMore";
import { baseUrlImages } from "../../../../../constants/baseUrls";

interface FinishedAndAwaitingPurchaseTabProps {
  setCardOptionsVisible: (status: boolean) => void;
  setCarPlate: (carPlate: string) => void;
  setCardId: (id: string) => void;
  assessmentStatus: string;
  data: Purchase[];
}

const FinishedAndAwaitingPurchaseTab: React.FC<
  FinishedAndAwaitingPurchaseTabProps
> = (props) => {
  const {
    assessmentStatus,
    setCardOptionsVisible,
    setCardId,
    data,
    setCarPlate,
  } = props;
  const renderFinishedRegistrations = ({ item, index }: any) => (
    <CardPurchase
      assessorName={item.Avaliador}
      code={item.IdVeiculo}
      carYear={item.AnoModelo}
      evaluationDate={item.DataCadastro}
      licensePlate={item.Placa}
      vehicleImage={`${baseUrlImages}/${item.Imagem}`}
      vehicleName={`${item.Marca} ${item.Modelo}`}
      cardType="finished"
      onPressSignature={() => alert("Assinatura " + item.Avaliador)}
      onPressDots={() => {
        setCardId(item.IdVeiculo);
        setCarPlate(item.Placa);
        setCardOptionsVisible(true);
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
        setCardId(item.id);
        setCardOptionsVisible(true);
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
          data={data}
          keyExtractor={(item, index) => `${item}${index}`}
          renderItem={renderFinishedRegistrations}
          style={styles.awaitingApprovalList}
          extraData={data}
          contentContainerStyle={{ paddingBottom: "100%" }}
          maxToRenderPerBatch={5}
          initialNumToRender={10}
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
