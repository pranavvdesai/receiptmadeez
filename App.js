import React, { useEffect } from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
  Flex,
  Spacer,
  FormControl,
  Input,
  Button,
  Image,
} from "native-base";
import NativeBaseIcon from "./components/NativeBaseIcon";
import { Platform } from "react-native";

// import Card from "./components/Card";
// import VerticalCard from "./components/VerticalCard";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SavedReceipt } from "./screens/SavedReceipt";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import LoginScreen from "./screens/LoginScreen";
import AdminScreen from "./screens/AdminScreen";
import { useColorScheme } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Ionicons from "react-native-vector-icons/Ionicons";
import axios from "axios";

const Stack = createNativeStackNavigator();

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

const MyTheme = {
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: "red",
    background: "#181818",
    card: "#13131A",
  },
};

// extend the theme
// export const theme = extendTheme({ config });

// export const theme = extendTheme(MyTheme);
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
export default function App() {
  const [userData, setuserData] = React.useState();
  React.useEffect(() => {
    const getUser = async () => {
      try {
        let temp = JSON.parse(await AsyncStorage.getItem("user"));
        //console.log(userData, "ftyg");
        if (!temp) return;
        setuserData(temp);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, []);
  const scheme = useColorScheme();
  const [admin, setAdmin] = React.useState(false);
  React.useEffect(() => {
    function getData() {
      axios
        .post(
          "https://proxyinvoicebill.herokuapp.com/https://invoiceg.ganeshgouru50.workers.dev",
          {
            token: userData?.access_token,
          },
          {
            headers: {
              "access-control-allow-origin": "*",
              origin: "*",
            },
          }
        )
        .then(function (response) {
          if (response.data == false) {
            return;
          }
          console.log(response.data);
          setAdmin(response.data.type == "admin");
        })
        .catch(function (error) {
          console.log(error.response.data);
        });
    }
    if (userData) {
      getData();
    }
  }, [userData]);
  return (
    <NativeBaseProvider>
      {userData == null ? (
        <NavigationContainer theme={MyTheme}>
          <Drawer.Navigator
            backgroundColor="#060606"
            screenOptions={{
              headerStyle: {
                backgroundColor: "#060606",
                borderBottomColor: "#060606",
              },

              headerTintColor: "white",
              drawerActiveBackgroundColor: "#363636",
              drawerLabelStyle: { color: "#fff" },
              drawerStyle: { backgroundColor: "#060606" },
            }}
          >
            <Drawer.Screen name="Login" component={LoginScreen} />
          </Drawer.Navigator>
        </NavigationContainer>
      ) : (
        <NavigationContainer theme={MyTheme}>
          {Platform.OS === "web" ? (
            <Drawer.Navigator
              backgroundColor="#060606"
              screenOptions={{
                headerStyle: {
                  backgroundColor: "#060606",
                  borderBottomColor: "#060606",
                },
                headerTintColor: "white",
                drawerActiveBackgroundColor: "#363636",
                drawerLabelStyle: { color: "#fff" },
                drawerStyle: { backgroundColor: "#060606" },
              }}
            >
              <Drawer.Screen name="Home" component={HomeScreen} />
              <Drawer.Screen name="Profile" component={LoginScreen} />
              <Drawer.Screen
                name={admin ? "Admin" : "View receipts"}
                component={admin ? AdminScreen : SavedReceipt}
              />
            </Drawer.Navigator>
          ) : (
            <Tab.Navigator
              backgroundColor="#060606"
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;

                  if (route.name === "Home") {
                    iconName = focused ? "ios-home" : "ios-home-outline";
                    size = 20;
                  } else if (route.name === "Profile") {
                    iconName = focused ? "ios-person" : "ios-person-outline";
                    size = 20;
                  } else if (route.name === "View receipts") {
                    iconName = focused ? "ios-list" : "ios-list-outline";
                    size = 23;
                  } else if (route.name === "Admin") {
                    iconName = focused
                      ? "ios-settings"
                      : "ios-settings-outline";
                    size = 20;
                  }

                  // You can return any component that you like here!
                  return <Ionicons name={iconName} size={size} color={color} />;
                },
                headerStyle: {
                  backgroundColor: "#060606",
                  borderBottomColor: "#060606",
                  borderTopColor: "#060606",
                },

                headerTintColor: "white",
                tabBarLabelStyle: { color: "white" },
                tabBarActiveTintColor: "rgb(155, 81, 224)",
                tabBarInactiveTintColor: "white",

                tabBarStyle: {
                  backgroundColor: "#060606",
                  borderTopColor: "#060606",
                },
              })}
            >
              <Tab.Screen name="Home" component={HomeScreen} />
              <Tab.Screen name="Profile" component={ProfileScreen} />
              <Tab.Screen
                name={admin ? "Admin" : "View receipts"}
                component={admin ? AdminScreen : SavedReceipt}
              />
            </Tab.Navigator>
          )}
        </NavigationContainer>
      )}

      {/* <Text>bvhjsdbv</Text> */}
      {/* // <Box flex={1} alignItems="center" justifyContent="center" bg="red.100">
      //   <Text>Open up App.js to start working on your app!</Text>
      // </Box> */}
    </NativeBaseProvider>
  );
}

// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === "light"}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}

//  {
//    /* <Text>bvhjsdbv</Text> */
//  }
//  {
//    /* // <Box flex={1} alignItems="center" justifyContent="center" bg="red.100">
//       //   <Text>Open up App.js to start working on your app!</Text>
//       // </Box> */
//  }
