import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Faqs = () => {
  const [expandedFAQId, setExpandedFAQId] = useState(null);
  const navigation = useNavigation();

  const faqs = [
    {
      id: 1,
      question: "How do I create an item to sell?",
      answer:
        'To create an item, tap on the "Sell" button at the bottom of the screen...',
    },
    {
      id: 2,
      question: "Can I edit or delete my listing?",
      answer: "Yes, you can edit or delete your listing at any time...",
    },
    {
      id: 3,
      question: "What payment methods do you accept?",
      answer:
        "We accept payments through credit/debit cards, PayPal, and bank transfers.",
    },
    {
      id: 4,
      question: "Is shipping included in the price?",
      answer:
        "Shipping costs vary depending on the item and destination. It's always listed in the item details.",
    },
    {
      id: 5,
      question: "Do you offer returns?",
      answer:
        "Returns are subject to the seller's policy. Always check the item description before purchasing.",
    },
  ];

  const toggleFAQExpansion = (id) => {
    setExpandedFAQId(id === expandedFAQId ? null : id);
  };

  return (
    <ScrollView className="bg-white flex-1">
      <View className="bg-orange-600 flex-1 pt-10 h-72">
        <TouchableOpacity onPress={() => navigation.goBack()} className="p-3">
          <Ionicons name="chevron-back-outline" size={26} color={"white"} />
        </TouchableOpacity>
        <View className="mt-5">
          <Text className="text-4xl font-bold mt-4 text-white text-center">
            How can we help
          </Text>
          <Text className="text-4xl mt-2 font-bold text-white text-center">
            you?
          </Text>
        </View>
      </View>
      <View className="p-5 mt-[-20px] flex-1 bg-white rounded-t-3xl shadow-2xl">
        <View className="flex-row my-4 justify-between">
          <Text className="text-2xl font-bold">Top Questions</Text>
          <Ionicons name="search" size={26} color={"rgb(255,89,9)"} />
        </View>
        {faqs.map(({ id, question, answer }) => (
          <View key={id} className="mb-3">
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => toggleFAQExpansion(id)}
              className="rounded-lg flex-row justify-between bg-gray-200 py-5 px-5"
            >
              <Text className="text-lg ">{question}</Text>
              <Ionicons
                name={expandedFAQId == id ? "chevron-up" : "chevron-down"}
                size={22}
                color={"gray"}
              />
            </TouchableOpacity>
            {expandedFAQId === id && (
              <View className="bg-gray-100 py-5 px-5 rounded-lg mt-1">
                <Text className="">{answer}</Text>
              </View>
            )}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Faqs;
