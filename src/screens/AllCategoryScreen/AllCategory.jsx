import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

const AllCategory = ({ route }) => {
  const { categoryList } = route.params;
  const navigation = useNavigation();
  return (
    <View className="flex-1">
      {/* <View className="flex-row items-center gap-10">
        <TouchableOpacity className="p-2">
          <MaterialIcons name="arrow-left" size={24} color="rgb(255,89,9)" />
        </TouchableOpacity>
        <Text className="font-bold text-lg">AllCategory</Text>
      </View> */}
      <FlatList
        data={categoryList}
        numColumns={4}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            accessible
            // accessibilityLabel={`Category ${item.name}`}
            onPress={() =>
              navigation.navigate("ItemList", { category: item.name })
            }
            className="flex-1 items-center my-7 justify-center"
          >
            <View className="rounded-full items-center justify-center w-16 h-16 bg-slate-200">
              <Image className="h-10 w-10" source={{ uri: item?.icon }} />
            </View>
            <Text className="font-medium pt-2">{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default AllCategory;
