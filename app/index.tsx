import beachImage from "@/assets/meditation-images/beach.webp";
import AppGradient from "@/components/AppGradient";
import CustomButton from "@/components/CustomButton";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { ImageBackground, SafeAreaView, Text, View } from "react-native";

const App = () => {
  const router = useRouter();
  return (
    <View className="flex-1">
      <ImageBackground
        source={beachImage}
        resizeMode="cover"
        className="flex-1"
      >
        <AppGradient colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}>
          <SafeAreaView className="flex-1 px-1 mt-16 justify-between">
            <View>
              <Text className="text-white text-center font-bold text-4xl">
                冥想时间
              </Text>
              <Text className="text-white text-center text-regular text-2xl mt-3">
                冥想是为了让大家变得更好
              </Text>
            </View>
            <View>
              <CustomButton
                onPress={() => router.push("/nature-meditate")}
                title="开始冥想"
              />
            </View>
            <StatusBar style="light" />
          </SafeAreaView>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default App;
