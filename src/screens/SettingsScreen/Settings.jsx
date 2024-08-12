import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const Settings = () => {
  const navigation = useNavigation();

  const notificationSettings = () => {};
  const goToMyItem = () => {
    navigation.navigate("MyItems");
  };
  const goToLanguage = () => {};
  const goToInbox = () => {
    console.log("Inbox");
  };
  const goToVocher = () => {
    console.log("Vocher");
  };
  const goToFollowSeller = () => {
    console.log("FollowSeller");
  };

  const settingsItems = [
    {
      icon: "manage-accounts",
      text: "Notification Settings",
      action: notificationSettings,
    },
    { icon: "help", text: "Theme", action: goToMyItem },
    { icon: "my-location", text: "Language", action: goToLanguage },
    { icon: "favorite", text: "Clear Cache", action: goToInbox },
    { icon: "help", text: "Delete Account", action: goToVocher },
    { icon: "help", text: "Follow Seller", action: goToFollowSeller },
  ];

  const renderItems = ({ icon, text, action }) => {
    return (
      <View className="border-gray-300 border-b p-4">
        <TouchableOpacity
          className="items-center flex-1 justify-between flex-row"
          onPress={action}
        >
          <View className="flex-row items-center gap-5">
            <MaterialIcons name={icon} size={24} color="rgb(255,89,9)" />
            <Text>{text}</Text>
          </View>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={24}
            color="rgb(255,89,9)"
          />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <ScrollView className="bg-white py-10 flex-1">
      <View className="p-5 mt-[-20px] flex-1 bg-white rounded-t-3xl shadow-2xl">
        {settingsItems.map((item, index) => (
          <View key={index}>{renderItems(item)}</View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Settings;
