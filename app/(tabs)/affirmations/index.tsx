import AppGradient from "@/components/AppGradient";
import GuideAffirmationsGallery from "@/components/GuideAffirmationsGallery";
import AFFIRMATION_GALLERY from "@/constants/affirmation-gallary";
import React from "react";
import { ScrollView, Text, View } from "react-native";

const affirmations = () => {
  return (
    <View className="flex-1">
      <AppGradient colors={["#2E1f58", "#54426b", "#a790af"]}>
        <ScrollView>
          <Text className="text-zinc-50 text-3xl font-bold pl-2">
            用肯定改变你的信念
          </Text>
          <View>
            {AFFIRMATION_GALLERY.map((g: any) => (
              <GuideAffirmationsGallery
                key={g.title}
                title={g.title}
                previews={g.data}
              />
            ))}
          </View>
        </ScrollView>
      </AppGradient>
    </View>
  );
};

export default affirmations;
