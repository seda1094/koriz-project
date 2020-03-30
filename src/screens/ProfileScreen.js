import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';



export class ProfileScreen extends React.Component{
    constructor(){
        super()
        this.state={
            data: [],
            page: 1,
            loading: true,
            moreLoading: false
        }
    }

    render(){
    return (
        <SafeAreaView  style={styles.container}>
           <Text>Profile</Text>
        </SafeAreaView>
    );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    }
})



