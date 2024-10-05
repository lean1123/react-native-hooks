import { View, Text, Button } from "react-native";
import React from "react";

const randomDiceRoll = () => Math.floor(Math.random() * 6) + 1;

const ExampleUseState2 = () => {
  const [diceRoll, setDiceRoll] = React.useState([]);

  return (
    <View>
      <View style={{ padding: 20 }}>
        <Button
          title="Roll dice"
          onPress={() => setDiceRoll([...diceRoll, randomDiceRoll()])}
        />
      </View>
      {diceRoll.map((roll, index) => (
        <Text style={{ fontSize: 24 }} key={index}>
          {roll}
        </Text>
      ))}
    </View>
  );
};

export default ExampleUseState2;
