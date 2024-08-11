import { View, Text, Dimensions, Image } from "react-native";
import React, { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { app } from "../../../firebaseConfig";
import Carousel from "react-native-reanimated-carousel";

const MoreSellerItems = ({ moreSellerItems }) => {
  const width = Dimensions.get("screen").width;
  const [sellerItem, setSellerItem] = useState([]);
  const db = getFirestore(app);
  useEffect(() => {
    getSellerItem();
  }, []);

  const getSellerItem = async () => {
    setSellerItem([]);
    const q = query(
      collection(db, "userPost"),
      where("userEmail", "==", moreSellerItems)
    );
    const snapshot = await getDocs(q);
    const Items = [];
    snapshot.forEach((doc) => {
      Items.push(doc.data());
    });
    setSellerItem(Items);
  };
  return (
    <View>
      <Text>More items from this seller</Text>
      <Carousel
        // loop
        width={width}
        height={width / 2}
        // autoPlay={true}
        // scrollAnimationDuration={4000}
        data={sellerItem}
        renderItem={({ item, index }) => (
          <View key={index} className=" w-80 h-96">
            <Image
              className="object-contain rounded-2xl h-[250px] w-80"
              source={{ uri: item?.image }}
            />
          </View>
        )}
      />
    </View>
  );
};

export default MoreSellerItems;
