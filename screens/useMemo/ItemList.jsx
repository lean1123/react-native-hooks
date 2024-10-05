import { View, Text, FlatList } from "react-native";
import React, { useMemo } from "react";

const data = [
  { id: 1, product: "Apple", price: 100 },
  { id: 2, product: "Banana", price: 200 },
  { id: 3, product: "Orange", price: 300 },
  { id: 4, product: "Mango", price: 400 },
  { id: 5, product: "Pineapple", price: 500 },
  { id: 6, product: "Grapes", price: 600 },
  { id: 7, product: "Watermelon", price: 700 },
  { id: 8, product: "Strawberry", price: 800 },
  { id: 9, product: "Blueberry", price: 900 },
  { id: 10, product: "Raspberry", price: 1000 },
];

const ItemList = () => {
  const filteredData = useMemo(
    () => data.filter((item) => item.price > 500),
    [data]
  );
  return (
    <View>
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text>
            Product: {item.product}, Price: {item.price}
          </Text>
        )}
      />
    </View>
  );
};

export default ItemList;
