import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, ScrollView } from "react-native";
import { ListItem } from "react-native-elements";

export default function Lista() {
  const [isLoading, setLoading] = useState(true);
  const [objeto, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  function renderItem({ item }) {
    return (
      <ListItem
        title={item.name}
        subtitle={item.email}
        leftAvatar={{ icon: { name: "user", type: "font-awesome" } }}
        bottomDivider
        chevron
      />
    );
  }

  return (
    <ScrollView style={{ flex: 1, padding: 24 }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={objeto}
          keyExtractor={({ id }, index) => id}
          renderItem={renderItem}
        />
      )}
    </ScrollView>
  );
}
