import { View, Text } from "react-native";
import React, { useEffect } from "react";

const Example4 = () => {
  useEffect(() => {
    const handleResize = () => {
      console.log("Resized");
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <View>
      <Text>Example4</Text>
    </View>
  );
};

export default Example4;
