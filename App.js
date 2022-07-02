import React from "react";
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
} from "native-base";
import NativeBaseIcon from "./components/NativeBaseIcon";
import { Platform } from "react-native";
// import Card from "./components/Card";
// import VerticalCard from "./components/VerticalCard";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SavedReceipt } from "./screens/SavedReceipt";
import { createDrawerNavigator } from '@react-navigation/drawer';


// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        {
          Platform.OS === "web" ?
            <Drawer.Navigator>
              <Drawer.Screen name="Home" component={HomeScreen} />
              <Drawer.Screen name="Profile" component={ProfileScreen} />
              <Drawer.Screen name="View receipts" component={SavedReceipt} />
            </Drawer.Navigator> :
            <Tab.Navigator>
              <Tab.Screen name="Home" component={HomeScreen} />
              <Tab.Screen name="Profile" component={ProfileScreen} />
              <Tab.Screen name="View receipts" component={SavedReceipt} />
            </Tab.Navigator>

        }
      </NavigationContainer>
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
