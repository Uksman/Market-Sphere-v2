// CustomDrawerContent.js
import React from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useUser } from "@clerk/clerk-expo";
import { DrawerItemList } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import Drawerlogo from "../../../assets/mks-high-resolution-logo.png";

const DrawerContent = (props) => {
  const { user } = useUser();
  const navigation = useNavigation();
  const closeDrawer = () => {
    navigation.goBack();
  };

  return (
    <View className="flex-1">
      <ImageBackground
        source={Drawerlogo}
        className="w-full h-64 object-contain"
      >
        <TouchableOpacity className="p-3 pt-8" onPress={closeDrawer}>
          <Ionicons name="close-outline" size={27} color={"black"} />
        </TouchableOpacity>
        {/* <View className="p-3 items-center">
          <Image
            className="w-20  h-20 rounded-full"
            source={{ uri: user.imageUrl }}
          />
          <Text className="font-bold text-xl">{user.fullName}</Text>
        </View> */}
      </ImageBackground>
      <View className="mt-8">
        <DrawerItemList {...props} />
      </View>

      <View className="items-center justify-center mt-96">
        <View className="flex-row">
          <Text className="text-lg font-bold text-gray-300">Market</Text>
          <Text className="text-orange-500 font-bold text-lg">Sphere</Text>
        </View>
        <Text className="text-gray-300">Version 2.0.2</Text>
      </View>
    </View>
  );
};

export default DrawerContent;
