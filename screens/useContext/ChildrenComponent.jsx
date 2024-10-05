import { View, Text } from "react-native";
import React, { useContext } from "react";
import { MyContext } from "./MyContext";

const ChildrenComponent = () => {
  const value = useContext(MyContext);
  return (
    <View>
      <Text>Id: {value.id}</Text>
      <Text>Username: {value.username}</Text>
    </View>
  );
};

export default ChildrenComponent;
