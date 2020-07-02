import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Password from "./Password";

export default function Settings() {
  const navigation = useNavigation();
  return (
    <view>
      <text>Pantalla de settings</text>
      <Button
        title="Hola"
        onPress={() => navigation.navigate("password")}
      ></Button>
    </view>
  );
}
