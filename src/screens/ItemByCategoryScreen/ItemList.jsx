import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { app } from "../../../firebaseConfig";
import LatestItem from "../../components/Home/LatestItem";

const ItemList = () => {
  const { params } = useRoute();
  const db = getFirestore(app);
  const [itemByCategory, setItemByCategory] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    params && getItemListsByCategory();
  }, [params]);

  const getItemListsByCategory = async () => {
    setItemByCategory([]);
    setLoading(true);
    const q = query(
      collection(db, "userPost"),
      where("category", "==", params.category)
    );
    const snapshot = await getDocs(q);
    setLoading(false);
    const Items = [];
    snapshot.forEach((doc) => {
      Items.push(doc.data());
      setLoading(false);
    });
    setItemByCategory(Items);
  };
  return (
    <View className="flex-1">
      {loading ? (
        <ActivityIndicator
          className="mt-64"
          size="large"
          color={"rgb(255,89,9)"}
        />
      ) : itemByCategory.length > 0 ? (
        <LatestItem latestItemList={itemByCategory} header={""} />
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

export default ItemList;
