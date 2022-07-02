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
export default function () {
  return (
    <Box alignItems="center" justifyContent="center">
      <Box
        maxW="80"
        rounded="lg"
        overflow="hidden"
        bg="#13131A"
        borderWidth="1"
        _web={{
          shadow: 2,
          borderWidth: 0,
        }}
        mb="4"
      >
        <Box p="2">
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image
              source={{
                uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
              }}
              alt="image"
              rounded="lg"
            />
          </AspectRatio>
        </Box>
        <Stack p="4" space={3} bg="#13131A">
          <Stack space={2}>
            <Heading size="sm" ml="-1" color="rgb(155, 81, 224)">
              The Garden City
            </Heading>
            <Text
              fontSize="sm"
              _light={{
                color: "white",
              }}
              _dark={{
                color: "black",
              }}
              fontWeight="500"
              ml="-0.5"
              mt="-1"
            >
              The Silicon Valley of India.
            </Text>
          </Stack>
          <Text color="#B8B8CC" fontSize="xs">
            Bengaluru (also called Bangalore) is the center of India's high-tech
            industry.
          </Text>
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
          <Button
            size="sm"
            color="white"
            bg="rgb(155, 81, 224)"
            colorScheme="rgb(155, 81, 224)"
          >
            Buy Now
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
