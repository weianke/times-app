import React from "react";
import { SafeAreaView } from "react-native";

const Content = ({ children }: any) => {
  return (
    <SafeAreaView className="flex-1 px-5 py-3 mt-16">{children}</SafeAreaView>
  );
};

export default Content;
