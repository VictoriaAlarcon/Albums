import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Settings from "../Screens/Settings/settings";
import Password from "../Screens/Settings/Password";
import { StackActions } from "@react-navigation/native";

const Stack = createStackNavigator();
export default function SettingsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="settings"
        component={Settings}
        options={{ title: "Config" }}
      ></Stack.Screen>
      <Stack.Screen
        name="password"
        component={Password}
        options={{ title: "Cambiar password" }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}
