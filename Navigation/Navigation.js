import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import SettingsStack from "../Navigation/SettingsStack";

import UsersStack from "../Navigation/UsersStack";
import PostsStack from "../Navigation/PostsStack";
import AlbumsStack from "../Navigation/AlbumsStack";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName;

            if (route.name === "users") {
              iconName = focused ? "user" : "user-o";
            } else if (route.name === "posts") {
              iconName = focused ? "envelope" : "envelope-o";
            } else if (route.name === "albums") {
              iconName = focused ? "folder" : "folder-o";
            }

            // You can return any component that you like here!
            return <Icon type="font-awesome" name={iconName} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "blue",
          inactiveTintColor: "black",
        }}
      >
        <Tab.Screen
          name="users"
          component={UsersStack}
          options={{ title: "Usuarios" }}
        ></Tab.Screen>
        <Tab.Screen
          name="posts"
          component={PostsStack}
          options={{ title: "Posts" }}
        ></Tab.Screen>
        <Tab.Screen
          name="albums"
          component={AlbumsStack}
          options={{ title: "Albums" }}
        ></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
