import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Rating } from "react-native-ratings";

const Reviews = () => {
  const [rating, setRating] = useState(4);
  const [userInput, setuserInput] = useState();
  return (
    <View className="mt-5">
      <Text className="font-bold text-lg">Reviews</Text>
      <Rating
        showRating={false}
        imageSize={20}
        onFinishRating={(rating) => setRating(rating)}
      />
      <TextInput
        placeholder="Write Your Comment"
        numberOfLines={4}
        onChangeText={(value) => setuserInput(value)}
        style={{
          textAlignVertical: "top",
        }}
        className="border border-gray-400 mt-5 p-4 rounded-lg px-5 mb-3 text-sm"
      />
      <TouchableOpacity
        disabled={!userInput}
        onPress={() => console.log(userInput, rating)}
        className="bg-orange-600 items-center p-3 rounded-3xl"
      >
        <Text className="">Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Reviews;
