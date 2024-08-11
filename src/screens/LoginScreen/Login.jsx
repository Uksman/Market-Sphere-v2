import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useWarmUpBrowser } from "../../../hooks/warmUpBrowser";
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

WebBrowser.maybeCompleteAuthSession;

const LoginScreen = () => {
  // const deviceWidth = Dimensions.get("window").width;
  useWarmUpBrowser();
  const navigation = useNavigation();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();
      if (createdSessionId) {
        setActive({ session: createdSessionId });
        navigation.replace("Home");
      } else {
      }
    } catch (error) {
      console.error("Failed to start OAuth flow:", error);
    }
  }, []);

  console.log(onPress);
  return (
    <View className="flex-1">
      <Image
        source={require("../../../assets/marketplace.jpg")}
        className="w-screen h-[650px] object-contain"
      />
      <View className="p-3 mt-[-20px] bg-white rounded-t-3xl flex-1 shadow-2xl">
        <Text className="text-3xl font-semibold mt-6 text-center">
          MarketSphere
        </Text>
        <Text className="text-[18px] mt-4 text-center text-slate-400">
          Discover the future of buying and selling with MarketSphere, the
          ultimate community marketplace for sustainable trading.
        </Text>
        <TouchableOpacity
          onPress={onPress}
          className="bg-orange-500 items-center gap-x-2 flex-row justify-center rounded-full mt-20 p-3 mx-2"
        >
          <Ionicons name="logo-google" size={20} />
          <Text className="text-lg text-center  text-white">
            Sign in Google
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
