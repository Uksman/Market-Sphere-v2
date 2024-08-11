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
  const goToSettings = () => {};
  const goToHelpCenter = () => {};
  const goTosignOut = () => {
    signOut(navigation.replace("Login"));
  };

  const profileItems = [
    { icon: "manage-accounts", text: "Account", action: goToEditProfile },
    { icon: "box", text: "My Items", action: goToMyItem },
    { icon: "my-location", text: "Manage Address", action: goToManageAddress },
    { icon: "favorite", text: "Saved Items", action: goToInbox },
    { icon: "gift", text: "Voucher", action: goToVocher },
    { icon: "user-follow", text: "Follow Seller", action: goToFollowSeller },
    { icon: "eye", text: "Recently Viewed", action: goToRecent },
    { icon: "settings", text: "Settings", action: goToSettings },
    { icon: "customerservice", text: "Help Center", action: goToHelpCenter },
    { icon: "power-settings-new", text: "LogOut", action: goTosignOut },
  ];

  const renderItems = ({ icon, text, action }) => {
    return (
      <View className="border-gray-500 border-b">
        <TouchableOpacity
          className="items-center flex-1 p-3 flex-row"
          onPress={action}
        >
          <View className="flex-row items-center gap-2">
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
        <TouchableOpacity className="p-3 rounded-full">
          <MaterialIcons name="arrow-left" size={24} color="rgb(255,89,9)" />
        </TouchableOpacity>
        <Text className="font-bold text-lg">Profile</Text>
      </View>
      <View className="p-3 items-center">
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
