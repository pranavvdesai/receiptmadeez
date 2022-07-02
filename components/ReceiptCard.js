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
    <View>
      <Box
        shadow={2}
        rounded="lg"
        borderColor="white"
        borderWidth={2}
        width={300}
        height={100}
        background="#252D3A"
        margin="20"
      >
        <Stack space={3} p={[4, 4, 8]}>
          <Heading flex="1" size={["md", "lg", "md"]} noOfLines={2}>
            <Center>
              <Text color={"white"}>Electronics</Text>
            </Center>
          </Heading>
        </Stack>
      </Box>
    </View>
  );
}
