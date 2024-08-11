import { View, Text, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import {
  collection,
  getFirestore,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { useUser } from "@clerk/clerk-expo";
import { app } from "../../../firebaseConfig";
import LatestItem from "../../components/Home/LatestItem";
import { useNavigation } from "@react-navigation/native";

const MyItems = () => {
  const db = getFirestore(app);
  const { user } = useUser();
  const navigation = useNavigation();
  const [myitemList, setMyItemList] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    user && getUserPosts();
  }, [user]);

  useEffect(() => {
    const unsubcribe = navigation.addListener("focus", (e) => {
      getUserPosts();
    });
    return unsubcribe;
  }, [navigation]);

  const getUserPosts = async () => {
    try {
      setMyItemList([]);
      setloading(true);
      const q = query(
        collection(db, "userPost"),
        where("userEmail", "==", user.primaryEmailAddress.emailAddress)
      );
      const snapshot = await getDocs(q);
      setloading(false);
      const Items = [];
      snapshot.forEach((doc) => {
        Items.push(doc.data());
        setloading(false);
      });
      setMyItemList(Items);
    } catch (error) {
      console.error("Failed to fetch user posts:", error);
    }
  };

  if (loading) {
    return (
      <ActivityIndicator
        className="mt-64"
        size="large"
        color={"rgb(255,89,9)"}
      />
    );
  }

  if (!myitemList.length > 0) {
    return (
      <View className="items-center justify-center flex-1">
        <Text className="text-lg font-semibold text-slate-400">
          Sorry You dont have any Item
        </Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-white">
      <Text>MyItems</Text>
      <LatestItem latestItemList={myitemList} />
    </View>
  );
};

export default MyItems;
