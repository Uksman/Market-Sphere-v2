import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  ScrollView,
  Alert,
  ActivityIndicator,
} from "react-native";
import {
  getFirestore,
  getDocs,
  collection,
  onSnapshot,
  addDoc,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { app } from "../../../firebaseConfig";
import { Formik } from "formik";
import { Picker } from "@react-native-picker/picker";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import * as ImagePicker from "expo-image-picker";
import { useUser } from "@clerk/clerk-expo";

const CreatePosts = () => {
  const db = getFirestore(app);
  const storage = getStorage();
  const { user } = useUser();

  const [categoryList, setCategorylist] = useState([]);
  const [image, setImage] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = async () => {
    setCategorylist([]);
    const querySnapshot = await getDocs(collection(db, "Category"));

    querySnapshot.forEach((doc) => {
      setCategorylist((categoryList) => [...categoryList, doc.data()]);
    });
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const onSubmitMethod = async (value) => {
    setIsLoading(true);
    const resp = await fetch(image);
    const blob = await resp.blob();
    const storageRef = ref(storage, "userPosts/" + Date.now() + "jpg");

    uploadBytes(storageRef, blob)
      .then(async (snapshot) => {
        console.log("File uploaded successfully", snapshot);
      })
      .then((resp) => {
        getDownloadURL(storageRef).then(async (DownloadURL) => {
          value.image = DownloadURL;
          value.userName = user.fullName;
          value.userEmail = user.primaryEmailAddress.emailAddress;
          value.userImage = user.imageUrl;
          const docRef = await addDoc(collection(db, "userPost"), value);

          if (docRef.id) {
            setIsLoading(false);
            Alert.alert("Posts Created Successfully");
          }
        });
      });
  };

  return (
    <ScrollView>
      <View className="p-10">
        <View className="pt-5">
          <Text className="font-bold text-2xl">Create a New Post</Text>
          <Text className="mt-5">
            Let our community know about the amazing items you're selling! Fill
            out the details below to create your listing:
          </Text>
        </View>

        <Formik
          initialValues={{
            title: "",
            desc: "",
            image: "",
            category: "",
            price: "",
            address: "",
            userName: "",
            userEmail: "",
            userImage: "",
            timeCreated: Date.now(),
          }}
          validate={(value) => {
            const errors = {};

            if (!value.title) {
              ToastAndroid.show(
                "A title is required to post. Please add one.",
                ToastAndroid.CENTER
              );
              errors.title = "Title is required";
            }
            return errors;
          }}
          onSubmit={(value) => onSubmitMethod(value)}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
            values,
            errors,
          }) => (
            <View>
              <TouchableOpacity
                className="items-center rounded-lg my-10 h-40 justify-center bg-gray-300"
                onPress={pickImage}
              >
                {image ? (
                  <Image
                    source={{ uri: image }}
                    className="w-full h-60 rounded-lg object-contain"
                  />
                ) : (
                  <Text>
                    <MaterialIcons
                      name="photo-library"
                      size={40}
                      color="white"
                    />
                  </Text>
                )}
              </TouchableOpacity>
              <TextInput
                placeholder="Title"
                value={values?.title}
                onBlur={handleBlur("title")}
                onChangeText={handleChange("title")}
                className={`border p-4 rounded-lg px-5 my-5 text-sm ${
                  errors.title ? "border-red-500" : ""
                }`}
              />
              {/* {errors.title && (
                <View>
                  <Text className="text-red-500 text-xs">{errors.title}</Text>
                </View>
              )} */}
              <TextInput
                placeholder="Description"
                value={values?.desc}
                numberOfLines={8}
                onChangeText={handleChange("desc")}
                className="border p-4 rounded-lg px-5 mb-5 text-sm"
              />
              <TextInput
                placeholder="Price"
                value={values?.price}
                keyboardType="number-pad"
                onChangeText={handleChange("price")}
                className="border p-4 mb-5 rounded-lg px-5 text-sm"
              />
              <TextInput
                placeholder="Address"
                value={values?.address}
                onChangeText={handleChange("address")}
                className="border p-4 rounded-lg px-5 text-sm"
              />
              {/* categoryList */}
              <View className="mt-5 border rounded-lg">
                <Picker
                  mode="dialog"
                  prompt="Select a category"
                  selectedValue={values?.category}
                  onValueChange={handleChange("category")}
                >
                  {categoryList &&
                    categoryList.map((item, index) => (
                      <Picker.Item
                        key={index}
                        label={item.name}
                        value={item.name}
                      />
                    ))}
                </Picker>
              </View>
              <TouchableOpacity
                disabled={isLoading}
                className={`${
                  !isLoading ? "bg-orange-500" : "bg-slate-400"
                } mt-7 rounded-3xl items-center p-3`}
                onPress={handleSubmit}
              >
                {isLoading ? (
                  <ActivityIndicator color="#CC4400" />
                ) : (
                  <Text className="font-semibold text-white text-lg">Post</Text>
                )}
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
};

export default CreatePosts;
