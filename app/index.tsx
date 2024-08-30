import beachImage from "@/assets/meditation-images/beach.webp";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ImageBackground, SafeAreaView, Text, View } from "react-native";

const App = () => {
  return (
    <View className="flex-1">
      <ImageBackground
        source={beachImage}
        resizeMode="cover"
        className="flex-1"
      >
        <LinearGradient
          className="flex-1"
          colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}
        >
          <SafeAreaView className="flex-1 px-1 justify-between">
            <Text className="text-white text-center font-bold text-4xl">
              冥想时间
            </Text>
            <Text className="text-white text-center text-regular text-2xl mt-3">
              冥想是为了让大家变得更好
            </Text>
          </SafeAreaView>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default App;
