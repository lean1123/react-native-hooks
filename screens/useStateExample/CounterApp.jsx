import { View, Text, Button } from "react-native";
import React, { useState } from "react";

const CounterApp = () => {
  const [count, setCount] = useState(0);
  return (
    <View style={{ padding: 20 }}>
      <Text>Count: {count}</Text>
      <Button
        style={{ marginBottom: 5 }}
        title="Increment"
        onPress={() => setCount(count + 1)}
      />
      <Button title="Decrement" onPress={() => setCount(count - 1)} />
    </View>
  );
};

export default CounterApp;
