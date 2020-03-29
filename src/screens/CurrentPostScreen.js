import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export const CurrentPostScreen = ({navigation}) => {
    const goToBack = () => {
        navigation.goBack()
    }
    return ( 
        <View style={styles.wrapper}>
            <Text>CurrentPostScreen</Text>
            <Button title="back" onPress={goToBack}/>
        </View>
     );
}

const styles = StyleSheet.create({
    wrapper:{
       
    }
})
 
