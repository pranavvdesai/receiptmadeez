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
  Flex,
  Spacer,
  FormControl,
  Input,
  Button,
  Image,
} from "native-base";
import NativeBaseIcon from "./components/NativeBaseIcon";
import { Platform } from "react-native";
import login from "./assets/login.svg";
// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  return (
    <NativeBaseProvider>
      <Box flex="1" safeAreaTop height="100%" background="" width="100%">
        <Box width="100%" p="4">
          LOGO
        </Box>
        <Box flex="1" p="4">
          <Flex direction={{
            base: "column",
            lg: "row",
          }} justifyContent="space-between" height="100%">
            <Box p="2">{/* <Image source={login} size={530} /> */}</Box>
            <Box p="10" m="[0,4]" background="black" width={{
              base: "100%",
              lg: "50%",
            }} rounded="xl">
              <Center>
                <Text color="white" fontSize="5xl" m="3">
                  Title
                </Text>
                <Text color="white" mb="4">
                  wenfuiewf wiefewbfiubf fewifbewuibfewufbewiufbewif
                </Text>
                <Box mb="4" w="100%">
                  <FormControl mb="5">
                    <FormControl.Label>Project Title</FormControl.Label>
                    <Input placeholder="e-mail" color="white" />
                    <FormControl.HelperText>
                      Give your project a title.
                    </FormControl.HelperText>
                  </FormControl>
                  <FormControl mb="5">
                    <FormControl.Label>Project Title</FormControl.Label>
                    <Input placeholder="e-mail" color="white" />
                    <FormControl.HelperText>
                      Give your project a title.
                    </FormControl.HelperText>
                  </FormControl>
                </Box>

                <Button width="100%" colorScheme="secondary">
                  Sign up
                </Button>
              </Center>
            </Box>
          </Flex>
        </Box>
      </Box>
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
