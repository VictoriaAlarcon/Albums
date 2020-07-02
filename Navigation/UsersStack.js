import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Settings from "../Screens/Settings/settings";
import Password from "../Screens/Settings/Password";
import { StackActions } from "@react-navigation/native";
import Lista from "../components/Lista";

const Stack = createStackNavigator();
export default function SettingsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="lista"
        component={Lista}
        options={{ title: "usuarios" }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}
