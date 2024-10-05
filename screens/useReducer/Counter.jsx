import { View, Text, Button } from "react-native";
import React, { useReducer } from "react";
import { initialState, reducer } from "./myReducer";

const Counter = () => {
  const [state, disPatch] = useReducer(reducer, initialState);

  return (
    <View>
      <Text>Count: {state.count}</Text>
      <Button
        title="Increment"
        onPress={() => disPatch({ type: "increment" })}
      />
      <Button
        title="Decrement"
        onPress={() => disPatch({ type: "decrement" })}
      />
    </View>
  );
};

export default Counter;
