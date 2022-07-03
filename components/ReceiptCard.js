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
export default function ({ key, id, name, pd, ed }) {
  return (
    <Box alignItems="center" justifyContent="center" pt="2">
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
          <HStack space={4} alignContent="center" alignItems="baseline">
            <Heading color="rgb(155, 81, 224)">{name}</Heading>
            <Text
              fontSize="sm"
              _light={{
                color: "white",
              }}
              _dark={{
                color: "black",
              }}
              fontWeight="500"
            >
              {id}
            </Text>
          </HStack>
          <Text color="#B8B8CC" fontSize="xs">
            Bengaluru (also called Bangalore) is the center of India's high-tech
            industry.
          </Text>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text
                color="rgb(155, 81, 224)"
                _dark={{
                  color: "warmGray.200",
                }}
                fontWeight="400"
              >
                Purchase
              </Text>
            </HStack>
            <HStack alignItems="center">
              <Text
                color="coolGray.600"
                _dark={{
                  color: "warmGray.200",
                }}
                fontWeight="400"
              >
                {pd}
              </Text>
            </HStack>
          </HStack>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text
                color="rgb(155, 81, 224)"
                _dark={{
                  color: "warmGray.200",
                }}
                fontWeight="400"
              >
                Expiry
              </Text>
            </HStack>
            <HStack alignItems="center">
              <Text
                color="coolGray.600"
                _dark={{
                  color: "warmGray.200",
                }}
                fontWeight="400"
              >
                {ed}
              </Text>
            </HStack>
          </HStack>
          <Button
            size="sm"
            color="white"
            borderWidth={1}
            borderColor="rgb(155, 81, 224)"
            bg="transparent"
            colorScheme="rgb(155, 81, 224)"
          >
            Buy Now
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
