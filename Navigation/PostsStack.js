import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Settings from "../Screens/Settings/settings";
import Password from "../Screens/Settings/Password";
import { StackActions } from "@react-navigation/native";
import Lista from "../Screens/Posts/Lista";

const Stack = createStackNavigator();
export default function SettingsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="posts"
        component={Lista}
        options={{ title: "Post" }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}
