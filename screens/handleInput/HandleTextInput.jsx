import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";

const HandleTextInput = () => {
  const [fullName, setFullName] = useState("");

  return (
    <View>
      <Text>Name: {fullName}</Text>
      <TextInput
        placeholder="Enter your name"
        onChangeText={setFullName}
        value={fullName}
      />
    </View>
  );
};

export default HandleTextInput;
