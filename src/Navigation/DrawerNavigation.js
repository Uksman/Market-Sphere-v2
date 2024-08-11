import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ProfileScreen from "../screens/ProfileScreen/Profile";
import Notifications from "../screens/NotificationScreen/Notifications";
import Faqs from "../screens/Faqs";
import TabNavigation from "./BottomTabNavigation";
import { Ionicons } from "@expo/vector-icons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import About from "../screens/AboutScreen/About";
import PrivacyPolicy from "../screens/PrivacyPolicy";
import DrawerContent from "../components/CustomDrawerContent/DrawerContent";

const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          width: 280,
        },
        drawerActiveTintColor: "rgb(230,97,26)",
        headerShown: false,
      }}
    >
      <Drawer.Screen
        name="UserHome"
        component={TabNavigation}
        options={{
          title: "Home",
          drawerLabel: "Home",
          headerShadowVisible: false,
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "Profile",
          drawerLabel: "Profile",
          headerShadowVisible: false,
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person-circle-sharp" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Faqs"
        component={Faqs}
        options={{
          title: "Faqs",
          drawerLabel: "Faqs",
          headerShadowVisible: false,
          drawerIcon: ({ color, size }) => (
            <Ionicons name="help-circle-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Notifications"
        component={Notifications}
        options={{
          title: "Notifications",
          drawerLabel: "Notifications",
          headerShadowVisible: false,
          drawerIcon: ({ color, size }) => (
            <Ionicons
              name="notifications-off-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="PrivacyPolicy"
        component={PrivacyPolicy}
        options={{
          title: "PrivacyPolicy",
          drawerLabel: "Privacy Policy",
          headerShadowVisible: false,
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="policy" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="About"
        component={About}
        options={{
          title: "About",
          drawerLabel: "About",
          headerShadowVisible: false,
          drawerIcon: ({ color, size }) => (
            <Ionicons name="book-outline" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
