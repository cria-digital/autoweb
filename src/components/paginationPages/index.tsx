import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import HorizontalPages from "../horizontalPages";

interface PaginationPagesProps {
  pages: string[] | any[];
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const PaginationPages: React.FC<PaginationPagesProps> = (props) => {
  const { pages, currentPage, setCurrentPage } = props;
  const renderPagination = ({ item, index }: any) => (
    <HorizontalPages
      key={index}
      actualPage={item}
      currentPage={currentPage}
      onPress={() => setCurrentPage(item)}
    />
  );
  return (
    <FlatList
      data={pages}
      renderItem={renderPagination}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item, index) => `${item}${index}`}
      style={styles.flatlist}
    />
  );
};

const styles = StyleSheet.create({
  flatlist: {
    marginTop: 32,
  },
});
export default PaginationPages;
