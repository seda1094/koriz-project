import React from 'react';
import { View, Text, StyleSheet, Button, Image, ImageBackground, SafeAreaView } from 'react-native';
import {THEME} from '../theme'

export const SwipingCard = ({data,position}) => {    
    return ( 
<View style={[styles.imageWrapper,{bottom: position, right: position }]}>
                        <ImageBackground style={{ width: '100%', height: '100%' }} source={{ uri: data.uri }}>
                            <View style={styles.textBlock}>
                                <View style={[styles.section, styles.sectionTop]}>
                                    <View style={styles.wrapperBlock}>
                                        <View style={styles.wrapper}>
                                            <Text style={styles.title}>{data.title}</Text>
                                            <Text style={styles.desc}>{data.count}կգ {data.day} օրում</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={[styles.section, styles.sectionBottom]}>
                                    <View style={styles.wrapperBlock}>
                                        <View style={styles.wrapper}>
                                            <View style={[styles.topInfoBlock, styles.topSection]}>
                                                <View style={styles.infoBlockCol}>
                                                    <Text style={styles.textVal}>{data.count}կգ</Text>
                                                    <Text style={styles.textDesc}>Գնել են</Text>
                                                </View>
                                                <View style={styles.infoBlockCol}>
                                                    <Text style={styles.textVal}>{data.day}օր</Text>
                                                    <Text style={styles.textDesc}>Ավարտ</Text>
                                                </View>

                                            </View>
                                            <View style={[styles.topRangeBlock, styles.topSection]}>
                                                <View style={styles.rangeBlock}>
                                                    <View style={[styles.rangeActive, { width: data.percent + '%' }]}></View>
                                                    <View style={[styles.rangeDisabled, { width: 100 - data.percent + '%' }]}></View>
                                                </View>
                                                <Text style={styles.textInfo}>{data.percent}% գնված է</Text>
                                            </View>

                                        </View>
                                    </View>
                                </View>
                            </View>
                        </ImageBackground>
                    </View>
     );
}

const styles = StyleSheet.create({
    imageWrapper: {
        width: '100%', height: '100%', position: 'absolute', borderRadius: 10, overflow: 'hidden'
    },
    textBlock: {
        flex: 1,
    },
    section: {
        flex: 1,
    },
    sectionTop: {
        alignItems: 'center',
        // paddingTop: 10
    },
    sectionBottom: {
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    wrapperBlock: {
        height: '40%',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        alignItems: 'center'
    },
    wrapper: {
        height: '100%',
        width: '80%',
        paddingTop: 10

    },
    title: {
        fontSize: 30,
        color: THEME.WHITE,
        fontWeight: "bold",
        textTransform: 'uppercase'
    },
    desc: {
        fontSize: 20,
        color: THEME.WHITE,
    },
    topSection: {
        height: '50%',
    },
    topInfoBlock: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    infoBlockCol: {
        width: '30%',
        height: '100%',
    },
    textVal: {
        color: THEME.WHITE,
        fontWeight: "bold",
        fontSize: 16,

    },
    textDesc: {
        color: THEME.MAIN_GREY,
        fontSize: 14,

    },
    rangeBlock: {
        width: '100%',
        height: '30%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    rangeActive: {
        height: '30%',
        backgroundColor: THEME.MAIN_GREEN,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },
    rangeDisabled: {
        height: '30%',
        backgroundColor: THEME.MAIN_GREY,
        // borderTopLeftRadius: 5,
        // borderBottomLeftRadius: 5,
    },
    textInfo: {
        color: THEME.WHITE,
        fontSize: 14,
        fontWeight: "bold",


    }
})
 














