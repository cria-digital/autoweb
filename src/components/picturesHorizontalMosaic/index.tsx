import React from "react";
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
} from "react-native";

interface PicturesHorizontalMosaicProps {
  pictures: string[] | any[];
}

const PicturesHorizontalMosaic: React.FC<PicturesHorizontalMosaicProps> = (
  props
) => {
  const { pictures } = props;
  const RenderPictures = ({ item, index }: any) => (
    <TouchableOpacity key={index} style={styles.picture}>
      <Image
        source={{
          uri: item,
        }}
        style={styles.picture}
        resizeMode={"cover"}
      />
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={pictures}
        extraData={pictures}
        renderItem={RenderPictures}
        keyExtractor={(item, index) => `${item}${index}`}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  picture: {
    width: 140,
    height: 160,
    borderRadius: 8,
    marginRight: 12,
    marginTop: 16,
    marginBottom: 20,
  },
});

export default PicturesHorizontalMosaic;
