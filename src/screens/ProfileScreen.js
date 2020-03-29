import React from 'react';
import { View, Text, StyleSheet, Button, SafeAreaView } from 'react-native';

export const ProfileScreen = ({navigation}) => {
    const goToBack = () => {
        navigation.goBack()
    }
    return ( 
        <SafeAreaView style={styles.wrapper}>
            <Text>ProfileScreen</Text>
            <Button title="back" onPress={goToBack}/>
        </SafeAreaView>
     );
}

const styles = StyleSheet.create({
    wrapper:{
       
    }
})
 
