import { View, Text } from "react-native";
import React from "react";
import { MyContext } from "./MyContext";
import ChildrenComponent from "./ChildrenComponent";

const value = { username: "thanhan0101", id: "10023" };

const RootApp = () => {
  return (
    <MyContext.Provider value={value}>
      <ChildrenComponent />
    </MyContext.Provider>
  );
};

export default RootApp;
