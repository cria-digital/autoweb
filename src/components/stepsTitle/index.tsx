import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { IconButton } from "react-native-paper";
import COLORS from "../../constants/colors";

interface StepsTitleProps {
  title: string;
  allRequired?: boolean;
}

const StepsTitle: React.FC<StepsTitleProps> = (props) => {
  const { title, allRequired } = props;
  return (
    <View>
      <View style={styles.row}>
        <Text style={styles.text}>{title}</Text>
        {allRequired && (
          <IconButton
            icon={"information"}
            color={COLORS.primary}
            size={12}
            style={{ margin: 0 }}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    paddingVertical: 4,
    paddingHorizontal: 16,
    borderBottomWidth: 3,
    borderBottomColor: COLORS.primary,
    fontFamily: "RalewaySemiBold",
    fontSize: 12,
    color: COLORS.black,
  },
});

export default StepsTitle;
