import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const Category = ({ categoryList }) => {
  const navigation = useNavigation();

  const viewAll = () => {
    navigation.navigate("AllCategory", { categoryList });
  };

  return (
    <View className="py-5 px-1 bg-white">
      <View className="flex-row rounded-t-md  items-center p-4 justify-between">
        <Text className="font-bold text-xl">Category</Text>
        <TouchableOpacity onPress={() => viewAll()} className="flex-shrink-0">
          <Text className="text-md text-gray-400">See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={categoryList}
        numColumns={4}
        renderItem={({ item, index }) =>
          index <= 3 && (
            <TouchableOpacity
              accessible
              accessibilityLabel={`Category ${item.name}`}
              onPress={() =>
                navigation.navigate("ItemList", { category: item.name })
              }
              className="flex-1 items-center justify-center"
            >
              <View className="rounded-full items-center justify-center w-16 h-16 bg-slate-200">
                <Image className="h-10 w-10" source={{ uri: item?.icon }} />
              </View>
              <Text className="font-medium pt-2">{item.name}</Text>
            </TouchableOpacity>
          )
        }
      />
    </View>
  );
};

export default Category;
