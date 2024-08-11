import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import { useAuth, useUser } from "@clerk/clerk-expo";
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const ProfileScreen = () => {
  const { user } = useUser();
  const { isLoaded, signOut } = useAuth();

  const navigation = useNavigation();

  if (!isLoaded) {
    return null;
  }

  const goToEditProfile = () => {};
  const goToMyItem = () => {
    navigation.navigate("MyItems");
  };
  const goToManageAddress = () => {};
  const goToInbox = () => {
    console.log("Inbox");
  };
  const goToVocher = () => {
    console.log("Vocher");
  };
  const goToFollowSeller = () => {
    console.log("FollowSeller");
  };
  const goToRecent = () => {
    console.log("recents");
  };
  const goToSettings = () => {
    navigation.navigate("Settings");
  };
  const goToHelpCenter = () => {};
  const goTosignOut = () => {
    signOut(navigation.replace("Login"));
  };

  const profileItems = [
    { icon: "manage-accounts", text: "Account", action: goToEditProfile },
    { icon: "help", text: "My Items", action: goToMyItem },
    { icon: "my-location", text: "Manage Address", action: goToManageAddress },
    { icon: "favorite", text: "Saved Items", action: goToInbox },
    { icon: "help", text: "Voucher", action: goToVocher },
    { icon: "help", text: "Follow Seller", action: goToFollowSeller },
    { icon: "help", text: "Recently Viewed", action: goToRecent },
    { icon: "settings", text: "Settings", action: goToSettings },
    { icon: "help", text: "Help Center", action: goToHelpCenter },
    { icon: "power-settings-new", text: "LogOut", action: goTosignOut },
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
      <View className="">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="px-2 rounded-full"
        >
          <MaterialIcons
            name="keyboard-arrow-left"
            size={35}
            color="rgb(255,89,9)"
          />
        </TouchableOpacity>
        <Text className="font-bold text-center text-xl mb-10">Profile</Text>
      </View>
      <View className="p-3 mb-4 items-center">
        <View className="">
          <Image
            className="w-20 h-20 rounded-full"
            source={{ uri: user.imageUrl }}
          />
        </View>
        <Text className="font-semibold text-xl">{user.fullName}</Text>
        <Text className="font-bold text-gray-300 text-xl">
          {user.primaryEmailAddress.emailAddress}
        </Text>
      </View>
      <View className="p-5 mt-[-20px] flex-1 bg-white rounded-t-3xl shadow-2xl">
        {profileItems.map((item, index) => (
          <View key={index}>{renderItems(item)}</View>
        ))}
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
