import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import {THEME} from '../theme'

export const Card = ({data}) => {   
    return ( 
    <View style={styles.wrapper}>
        <View style={styles.card}>
                <View style={styles.banner}>
                    <ImageBackground
                        style={styles.bannerImage}
                        source={{ uri: 'http://'+data.item.image }}>
                    </ImageBackground>

                </View>
                <View style={styles.info}>
                    <View style={styles.productTextBlock}>
                <Text style={styles.title}>{data.item.action_name}</Text>
                        <Text style={styles.deadlineText}>Ակցիայի ավարտման օր</Text>
                        <Text style={styles.deadline}>{data.item.shipping_date}</Text>
                    </View>
                    <View style={styles.productInfoBlock}>
                        <View style={styles.productCount}>
                            <View style={styles.infoWrapperCount}>
                                <Text style={styles.desc}>Քանակ</Text>
                                <Text style={styles.value}>{data.item.kg} կգ</Text>
                            </View>
                        </View>

                        <View style={styles.productPrice}>
                            <View style={styles.infoWrapperPrice}>
                                <Text style={styles.desc}>Գումար</Text>
                                <Text style={styles.value}>{data.item.price} <Text>֏</Text></Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            </View>
     );
}

const styles = StyleSheet.create({
    wrapper:{
        width: '100%',
        alignItems: 'center'

    },
    card: {
        width: '90%',
        height: 290,
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
    productTextBlock: {
        height: '60%'

    },

    title: {
        fontSize: 28,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        marginVertical: 6,
        textAlign: 'center',

    },
    deadlineText: {
        fontSize: 16,
        textTransform: 'capitalize',
        color: THEME.MAIN_GREEN,
        marginVertical: 4,
        textAlign: 'center'

    },
    deadline: {
        fontSize: 14,
        fontWeight: 'bold',
        color: THEME.MAIN_GREY,
        textAlign: 'center'

    },
    productInfoBlock: {
        flexDirection: 'row',
        height: '40%'

    },
    productCount: {
        flex: 1,
        justifyContent: 'center',
    },
    infoWrapperCount: {
        alignItems: 'center',
        height: '60%',
        borderRightWidth: 2,
        borderRightColor: THEME.MAIN_GREY,
        borderStyle: 'dotted',
    },
    productPrice: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    infoWrapperPrice: {
        alignItems: 'center',
        height: '60%'

    },
    desc: {
        fontSize: 16,
        textTransform: 'capitalize',
        color: THEME.MAIN_GREY,
    },
    value: {
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: THEME.MAIN_GREEN
    }
})
 
