import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import LoginScreen from "./src/screens/LoginScreen/Login";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
// import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./src/Navigation/BottomTabNavigation";
import StackNavigation from "./src/Navigation/StackNavigation";

export default function App() {
  return (
    <ClerkProvider
      className="bg-white flex-1"
      publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <View className="flex-1 bg-white">
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
