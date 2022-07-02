import React from 'react'
import { View, Text } from 'react-native';
import Card from '../components/Card';

export function ProfileScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Profile Screen</Text>
            <Card />
        </View>

    )
}

export default ProfileScreen