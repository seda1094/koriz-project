import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export const InfoScreen = ({navigation}) => {
    const goToBack = () => {
        navigation.goBack()
    }
    return ( 
        <View style={styles.wrapper}>
            <Text>Info</Text>
            <Button title="back" onPress={goToBack}/>
        </View>
     );
}

const styles = StyleSheet.create({
    wrapper:{
       
    }
})
 
