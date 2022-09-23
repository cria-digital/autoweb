import React, { useEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import { vehiclesPaginationData } from "../../../data";
import Nav from "../../components/nav";
import PaginationPages from "../../components/paginationPages";
import VehiclesPage from "./components/vehiclesPage";
import GeneralTabScreen from "./general";
import InventoryTabScreen from "./inventory";
import PurchaseTabScreen from "./purchase";
import styles from "./styles";

const VehiclesScreen = ({ navigation, route }: any) => {
  const { navigate } = navigation;
  const userImage =
    "https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445__340.jpg";
  const [currentPage, setCurrentPage] = useState("Veículos");
  const [assessmentStatus, setAssessmentStatus] = useState("Waiting");

  return (
    <ScrollView style={styles.background}>
      <Nav userImage={userImage} />

      <View style={styles.container}>
        <PaginationPages
          currentPage={currentPage}
          pages={vehiclesPaginationData}
          setCurrentPage={setCurrentPage}
        />

        {currentPage === "Veículos" && (
          <VehiclesPage
            assessmentStatus={assessmentStatus}
            setAssessmentStatus={setAssessmentStatus}
            navigate={navigate}
          />
        )}
        {currentPage === "Compras" && (
          <PurchaseTabScreen navigation={navigation} />
        )}

        {currentPage === "Estoque" && (
          <InventoryTabScreen navigation={navigation} />
        )}
        {currentPage === "Geral" && (
          <GeneralTabScreen navigation={navigation} />
        )}
      </View>
    </ScrollView>
  );
};

export default VehiclesScreen;
