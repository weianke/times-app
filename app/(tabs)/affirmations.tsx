import AppGradient from "@/components/AppGradient";
import React from "react";
import { ScrollView, Text, View } from "react-native";

const affirmations = () => {
  return (
    <View className="flex-1">
      <AppGradient colors={["#2E1f58", "#54426b", "#a790af"]}>
        <ScrollView>
          <Text>affirmations</Text>
        </ScrollView>
      </AppGradient>
    </View>
  );
};

export default affirmations;
