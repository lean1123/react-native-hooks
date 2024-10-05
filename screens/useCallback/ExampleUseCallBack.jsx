import React, { useState } from "react";
import { Button, View, Text } from "react-native";

function ExampleuseCallBack() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <View>
      <Text>{count}</Text>
      <Button title="Increment" onPress={increment} />
    </View>
  );
}

export default ExampleuseCallBack;
