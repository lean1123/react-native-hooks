import React, { useMemo } from "react";
import { View, Text } from "react-native";

function DemoUseMemoComponent({ numbers }) {
  // This function will run every time the component renders
  //   const sum = numbers.reduce((acc, curr) => acc + curr, 0);

  const sum = useMemo(() => {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }, [numbers]);

  return (
    <View>
      <Text>Sum: {sum}</Text>
    </View>
  );
}

export default DemoUseMemoComponent;
