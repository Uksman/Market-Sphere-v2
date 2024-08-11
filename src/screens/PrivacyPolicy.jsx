import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const PrivacyPolicy = () => {
  const navigation = useNavigation();
  const [expanded, setExpanded] = useState(null);
  const PP = [
    {
      id: 1,
      question: "Information We Collect",
      answer: {
        text: "We may collect various types of information from you when you use our services. This includes personal information such as your name, email address, phone number, and physical address. Additionally, we may collect non-personal information such as your IP address, device type, operating system version, browser type, and usage statistics. We may also collect information about your interactions with our services, including the features you use, the links you click on, and the searches you conduct.",
        listItems: [],
      },
    },
    {
      id: 2,
      question: "Use of Information",
      answer: {
        text: "The information we collect is used in several ways to enhance your experience with our services and to operate our business. Specifically, we use your personal information to:",
        listItems: [
          "Provide, maintain, and improve our services;",
          "Process transactions and send notices about your account status and schedule;",
          "Communicate with you about products, services, offers, promotions, and events offered by us and others;",
          "Monitor and analyze trends, usage, and activities in connection with our services;",
          "Personalize the services and provide advertisements, content, or features that match user profiles or interests.",
        ],
      },
    },
    {
      id: 3,
      question: "Your Choices",
      answer: {
        text: "You have certain rights regarding the personal information we collect about you. Under applicable law, you may have the right to:",
        listItems: [
          "Access your personal information and request corrections or deletions;",
          "Opt out of marketing communications;",
          "Object to the processing of your personal information based on legitimate interest of ours;",
          "Request restrictions on the processing of your personal information;",
          "Exercise your right to data portability under certain circumstances.",
        ],
      },
    },
    {
      id: 4,
      question: "How We Protect Your Data",
      answer: {
        text: "To protect your personal information, we implement reasonable administrative, technical, and physical safeguards. These measures are designed to secure your personal information from unauthorized access, alteration, or destruction. Our security procedures are regularly updated and monitored to ensure they remain effective. However, no method of transmission over the Internet, or electronic storage, is 100% secure, and we cannot guarantee its absolute security.",
        listItems: [],
      },
    },
    {
      id: 5,
      question: "Changes to This Privacy Policy",
      answer: {
        text: "We reserve the right to modify this Privacy Policy at any time. If we make material changes to this Privacy Policy, we will notify you by updating this posting, sending you an email, or through another appropriate communication means. It is important that you review this Privacy Policy periodically to stay informed about our current privacy practices.",
        listItems: [],
      },
    },
    {
      id: 6,
      question: "Contact Us",
      answer: {
        text: "If you have any questions about this Privacy Policy, or if you would like to make a complaint, please contact us at support@marketsphere.com. We will acknowledge your receipt of the complaint within five business days and attempt to resolve the issue promptly.",
        listItems: [],
      },
    },
  ];

  const toggleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };
  return (
    <View className="flex-1 bg-gray-100 pt-5">
      <TouchableOpacity onPress={() => navigation.goBack()} className="p-3">
        <Ionicons
          name="chevron-back-outline"
          size={26}
          color={"rgb(255,89,9)"}
        />
      </TouchableOpacity>
      <ScrollView className="p-5">
        <View className="mb-8">
          <Text className="font-bold text-3xl">Privacy Policy</Text>
          <Text className="mt-4">
            We want you to know excally how MarketSphere service works and how
            why we need your details. Reveiwing our Privacy Policy will help you
            countinue to use the app with peace of mind. At MarketShare, we are
            committed to protecting the privacy and security of our users'
            personal information. This Privacy Policy outlines how we collect,
            use, share, and protect your personal data when you use our
            services.
          </Text>
        </View>
        {PP.map(({ id, question, answer }) => (
          <View key={id} className="mb-0.5">
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => toggleExpand(id)}
              className="flex-row justify-between bg-orange-600 py-5 px-4"
            >
              <Text className="font-bold text-md text-white">{question}</Text>
              <Ionicons
                name={expanded == id ? "remove" : "add"}
                size={22}
                color={"white"}
              />
            </TouchableOpacity>
            {expanded === id && (
              <View className=" py-3 px-3">
                <Text>{answer.text}</Text>
                {answer.listItems.length > 0 && (
                  <View>
                    {answer.listItems.map((item, index) => (
                      <Text key={index}>...{item}</Text>
                    ))}
                  </View>
                )}
              </View>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default PrivacyPolicy;
