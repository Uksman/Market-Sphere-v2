import { View, Text, Image } from "react-native";
import React from "react";
import Drawerlogo from "../../../assets/muted.png";

const Notifications = () => {
  return (
    <View className="flex-1">
      <Text>Notifications</Text>
      <View className="flex-1 items-center justify-center">
        <Image className="w-80  h-96 mb-3" source={Drawerlogo} />
        <Text className="text-3xl font-bold">No Notifications yet</Text>
        <Text className="text-lg text-gray-500 text-center w-72 mt-2">
          Your Notifications will appear here once you've recevied them
        </Text>
      </View>
    </View>
  );
};

export default Notifications;
