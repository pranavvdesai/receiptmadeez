import React from 'react'
import { View, Text } from 'react-native';
import Card from '../components/ReceiptCard';
import { Box, Center, Flex, Spacer } from 'native-base';
import { NativeBaseProvider } from 'native-base';

export function SavedReceipt() {
    return (

        // <View>

        //     <Card />
        //     <Card />
        //     <Card />
        // </View>
        <View

            style={{ flex: 1, overflowX: 'hidden' }}
            direction='column'
        >
            <Box flex={1} flexDirection='row' flexWrap='wrap'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Box>
        </View>
    )
}
