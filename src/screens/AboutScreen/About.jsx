import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  ImageBackground,
} from "react-native";

const About = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>About MarketShare</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.subHeaderText}>Our Story</Text>
        <Text style={styles.text}>
          MarketShare was born out of a passion for connecting people through
          the things they love. Created by a dedicated individual, it aims to
          create a vibrant marketplace where every item has a story to tell.
        </Text>
        <Text style={styles.subHeaderText}>Creator's Vision</Text>
        <Text style={styles.text}>
          The vision behind MarketShare is to foster a community where buying
          and selling becomes an enriching experience, not just a transaction.
          With a focus on quality and authenticity, MarketShare strives to make
          every user feel valued and heard.
        </Text>
        <Text style={styles.subHeaderText}>Future Updates</Text>
        <Text style={styles.text}>
          Stay updated with the latest developments on MarketShare. Upcoming
          features include advanced search filters and a redesigned user
          interface for a seamless browsing experience.
        </Text>
        {/* Optional: Add an image or icon representing MarketShare */}
        {/* <ImageBackground
          source={require("../../assets/img1-removebg-preview.png")}
          style={styles.backgroundImage}
        >
          <Text style={styles.imageText}>Discover More</Text>
        </ImageBackground> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF", // Light background color
  },
  headerContainer: {
    marginTop: 30,
    alignItems: "center",
  },
  headerText: {
    fontSize: 28,
    fontWeight: "600",
    color: "#333", // Darker text for contrast
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  subHeaderText: {
    fontSize: 22,
    fontWeight: "500",
    color: "#666", // Slightly lighter for differentiation
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333",
    marginBottom: 12,
  },
  backgroundImage: {
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  imageText: {
    fontSize: 18,
    fontWeight: "400",
    color: "#FFF", // White text for contrast against the background
  },
});

export default About;
