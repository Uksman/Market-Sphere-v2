import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();
  return (
    <View className="bg-orange-600 p-4 pt-14 rounded-b-3xl h-48">
      <View className="items-center justify-center flex-row gap-x-24">
        <TouchableOpacity className="" onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu-outline" size={30} color="white" />
        </TouchableOpacity>
        <View className="flex-row">
          <Text className="text-2xl font-bold text-white">Market</Text>
          <Text className="text-orange-950 font-bold text-2xl">Sphere</Text>
        </View>
        <View className="flex-row gap-x-1">
          <TouchableOpacity>
            <Ionicons name="barcode-outline" size={25} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="notifications" size={25} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <View className="mt-7 flex-row gap-x-2">
        <TextInput
          className="px-7 w-96 rounded-lg bg-white"
          placeholder="Search.."
        />
        <Ionicons
          style={{ backgroundColor: "white", padding: 4, borderRadius: 8 }}
          name="search"
          size={25}
          color="black"
        />
      </View>
    </View>
  );
};

export default Header;
