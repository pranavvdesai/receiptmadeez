import * as React from "react";

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
  AspectRatio,
  Stack,
} from "native-base";
import hcard from "../assets/hcard.png";
export default function () {
  return (
    <Box
      margin="10"
      mx="20"
      rounded="xl"
      borderColor="coolGray.200"
      borderWidth="1"
      _web={{
        shadow: 2,
        borderWidth: 0,
      }}
    >
      <Image
        width={1600}
        height={400}
        rounded="xl"
        resizeMode="cover"
        source={{
          uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
        }}
        alt="image"
      />
      {/* <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              The Garden City
            </Heading>
            <Text
              fontSize="xs"
              _light={{
                color: "violet.500",
              }}
              _dark={{
                color: "violet.400",
              }}
              fontWeight="500"
              ml="-0.5"
              mt="-1"
            >
              The Silicon Valley of India.
            </Text>
          </Stack>
         
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text
                color="coolGray.600"
                _dark={{
                  color: "warmGray.200",
                }}
                fontWeight="400"
              >
                6 mins ago
              </Text>
            </HStack>
          </HStack>
        </Stack> */}
    </Box>
  );
}
