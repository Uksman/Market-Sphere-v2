import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  getFirestore,
  orderBy,
  query,
} from "firebase/firestore";
import { app } from "../../../firebaseConfig";
import LatestItem from "../../components/Home/LatestItem";
import { useNavigation } from "@react-navigation/native";

const Discover = () => {
  const navigation = useNavigation();

  const db = getFirestore(app);
  const [itemLists, setItemList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unsubcribe = navigation.addListener("focus", (e) => {
      getAllItems();
    });
    return unsubcribe;
  }, [navigation]);

  const getAllItems = async () => {
    setItemList([]);
    setLoading(true);
    const q = query(collection(db, "userPost"), orderBy("timeCreated", "desc"));
    const snapshot = await getDocs(q);
    setLoading(false);
    const Items = [];
    snapshot.forEach((doc) => {
      Items.push(doc.data());
      setLoading(false);
    });
    setItemList(Items);
  };

  return (
    <View className="py-5 mb-11">
      <Text className=" px-5 font-bold text-xl">Discore More</Text>
      {loading ? (
        <ActivityIndicator
          className="mt-64"
          size="large"
          color={"rgb(255,89,9)"}
        />
      ) : itemLists.length > 0 ? (
        <LatestItem latestItemList={itemLists} header={""} />
      ) : (
        <View className="flex mt-10 items-center justify-center">
          <Text className="text-slate-400 font-medium text-lg">
            Sorry No Posts Found
          </Text>
        </View>
      )}
    </View>
  );
};

export default Discover;
