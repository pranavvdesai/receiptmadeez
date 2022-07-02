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
} from "native-base";
import NativeBaseIcon from "./components/NativeBaseIcon";
import { Platform } from "react-native";
// import Card from "./components/Card";
// import VerticalCard from "./components/VerticalCard";
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SavedReceipt } from "./screens/SavedReceipt";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useColorScheme } from 'react-native';


// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

const MyTheme = {
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: 'red',
    background: '#081220',
  },
};


// extend the theme
// export const theme = extendTheme({ config });

// export const theme = extendTheme(MyTheme);
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
export default function App() {
  const scheme = useColorScheme();
  return (
    <NativeBaseProvider>

      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
        {
          Platform.OS === "web" ?
            (
              <Drawer.Navigator
                backgroundColor="#252D3A"
              >
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Profile" component={ProfileScreen} />
                <Drawer.Screen name="View receipts" component={SavedReceipt} />
              </Drawer.Navigator>
            ) :
            (
              <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Profile" component={ProfileScreen} />
                <Tab.Screen name="View receipts" component={SavedReceipt} />
              </Tab.Navigator>
            )

        }
      </NavigationContainer>

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
