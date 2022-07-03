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
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

function LoginScreen({ navigation: { navigate } }) {
  const [credentials, setCredentials] = React.useState({
    email: "",
    password: "",
  });
  const [errormsg, setErrormsg] = React.useState("");
  function signup() {
    axios
      .post(
        "https://proxyinvoicebill.herokuapp.com/https://szjehibddkfzwryyljsw.supabase.co/auth/v1/signup",
        JSON.stringify(credentials),
        {
          headers: {
            "Content-Type": "application/json",
            "access-control-allow-origin": "*",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN6amVoaWJkZGtmendyeXlsanN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTY3NDI2ODAsImV4cCI6MTk3MjMxODY4MH0.PRy_3XmixaOldM4arN6YTmUpz2rmeLqX7mLles69U7Q",
            "Content-Type": "application/json",
            apikey:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN6amVoaWJkZGtmendyeXlsanN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTY3NDI2ODAsImV4cCI6MTk3MjMxODY4MH0.PRy_3XmixaOldM4arN6YTmUpz2rmeLqX7mLles69U7Q",
          },
        }
      )
      .then(function (response) {
        if (response.data.msg) {
          setErrormsg(response.data.msg);
          return;
        } else {
          const storeUser = async () => {
            try {
              await AsyncStorage.setItem("user", JSON.stringify(response.data));
            } catch (error) {
              console.log(error);
            }
          };
          storeUser();
          const gohome = () => navigation.navigate("Home");
          gohome();
        }
      })
      .catch((error) => {
        if (response.data.msg) {
          setErrormsg(response.data.msg);
          return;
        }
      });
  }
  function signin() {
    axios
      .post(
        "https://szjehibddkfzwryyljsw.supabase.co/auth/v1/token?grant_type=password",
        JSON.stringify(credentials),
        {
          headers: {
            "Content-Type": "application/json",
            "access-control-allow-origin": "*",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN6amVoaWJkZGtmendyeXlsanN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTY3NDI2ODAsImV4cCI6MTk3MjMxODY4MH0.PRy_3XmixaOldM4arN6YTmUpz2rmeLqX7mLles69U7Q",
            "Content-Type": "application/json",
            apikey:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN6amVoaWJkZGtmendyeXlsanN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTY3NDI2ODAsImV4cCI6MTk3MjMxODY4MH0.PRy_3XmixaOldM4arN6YTmUpz2rmeLqX7mLles69U7Q",
          },
        }
      )
      .then(function (response) {
        if (response.data.msg) {
          setErrormsg(response.data.msg);
          return;
        } else {
          const storeUser = async () => {
            try {
              await AsyncStorage.setItem("user", JSON.stringify(response.data));
            } catch (error) {
              console.log(error);
            }
          };
          storeUser();
          const gohome = () => navigation.navigate("Home");
          gohome();
        }
      })
      .catch(({ error_description }) => {
        if (error_description) {
          setErrormsg(error_description);
          return;
        }
      });
  }
  return (
    <View>
      <Box flex="1" safeAreaTop height="100%" width="100%">
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
                  TBD
                </Text>
                <Text color="white" mb="4">
                  one stop destination for your invoices
                </Text>
                <Box mb="4" w="100%">
                  <FormControl mb="5">
                    <FormControl.Label>Email</FormControl.Label>
                    <Input
                      placeholder="email"
                      color="white"
                      onChange={(e) =>
                        setCredentials({
                          ...credentials,
                          email: e.target.value,
                        })
                      }
                    />
                    <FormControl.HelperText>email</FormControl.HelperText>
                  </FormControl>
                  <FormControl mb="5">
                    <FormControl.Label>password</FormControl.Label>
                    <Input
                      placeholder="password"
                      color="white"
                      onChange={(e) =>
                        setCredentials({
                          ...credentials,
                          password: e.target.value,
                        })
                      }
                    />
                    <FormControl.HelperText>password</FormControl.HelperText>
                    {errormsg && (
                      <FormControl.HelperText bg="red.400">
                        {errormsg}
                      </FormControl.HelperText>
                    )}
                  </FormControl>
                </Box>

                <Button.Group>
                  <Button width="auto" colorScheme="secondary" onPress={signup}>
                    Sign up
                  </Button>
                  <Button width="auto" colorScheme="secondary" onPress={signin}>
                    Login
                  </Button>
                </Button.Group>
              </Center>
            </Box>
          </Flex>
        </Box>
      </Box>
    </View>
  );
}

export default LoginScreen;
