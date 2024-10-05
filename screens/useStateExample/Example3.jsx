import { View, Text, Button } from "react-native";
import React from "react";

const calculateInitialValue = () => {
  console.log("Calculating initial value...");
  return Math.floor(Math.random() * 100);
};

const Example3 = () => {
  const [count, setCount] = React.useState(calculateInitialValue);
  return (
    <View style={{ padding: 20 }}>
      <Text>Initial random count: {count}</Text>
      <Button title="Increase" onPress={() => setCount(count + 1)} />
      <Button title="Reset" onPress={() => setCount(calculateInitialValue())} />
    </View>
  );
};

export default Example3;
