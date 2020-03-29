import React from 'react';
import { View, Text, StyleSheet, Button,SafeAreaView } from 'react-native';

export const InfoScreen = ({navigation}) => {
    const goToBack = () => {
        navigation.goBack()
    }
    return ( 
        <SafeAreaView style={styles.wrapper}>
            <Text>Info</Text>
            <Button title="back" onPress={goToBack}/>
        </SafeAreaView>
     );
}

const styles = StyleSheet.create({
    wrapper:{
       
    }
})
 
