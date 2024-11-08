import { TextInput, View, StyleSheet, KeyboardTypeOptions } from "react-native";
import { useState } from "react";
import EvilIcons from "@expo/vector-icons/EvilIcons";

import { color, shadow, size } from "@/constants/theme";
import Label from "./Label";
import styles from "@/constants/styles";

export default function Input({
  text,
  label,
  onChangeText,
  placeholder,
  keyboardType,
  icon,
}: {
  text: string;
  label?: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  icon?: "search";
}) {
  const [selected, setSelected] = useState(false);

  return (
    <View style={styles.containerPadding}>
      {label && <Label label={label} />}
      <View>
        <TextInput
          style={{
            ...style.textInput,
            ...(selected && shadow.small),
          }}
          value={text}
          onChangeText={onChangeText}
          placeholder={placeholder}
          keyboardType={keyboardType || "default"}
          onFocus={() => setSelected(true)}
          onBlur={() => setSelected(false)}
        />
        {icon && (
          <EvilIcons
            name={icon}
            size={24}
            color="black"
            style={{
              position: "absolute",
              right: size.small,
              top: size.large / 2,
            }}
          />
        )}
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  textInput: {
    height: size.large * 2,
    backgroundColor: color.gray1,
    borderRadius: size.large * 2,
    paddingLeft: size.small,
    paddingRight: size.small,
  },
});
