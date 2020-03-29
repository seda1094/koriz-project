import React from 'react';
import { View, Text, StyleSheet, Button, SafeAreaView } from 'react-native';

export const CurrentPostScreen = ({navigation}) => {
    const goToBack = () => {
        navigation.goBack()
    }
    return ( 
        <SafeAreaView>
        <View style={styles.wrapper}>
            <Text>CurrentPostScreen</Text>
            <Button title="back" onPress={goToBack}/>
        </View>
        </SafeAreaView>
     );
}

const styles = StyleSheet.create({
    wrapper:{
       
    }
})
 
