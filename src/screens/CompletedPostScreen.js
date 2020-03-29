import React from 'react';
import { View, Text, StyleSheet, Button, Image, ImageBackground } from 'react-native';
import { THEME } from '../theme';

export const CompletedPostScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.banner}>
                    <ImageBackground
                        style={styles.bannerImage}
                        source={{ uri: 'https://cdn.cheapism.com/images/081516_national_potato_day_recipe.2e16d0ba.fill-1440x605.jpg' }}>
                        {/* <View style={styles.textWrap} >
                        <Text style={styles.title}>{new Date(post.date).toLocaleDateString()}</Text>
                    </View> */}
                    </ImageBackground>
                    
                </View>
                <View style={styles.info}>
                <View style={styles.productTextBlock}>
                        <Text style={styles.title}>Կարտոֆիլ</Text>
                        <Text style={styles.deadlineText}>Ակցիայի ավարտման օր</Text>
                        <Text style={styles.deadline}>23.05.2019</Text>
                    </View>
                    <View style={styles.productInfoBlock}>
                        <View style={styles.productCount}>
                            <View style={styles.infoWrapperCount}>
                                <Text style={styles.desc}>Քանակ</Text>
                                <Text style={styles.value}>8 կգ</Text>
                            </View>
                        </View>
                        <View style={styles.productPrice}>
                            <View style={styles.infoWrapperPrice}>
                                <Text style={styles.desc}>Գումար</Text>
                                <Text style={styles.value}>20 000 <Text>֏</Text></Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    card: {
        width: '80%',
        height: 250,
        marginTop: 20,
        borderRadius: 10,
        overflow: 'hidden',
        shadowColor: THEME.BLACK,
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.55,
        shadowRadius: 14.78,
        elevation: 22,
    },
    banner: {
        flex: 3,
        backgroundColor: THEME.MAIN_GREEN,

    },
    bannerImage: {
        width: '100%',
        height: '100%'
    },
    info: {
        flex: 4,
        backgroundColor: THEME.WHITE
    },
    productTextBlock:{
        textAlign: 'center',
        flex: 3,
    },

    title:{
        fontSize: 30,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        marginVertical: 6,
    },
    deadlineText:{
        fontSize: 16,
        textTransform: 'capitalize',
        color: THEME.MAIN_GREEN,
        marginVertical: 4

    },
    deadline:{
        fontSize: 14,
        fontWeight: 'bold',
        color: THEME.MAIN_GREY

    },
    productInfoBlock:{
        flexDirection: 'row',
        flex: 2,

    },
    productCount:{
        flex: 1,
        justifyContent: 'center',
    },
    infoWrapperCount:{
        alignItems: 'center',
        height: '70%',
        borderRightWidth: 2,
        borderRightColor: THEME.MAIN_GREY,
        borderStyle: 'dashed',
    },
    productPrice:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    infoWrapperPrice:{
        alignItems: 'center',
        height: '70%'

    },
    desc:{
        fontSize: 16,
        textTransform: 'capitalize',
        color: THEME.MAIN_GREY,
    },
    value:{
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: THEME.MAIN_GREEN
    }
})



