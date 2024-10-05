import { View, Text } from "react-native";
import React, { useEffect } from "react";

const Example5 = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Tick");
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View>
      <Text>Example5</Text>
    </View>
  );
};

export default Example5;
