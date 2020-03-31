import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';

export const ProfileScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Profile</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})



