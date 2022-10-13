import React, { useEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import { vehiclesPaginationData } from "../../../data";
import MenuModal from "../../components/menuModal";
import Nav from "../../components/nav";
import PaginationPages from "../../components/paginationPages";
import VehiclesPage from "./components/vehiclesPage";
import GeneralTabScreen from "./general";
import InventoryTabScreen from "./inventory";
import PurchaseTabScreen from "./purchase";
import SellTabScreen from "./sell";
import styles from "./styles";

const VehiclesScreen = ({ navigation, route }: any) => {
  const { navigate } = navigation;
  const userImage =
    "https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445__340.jpg";
  const [currentPage, setCurrentPage] = useState("Veículos");
  const [assessmentStatus, setAssessmentStatus] = useState("Waiting");
  const [menuModal, setMenuModal] = useState(false);

  return (
    <View style={styles.background}>
      <Nav userImage={userImage} onPressMenu={() => setMenuModal(true)} />

      <View style={styles.container}>
        <View
          style={{ zIndex: 3, alignItems: "center", justifyContent: "center" }}
        >
          <PaginationPages
            currentPage={currentPage}
            pages={vehiclesPaginationData}
            setCurrentPage={setCurrentPage}
          />
        </View>

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
        {currentPage === "Vendas" && <SellTabScreen navigation={navigation} />}
        {currentPage === "Estoque" && (
          <InventoryTabScreen navigation={navigation} />
        )}
        {currentPage === "Geral" && (
          <GeneralTabScreen navigation={navigation} />
        )}
      </View>
      <MenuModal
        visible={menuModal}
        animationType="slide"
        onPressArrow={() => setMenuModal(false)}
        isFullScreen
      />
    </View>
  );
};

export default VehiclesScreen;
