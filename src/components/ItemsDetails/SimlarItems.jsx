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

const SimlarItems = ({ currentItemCategory }) => {
  const width = Dimensions.get("screen").width;
  const [simlarItem, setSimlarItem] = useState([]);
  const db = getFirestore(app);

  useEffect(() => {
    getSimlarItem();
  }, [currentItemCategory]);

  const getSimlarItem = async () => {
    setSimlarItem([]);
    const q = query(
      collection(db, "userPost"),
      where("category", "==", currentItemCategory)
    );
    const snapshot = await getDocs(q);
    const Items = [];
    snapshot.forEach((doc) => {
      Items.push(doc.data());
      console.log("This is the doc data:", doc.data()); // Debugging output
    });
    console.log("This is the Fetched items:", Items); // Debugging output
    setSimlarItem(Items);
  };
  return (
    <View className="mt-5">
      <Text className="font-[Poppins-semi] text-lg">You may also like</Text>
      <Carousel
        loop
        width={width}
        height={width / 2}
        // autoPlay={true}
        // mode="parallax"
        // scrollAnimationDuration={4000}
        data={simlarItem}
        renderItem={({ item, index }) => (
          <View key={index} className=" w-screen h-96">
            <Image
              className="object-contain rounded-2xl h-[250px] w-full"
              source={{ uri: item?.image }}
            />
          </View>
        )}
      />
    </View>
  );
};

export default SimlarItems;
