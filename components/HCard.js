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
    // <Box
    //   margin="10"
    //   mx={{
    //     md: "20",
    //     base: "5",
    //   }}
    //   rounded="xl"
    //   borderWidth="1"
    //   _web={{
    //     shadow: 2,
    //     borderWidth: 0,
    //   }}
    // >
    //   <Image
    //     width={1600}
    //     height={{
    //       md: "400",
    //       base: "200",
    //     }}
    //     rounded="xl"
    //     resizeMode="cover"
    //     source={{
    //       uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
    //     }}
    //     alt="image"
    //   />
    //   {/* <Stack p="4" space={3}>
    //       <Stack space={2}>
    //         <Heading size="md" ml="-1">
    //           The Garden City
    //         </Heading>
    //         <Text
    //           fontSize="xs"
    //           _light={{
    //             color: "violet.500",
    //           }}
    //           _dark={{
    //             color: "violet.400",
    //           }}
    //           fontWeight="500"
    //           ml="-0.5"
    //           mt="-1"
    //         >
    //           The Silicon Valley of India.
    //         </Text>
    //       </Stack>

    //       <HStack alignItems="center" space={4} justifyContent="space-between">
    //         <HStack alignItems="center">
    //           <Text
    //             color="coolGray.600"
    //             _dark={{
    //               color: "warmGray.200",
    //             }}
    //             fontWeight="400"
    //           >
    //             6 mins ago
    //           </Text>
    //         </HStack>
    //       </HStack>
    //     </Stack> */}
    // </Box>

    <Stack
      direction={["column", "column", "row"]}
      margin="10"
      mx={{
        md: "20",
        base: "5",
      }}
      rounded="xl"
      overflow="hidden"
      shadow="1"
      _light={{
        backgroundColor: "coolGray.50",
      }}
      _dark={{
        backgroundColor: "gray.700",
      }}
    >
      <Box>
        <Image
          w={["100%", "100%", "40"]}
          h={{
            md: "100%",
          }}
          source={{
            uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
          }}
          alt="image"
        />
      </Box>
      <Stack flex="1" p="4" space={[3, 3, 1.5]} bg="#070708">
        <Stack space="2">
          <Heading size="md" ml="-1" color="white" mt="2">
            The Garden City
          </Heading>
          <Text
            fontSize="xs"
            color="violet.500"
            fontWeight="500"
            ml="-0.5"
            mt="-1"
            mb="2"
          >
            The Silicon Valley of India.
          </Text>
        </Stack>
        <Text fontWeight="400" color="#B8B8CC">
          Bengaluru (also called Bangalore) is the center of India's high-tech
          industry. The city is also known for its parks and nightlife.
        </Text>
        <HStack alignItems="center" space="4" justifyContent="space-between">
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
      </Stack>
      <Button
        size="sm"
        color="white"
        bg="rgb(155, 81, 224)"
        colorScheme="rgb(155, 81, 224)"
        borderRadius="none"
      >
        Buy Now
      </Button>
    </Stack>
  );
}
