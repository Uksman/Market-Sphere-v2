import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingScreen from "../screens/OnboardingScreen/OnboardingScreen";
import LoginScreen from "../screens/LoginScreen/Login";
import DrawerNavigation from "./DrawerNavigation";
import ItemList from "../screens/ItemByCategoryScreen/ItemList";
import ItemDetails from "../screens/ItemDetailsScreen/ItemDetails";
import MyItems from "../screens/MyItemsScreen/MyItems";
import AllCategory from "../screens/AllCategoryScreen/AllCategory";

const Stack = createNativeStackNavigator();

const AppNavigation = ({}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={DrawerNavigation} />
        <Stack.Screen
          options={({ route }) => ({
            title: route.params.category,
            headerShown: true,
            headerStyle: {
              backgroundColor: "rgb(255,89,9)",
            },
            headerTitleStyle: {
              color: "white",
            },
            headerTintColor: "white",
          })}
          name="ItemList"
          component={ItemList}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "rgb(255,89,9)",
            },

            headerTitleStyle: {
              color: "white",
            },
            headerTintColor: "white",
          }}
          name="ItemDetails"
          component={ItemDetails}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "rgb(255,89,9)",
            },
            headerTitleStyle: {
              color: "white",
            },
            headerTintColor: "white",
          }}
          name="MyItems"
          component={MyItems}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "rgb(255,89,9)",
            },
            headerTitle: "All Category",
            headerTitleStyle: {
              color: "white",
            },
            headerTintColor: "white",
          }}
          name="AllCategory"
          component={AllCategory}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
