import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
  Alert,
  Share,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useUser } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import {
  collection,
  getFirestore,
  query,
  where,
  deleteDoc,
  getDocs,
} from "firebase/firestore";
import { app } from "../../../firebaseConfig";
import Reviews from "../../components/ItemsDetails/Reviews";
import SimlarItems from "../../components/ItemsDetails/SimlarItems";
import MoreSellerItems from "../../components/ItemsDetails/MoreSellerItems";

const ItemDetails = ({ navigation }) => {
  const { user } = useUser();
  const { params } = useRoute();
  const db = getFirestore(app);
  const [item, setItem] = useState([]);
  const nav = useNavigation();

  useEffect(() => {
    console.log(params);
    setItem(params.item || {});
    shareBtn();
  }, [params, navigation]);

  // Share item
  const shareBtn = () => {
    navigation.setOptions({
      headerRight: () => (
        <Ionicons
          onPress={() => shareItem()}
          name="share-social-outline"
          size={27}
          color="white"
        />
      ),
    });
  };

  const shareItem = async () => {
    try {
      await Share.share({
        title: item.title,
        message:
          item.title +
          "\n" +
          "\n" +
          item.desc +
          "\n" +
          "\n" +
          "Price: " +
          item.price +
          "\n" +
          "\n" +
          item.image,
      });
    } catch (error) {
      console.error("Error sharing item:", error);
    }
  };
  // sending the message to the owner
  const sendMessage = () => {
    const subject = "Concerning " + item.title;
    const body =
      "Hi " +
      item.userName +
      "\n" +
      "I'm interested in this item: " +
      "\n" +
      item.title +
      "\n" +
      item.image;

    Linking.openURL(
      "mailto: " + item.userEmail + "?subject=" + subject + "&body=" + body
    );
  };
  // delete user post
  const deleteUserPost = async () => {
    Alert.alert(
      `Delete this Item: ${item.title}`,
      "Are you sure you want to delete",
      [
        {
          text: "Yes",
          onPress: async () => {
            try {
              const q = query(
                collection(db, "userPost"),
                where("title", "==", item.title)
              );
              const snapshot = await getDocs(q);
              snapshot.forEach(async (doc) => {
                await deleteDoc(doc.ref);
                nav.goBack();
              });
            } catch (error) {
              console.error("Error deleting item:", error);
            }
          },
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel"),
          style: "cancel",
        },
      ],
      { cancelable: true }
    );
  };
  return (
    <ScrollView className="flex-1 bg-white">
      <Image className="w-full h-96" source={{ uri: item.image }} />
      <View className="p-5 mt-[-20px] bg-white rounded-t-3xl shadow-2xl">
        <View className="my-2 flex-row justify-between">
          <Text className="text-[#797979] font-semibold">{item.category}</Text>
          <MaterialIcons
            name="favorite-outline"
            size={24}
            color="rgb(255,89,9)"
          />
        </View>
        <Text className="text-2xl font-bold">{item.title}</Text>
        <Text className="font-medium mt-3 text-lg">${item.price}</Text>

        <Text className="mt-4 font-bold text-lg">Description</Text>
        <Text className="my-4 mb-10 ">{item.desc}</Text>

        {/* user who posted */}
        <Text className="font-semibold mb-2 text-lg">Seller</Text>
        <View className="flex-row items-center justify-between">
          <View className="flex flex-row gap-3">
            <Image
              className="w-11 bg-orange-500 h-11 rounded-full"
              source={{ uri: item.userImage }}
            />
            <View>
              <Text className=" text- font-bold">{item.userName}</Text>
              <Text className="text-gray-400 text-sm">{item.userEmail}</Text>
            </View>
          </View>
          {user.primaryEmailAddress.emailAddress == item.userEmail ? (
            <View className="flex-row gap-4">
              <TouchableOpacity
                onPress={() => deleteUserPost()}
                className="bg-slate-200 justify-center p-3 items-center rounded-3xl"
              >
                <MaterialIcons name="delete" size={20} color="rgb(255,89,9)" />
              </TouchableOpacity>
            </View>
          ) : (
            <View className="flex-row gap-4">
              <TouchableOpacity
                onPress={() => sendMessage()}
                className="bg-slate-200 justify-center p-3 items-center rounded-3xl"
              >
                <MaterialIcons name="message" size={20} color="rgb(255,89,9)" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => sendMessage()}
                className="bg-slate-200 p-3 items-center rounded-3xl"
              >
                <Ionicons name="call" size={20} color="rgb(255,89,9)" />
              </TouchableOpacity>
            </View>
          )}
        </View>

        {/* the reviews section */}
        <Reviews />

        {/* this is the similar items section */}
        <SimlarItems
          currentItemCategory={item.category}
          currentItemID={item.id}
        />
        {/* More of the seller items section */}

        <MoreSellerItems
          moreSellerItems={item.userEmail}
          currentItemID={item.id}
        />
      </View>
    </ScrollView>
  );
};

export default ItemDetails;
