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
  View,
} from "native-base";
import { Platform } from "react-native";

function LoginScreen({ navigate }) {
  return (
    <View>
      <Box flex="1" safeAreaTop height="100%" width="100%">
        <Box width="100%" p="4">
          LOGO
        </Box>
        <Box flex="1" p="4">
          <Flex
            direction={{
              base: "column",
              lg: "row",
            }}
            justifyContent="space-between"
            height="100%"
          >
            <Box p="2">{/* <Image source={login} size={530} /> */}</Box>
            <Box
              p="10"
              m={[0, 4]}
              background="black"
              width={{
                base: "100%",
                lg: "50%",
              }}
              rounded="xl"
            >
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

                <Button
                  width="100%"
                  colorScheme="secondary"
                  onPress={() => navigation.navigate("Home")}
                >
                  Sign up
                </Button>
              </Center>
            </Box>
          </Flex>
        </Box>
      </Box>
    </View>
  );
}

export default LoginScreen;
