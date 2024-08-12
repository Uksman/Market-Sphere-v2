import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import LoginScreen from "./src/screens/LoginScreen/Login";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
// import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./src/Navigation/BottomTabNavigation";
import StackNavigation from "./src/Navigation/StackNavigation";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsloaded] = useFonts({
    Poppins: require("./assets/fonts/Poppins/Poppins-Regular.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins/Poppins-Bold.ttf"),
    "Poppins-md": require("./assets/fonts/Poppins/Poppins-Medium.ttf"),
    "Poppins-semi": require("./assets/fonts/Poppins/Poppins-SemiBold.ttf"),
  });
  if (!fontsloaded) {
    return null;
  }

  return (
    <ClerkProvider
      className=""
      publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <View className="flex-1">
        <StatusBar style="auto" />
        {/* <SignedIn>
          <AppNavigation />
        </SignedIn>
        <SignedOut>
          <LoginScreen />
        </SignedOut> */}
        <StackNavigation />
      </View>
    </ClerkProvider>
  );
}
