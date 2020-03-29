import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export const ProfileScreen = ({navigation}) => {
    const goToBack = () => {
        navigation.goBack()
    }
    return ( 
        <View style={styles.wrapper}>
            <Text>ProfileScreen</Text>
            <Button title="back" onPress={goToBack}/>
        </View>
     );
}

const styles = StyleSheet.create({
    wrapper:{
       
    }
})
 
