import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const LatestItem = ({ latestItemList, header }) => {
  const navigation = useNavigation();

  return (
    <View className="p-2 bg-white">
      <Text className="font-bold pl-2 pb-2 text-xl">{header}</Text>
      <FlatList
        data={latestItemList}
        numColumns={2}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("ItemDetails", { item: item })}
            className="flex-1 bg-slate-200 p-1 mb-5"
          >
            <Image
              className="h-[240px] w-full rounded-lg object-contain"
              source={{ uri: item?.image }}
            />
            <View className="">
              <Text className="pt-2">{item.title}</Text>
              <Text className="font-medium">${item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default LatestItem;
