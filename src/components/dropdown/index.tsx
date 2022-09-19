import React, { useState } from "react";
import { TouchableOpacity, Text } from "react-native";
import { Menu, TextInput } from "react-native-paper";
import COLORS from "../../constants/colors";
import ChevronDownIcon from "../../icons/chevronDown";
import InputComponent from "../input";
import InputLayout from "../inputLayout";
import styles from "./styles";

type DropdownProps = {
  title: string;
  value: string;
  styleMenu?: any;
  required?: boolean;
  placeholder?: string;
  content: object[] | string[];
  errorMessage?: string | string[];
  errors?: any;
  touched?: any;
  onPressMenuItem: (item: string) => void;
};

const Dropdown: React.FC<DropdownProps> = (props) => {
  const {
    title,
    value,
    errors,
    touched,
    content,
    required,
    styleMenu,
    placeholder,
    errorMessage,
    onPressMenuItem,
  } = props;
  const [open, setOpen] = useState(false);

  return (
    <Menu
      visible={open}
      onDismiss={() => setOpen(false)}
      style={[styles.menuStyle, styleMenu]}
      contentStyle={styles.contentMenuStyle}
      anchor={
        <InputLayout
          title={title}
          required={required}
          errorMessage={errorMessage}
          style={styles.marginTop20}
        >
          <TouchableOpacity activeOpacity={0.5} onPress={() => setOpen(true)}>
            <InputComponent
              mode="flat"
              underlineColor="transparent"
              activeUnderlineColor="transparent"
              placeholder={placeholder}
              value={value}
              editable={false}
              right={
                <TextInput.Icon
                  onPress={() => setOpen(true)}
                  style={styles.opacity}
                  name={() => <ChevronDownIcon />}
                  color={COLORS.black}
                  size={24}
                  rippleColor={"white"}
                />
              }
              activeOutlineColor={"transparent"}
              outlineColor={"transparent"}
            />
          </TouchableOpacity>
          {errors && touched && (
            <Text style={styles.error}>{errorMessage}</Text>
          )}
        </InputLayout>
      }
    >
      {!!content &&
        content?.map((item: string, index: number) => (
          <Menu.Item
            key={`${item}-${index}`}
            style={styles.menuItem}
            contentStyle={styles.menuItemContent}
            title={item}
            onPress={() => {
              onPressMenuItem(item);
              setOpen(false);
            }}
          />
        ))}
    </Menu>
  );
};

export default Dropdown;
