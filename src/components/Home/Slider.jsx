import { View, Text, FlatList, Dimensions, Image } from "react-native";
import React from "react";
import { Skeleton } from "moti/skeleton";
import Carousel from "react-native-reanimated-carousel";

const Slider = ({ sliderList }) => {
  const width = Dimensions.get("screen").width;

  return (
    <View className="mt-2 bg-white">
      <Text className="mt-3 mx-4 font-semibold text-lg">
        #Special Offers for you
      </Text>
      <Carousel
        loop
        width={width}
        height={width / 2}
        autoPlay={true}
        mode="parallax"
        scrollAnimationDuration={4000}
        data={sliderList}
        renderItem={({ item, index }) => (
          <View key={index} className=" w-screen h-96">
            <Image
              className="object-contain rounded-2xl h-[250px] w-full"
              source={{ uri: item?.img }}
            />
          </View>
        )}
      />
    </View>
  );
};

export default Slider;
