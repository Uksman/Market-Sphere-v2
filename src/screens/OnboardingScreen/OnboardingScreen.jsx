import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import { useNavigation } from "@react-navigation/native";

const OnboardingScreen = () => {
  const navigation = useNavigation();

  const handleDone = () => {
    navigation.replace("Login");
  };

  const dotComponent = ({ selected }) => {
    return (
      <View
        className={`w-3 ml-1 mb-32 h-3 flex items-center justify-center rounded-full ${
          selected ? "border border-orange-600 " : ""
        }`}
      >
        <View
          className={`w-3 h-3 rounded-full items-center flex justify-center ${
            selected ? "bg-orange-600" : "bg-orange-300"
          }`}
        ></View>
      </View>
    );
  };
  const skipButton = ({ ...props }) => {
    return (
      <TouchableOpacity
        {...props}
        className="w-24 flex items-center justify-center mt-16 p-3 mx-5"
      >
        <Text className="text-orange-100 font-semibold text-lg">Skip</Text>
      </TouchableOpacity>
    );
  };
  const nextButton = ({ ...props }) => {
    return (
      <TouchableOpacity
        {...props}
        className="w-36 bg-orange-600 flex items-center justify-center mt-16 p-3 mx-5 rounded-3xl"
      >
        <Text className="text-white font-semibold text-lg">Next</Text>
      </TouchableOpacity>
    );
  };

  const doneButton = ({ ...props }) => {
    return (
      <TouchableOpacity
        className="w-[400px] bg-orange-600 flex items-center justify-center mt-16 p-3 mx-5 rounded-3xl"
        {...props}
      >
        <Text className="text-white font-semibold text-lg">Done</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View className="flex-1 justify-center items-center">
      <Onboarding
        containerStyles={{ paddingHorizontals: 15 }}
        bottomBarHighlight={false}
        bottomBarHeight={200}
        onSkip={handleDone}
        onDone={handleDone}
        DoneButtonComponent={doneButton}
        SkipButtonComponent={skipButton}
        NextButtonComponent={nextButton}
        DotComponent={dotComponent}
        pages={[
          {
            backgroundColor: "white",
            image: (
              <View>
                <Image
                  className="w-screen h-96 object-contain"
                  source={require("../../../assets/niche-service-marketplace-concept-illustration_114360-7303.jpg")}
                />
              </View>
            ),
            title: "Discover MarketSphere",
            subtitle: "Embark on a Journey Through Endless Discoveries",
          },
          {
            backgroundColor: "white",
            image: (
              <View className="">
                <Image
                  className="w-screen h-96 object-cover"
                  source={require("../../../assets/woman-shopping-smarphone_24908-71180.jpg")}
                />
              </View>
            ),
            title: "Shop at Your Fingertips",
            subtitle: "Transform Your Perspective on Online Shopping",
          },
          {
            backgroundColor: "white",
            image: (
              <View>
                <Image
                  className="w-screen h-96 object-contain"
                  source={require("../../../assets/online-wishes-list-concept-illustration_114360-3900.jpg")}
                />
              </View>
            ),
            title: "Trade Made Easy",
            subtitle: "Navigate the Marketplace with Confidence and Ease",
          },
        ]}
      />
    </View>
  );
};

export default OnboardingScreen;
