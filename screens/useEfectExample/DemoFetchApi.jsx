// https://659d64a5633f9aee79095521.mockapi.io/blog-api/users
import { View, Text, FlatList, Image } from "react-native";
import React, { useEffect } from "react";

const DemoFetchApi = () => {
  const [users, setUsers] = React.useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://659d64a5633f9aee79095521.mockapi.io/blog-api/users"
      );
      const data = await response.json();
      //   console.log(data);

      setUsers(data);
    };

    fetchData();
  }, []);
  return (
    <View>
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <View style={{ padding: 10 }}>
            <Image
              style={{ width: 40, height: 40 }}
              source={{ uri: item.avatar }}
            />
            <Text>
              User: {item.name} and ID: {item.id}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default DemoFetchApi;
