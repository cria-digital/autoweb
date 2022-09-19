import React from "react";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import Dropdown from "../dropdown";
import InputComponent from "../input";
import InputLayout from "../inputLayout";

interface DoubleDropdownProps {
  leftTitle: string;
  rightTitle: string;
  leftPlaceholder: string;
  rightPlaceholder: string;
  style?: any;
  leftHasInput?: boolean;
  rightHasInput?: boolean;
  leftContent: any;
  rightContent: any;
  leftValue: string;
  rightValue: string;
  leftRequired?: boolean;
  rightRequired?: boolean;
  leftErrors?: any;
  rightErrors?: any;
  leftTouched?: any;
  rightTouched?: any;
  leftErrorMessage?: any;
  rightErrorMessage?: any;
  onPressLeftMenuItem: (item: string) => void;
  onPressRightMenuItem: (item: string) => void;
}

const DoubleDropdown: React.FC<DoubleDropdownProps> = (props) => {
  const {
    style,
    leftTitle,
    rightTitle,
    leftHasInput,
    rightHasInput,
    leftPlaceholder,
    rightPlaceholder,
    leftContent,
    rightContent,
    leftValue,
    rightValue,
    leftErrorMessage,
    leftErrors,
    leftTouched,
    rightErrorMessage,
    rightErrors,
    rightTouched,
    onPressLeftMenuItem,
    onPressRightMenuItem,
    leftRequired,
    rightRequired,
  } = props;
  const { width } = useWindowDimensions();
  const containerStyle = () => {
    return {
      flexDirection: "row",
      justifyContent: "space-between",
      maxWidth: width,
    };
  };
  return (
    <View style={[containerStyle()!!, style]}>
      <View style={styles.dropWidth}>
        {!leftHasInput ? (
          <Dropdown
            styleMenu={{
              left: -18,
            }}
            required={leftRequired}
            title={leftTitle}
            placeholder={leftPlaceholder}
            content={leftContent}
            onPressMenuItem={onPressLeftMenuItem}
            value={leftValue}
            errors={leftErrors}
            touched={leftTouched}
            errorMessage={leftErrorMessage}
          />
        ) : (
          <InputLayout
            required={leftRequired}
            title={leftTitle}
            error={leftErrors}
            touched={leftTouched}
            errorMessage={leftErrorMessage}
          >
            <InputComponent
              mode="flat"
              value={leftValue}
              placeholder={leftPlaceholder}
              onChangeText={onPressLeftMenuItem}
            />
          </InputLayout>
        )}
      </View>
      <View style={styles.dropWidth}>
        {!rightHasInput ? (
          <Dropdown
            styleMenu={{
              left: -18,
            }}
            required={rightRequired}
            title={rightTitle}
            placeholder={rightPlaceholder}
            content={rightContent}
            onPressMenuItem={onPressRightMenuItem}
            value={rightValue}
            errors={rightErrors}
            touched={rightTouched}
            errorMessage={rightErrorMessage}
          />
        ) : (
          <InputLayout
            required={rightRequired}
            title={rightTitle}
            error={rightErrors}
            touched={rightTouched}
            errorMessage={rightErrorMessage}
          >
            <InputComponent
              mode="flat"
              value={rightValue}
              placeholder={rightPlaceholder}
              onChangeText={onPressRightMenuItem}
            />
          </InputLayout>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dropWidth: { width: "48%" },
});

export default DoubleDropdown;
