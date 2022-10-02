import React from "react";
import { memo } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Avaliations } from "../../../../../types";
import Card from "../../../../components/card";
import LoadMore from "../../../../components/loadMore";
import { ApiBaseUrl } from "../../../../config/compra";
import { baseUrlImages } from "../../../../constants/baseUrls";

interface WaitingAndApprovedsProps {
  assessmentStatus: string;
  setCardOptionsVisible: (status: boolean) => void;
  setCardId: (id: string) => void;
  data: Avaliations[];
}

const WaitingAndApproveds: React.FC<WaitingAndApprovedsProps> = (props) => {
  const { assessmentStatus, setCardOptionsVisible, setCardId, data } = props;
  const renderAwaitingApproval = ({ item, index }: any) => (
    <Card
      assessorName={item.Avaliador}
      carValue={item.ValorAvaliacao}
      carYear={item.AnoModelo}
      evaluationDate={item.DataAvaliacao}
      licensePlate={item.Placa}
      vehicleImage={`${baseUrlImages}/${item.Imagem}`}
      vehicleName={`${item.Marca} ${item.Modelo}`}
      onPressDots={() => {
        setCardOptionsVisible(true);
        setCardId(item.idAvaliacao);
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
      vehicleImage={`${item.vehicleImage[0]}`}
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
          data={data}
          keyExtractor={(item, index) => `${item}${index}`}
          renderItem={renderAwaitingApproval}
          style={styles.awaitingApprovalList}
          extraData={data}
          contentContainerStyle={styles.containerStyle}
          initialNumToRender={1}
          onEndReachedThreshold={0.5}
          maxToRenderPerBatch={1}
          ListFooterComponent={() => <LoadMore />}
          scrollEnabled
        />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item, index) => `${item}${index}`}
          renderItem={renderReproveds}
          style={styles.awaitingApprovalList}
          extraData={data}
          contentContainerStyle={styles.containerStyle}
          maxToRenderPerBatch={5}
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
  containerStyle: {
    paddingBottom: "110%",
  },
});

export default memo(WaitingAndApproveds);
