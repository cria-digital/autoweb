import React from "react";
import { View, Text } from "react-native";
import { IconButton } from "react-native-paper";
import COLORS from "../../../../constants/colors";
import styles from "./styles";

interface RenderChecklistDocsProps {}

const RenderChecklistDocs: React.FC<RenderChecklistDocsProps> = (props) => {
  const IconCheck = () => (
    <IconButton
      icon="check"
      color={"white"}
      size={10}
      style={{ margin: 0, backgroundColor: COLORS.green }}
    />
  );
  return (
    <View style={[styles.container]}>
      <Text style={[styles.textTitle12, { marginTop: 24, marginBottom: 14 }]}>
        Recibo de compra
      </Text>

      <View style={styles.checkedIconContainer}>
        <IconCheck />
        <Text style={[styles.normalText, { marginLeft: 10 }]}>
          Exibir cópias de arquivos no recibo da compra
        </Text>
      </View>

      <View style={styles.checkedIconContainer}>
        <IconCheck />
        <Text style={[styles.normalText, { marginLeft: 10 }]}>CNH</Text>
      </View>

      <View style={styles.checkedIconContainer}>
        <IconCheck />
        <Text style={[styles.normalText, { marginLeft: 10 }]}>CPF</Text>
      </View>

      <View style={styles.checkedIconContainer}>
        <IconCheck />
        <Text style={[styles.normalText, { marginLeft: 10 }]}>
          Documento de quitação
        </Text>
      </View>
      <Text style={[styles.normalText, { marginTop: 10 }]}>Observações</Text>
      <Text style={[styles.textTitle12, { marginBottom: 72 }]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        posuere risus in erat semper, vel congue elit vehicula. Fusce sed
        facilisis augue. Morbi laoreet fringilla metus, sed dignissim sem
        finibus eget.
      </Text>
    </View>
  );
};

export default RenderChecklistDocs;
