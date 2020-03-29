import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export const CompletedPostScreen = ({navigation}) => {
    const goToBack = () => {
        navigation.goBack()
    }
    return ( 
        <View style={styles.wrapper}>
            <Text>CurrentScreen</Text>
            <Button title="back" onPress={goToBack}/>
        </View>
     );
}

const styles = StyleSheet.create({
    wrapper:{
       
    }
})
 

 
