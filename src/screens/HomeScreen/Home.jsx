import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView, ActivityIndicator } from "react-native";
import Header from "../../components/Home/Header";
import Slider from "../../components/Home/Slider";
import Category from "../../components/Home/Category";
import LatestItem from "../../components/Home/LatestItem";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { app } from "../../../firebaseConfig";

const Home = () => {
  const db = getFirestore(app);

  const [sliderList, setSliderList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [latestItemList, setLatestItemList] = useState([]);

  useEffect(() => {
    fetchData("Slider", setSliderList);
    fetchData("Category", setCategoryList);
    fetchData("userPost", setLatestItemList);
  }, []);

  const fetchData = async (collectionName, setState) => {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const Items = [];
    querySnapshot.forEach((doc) => {
      Items.push(doc.data());
    });
    setState(Items);
  };

  return (
    <ScrollView className="flex-1">
      {/* header component*/}
      <Header />
      {/* Slider component*/}
      <Slider sliderList={sliderList} />
      {/* category component*/}
      <Category categoryList={categoryList} />
      {/* Latest-item component*/}
      <LatestItem latestItemList={latestItemList} header={"Latest Items"} />
    </ScrollView>
  );
};

export default Home;
