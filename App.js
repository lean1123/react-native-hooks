import { StyleSheet, View } from "react-native";
// import Example3 from "./screens/useStateExample/Example3";
import ExampleUseState2 from "./screens/useStateExample/ExampleUseState2";
import CounterApp from "./screens/useStateExample/CounterApp";
import Example1 from "./screens/useEfectExample/Example1";
import Example2 from "./screens/useEfectExample/Example2";
// import Example3 from "./screens/useEfectExample/Example3";
import DemoFetchApi from "./screens/useEfectExample/DemoFetchApi";
import Example4 from "./screens/useEfectExample/Example4";
import Example5 from "./screens/useEfectExample/Example5";
import EventListeningComponent from "./screens/useEfectExample/Example6";
import MyComponent from "./screens/useRef/TimerComponent";
import TimerComponent from "./screens/useRef/TimerComponent";
import Example3 from "./screens/useRef/Example3";
import RootApp from "./screens/useContext/RootApp";
import Counter from "./screens/useReducer/Counter";
import DemoUseMemoComponent from "./screens/useMemo/DemoUseMemoComponent";
import ItemList from "./screens/useMemo/ItemList";
import ExampleuseCallBack from "./screens/useCallback/ExampleUseCallBack";
import HandleTextInput from "./screens/handleInput/HandleTextInput";
// import MyComponent from "./screens/useRef/MyComponent";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" /> */}
      {/* <CounterApp /> */}
      {/* <ExampleUseState2 /> */}
      {/* <Example3 /> */}
      {/* <Example1 /> */}
      {/* <Example2 /> */}
      {/* <Example3 /> */}
      {/* <DemoFetchApi /> */}
      {/* <Example4 /> */}
      {/* <Example5 /> */}
      {/* <EventListeningComponent /> */}
      {/* <MyComponent /> */}
      {/* <TimerComponent /> */}
      {/* <Example3 /> */}
      {/* <RootApp /> */}
      {/* <Counter /> */}
      {/* <DemoUseMemoComponent numbers={[1, 2, 3, 4, 5, 6]} /> */}
      {/* <ItemList /> */}
      {/* <ExampleuseCallBack /> */}
      <HandleTextInput />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
