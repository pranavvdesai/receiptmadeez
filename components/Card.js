import React from 'react';
import { VStack, HStack, Avatar, Image, Text, NativeBaseProvider, AspectRatio, Center, Box, Stack, Heading, View, theme } from "native-base";

export default function () {
    return (
        <View>
            <Box bg={theme}shadow={2} rounded="lg" width={300} height={100}>
                <Stack space={3} p={[4, 4, 8]}>
                    <Heading
                        flex="1"
                        size={["md", "lg", "md"]}
                        noOfLines={2}
                    >
                        <Center>
                            <Text>
                                Electronics
                            </Text>
                        </Center>
                    </Heading>
                </Stack>
            </Box>
        </View >
    );
}