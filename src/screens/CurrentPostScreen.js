import React, { Component } from 'react';
import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import { THEME } from '../theme';




export class CurrentPostScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            myText: 'I\'m ready to get swiped!',
            gestureName: 'none',
            backgroundColor: '#fff',
            slideData: [
                {
                    id: '1',
                    title: 'Կարտոֆիլ',
                    count: 11,
                    day: 18,
                    percent: 55,
                    uri: 'https://cnet1.cbsistatic.com/img/WyqFeBV0ac_aX630IjFzoo_iA74=/2019/08/21/e517f796-18d7-46d5-aede-b16b0a5f7310/canned-foods.jpg',
                },

                {
                    id: '2',
                    title: 'Լոլիկ',
                    count: 63,
                    day: 44,
                    percent: 15,

                    uri: 'https://www.eatright.org/-/media/eatrightimages/food/nutrition/healtheating/functionalfoods-484286636.jpg'
                },
                {
                    id: '3',
                    count: 98,
                    day: 27,
                    percent: 52,

                    title: 'Գազար',
                    uri: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/12/31/15/istock-854725402.jpg?w968h681'
                },
                {
                    id: '4',
                    count: 24,
                    day: 2,
                    percent: 42,

                    title: 'Սունկ',
                    uri: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-weight-loss-foods-1544650287.jpg?crop=1.00xw:0.752xh;0,0.156xh&resize=480:*'
                },
                {
                    id: '5',
                    percent: 13,
                    count: 23,
                    day: 10,
                    title: 'Ծիրան',
                    uri: 'https://chinesenewyear.imgix.net/assets/images/food/chinese-new-year-food-feast.jpg?q=50&w=640&h=360&auto=format'
                },
            ]
        };
    }

    swipeForwardHandler = () => {
        const cloneOfArray = [...this.state.slideData]
        let r = cloneOfArray.shift();
        cloneOfArray.push(r)
        console.log(this.state.slideData);
        this.setState((prev) => ({ ...prev, slideData: cloneOfArray }));
    }

    swipeBackHandler = () => {
        const cloneOfArray = [...this.state.slideData]
        let r = cloneOfArray.pop();
        cloneOfArray.unshift(r)
        console.log(this.state.slideData);
        this.setState((prev) => ({ ...prev, slideData: cloneOfArray }));
    }

    onSwipeUp(gestureState) {
        this.swipeForwardHandler()
    }

    onSwipeDown(gestureState) {
        this.swipeBackHandler()

    }

    onSwipeLeft(gestureState) {
        this.swipeForwardHandler()
    }

    onSwipeRight(gestureState) {
        this.swipeBackHandler()
    }



    render() {

        const config = {
            velocityThreshold: 0.1,
            directionalOffsetThreshold: 80
        };

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
                <GestureRecognizer
                    // onSwipe={(direction, state) => this.onSwipe(direction, state)}
                    onSwipeUp={(state) => this.onSwipeUp(state)}
                    onSwipeDown={(state) => this.onSwipeDown(state)}
                    onSwipeLeft={(state) => this.onSwipeLeft(state)}
                    onSwipeRight={(state) => this.onSwipeRight(state)}
                    config={config}
                    style={{
                        width: '70%',
                        height: '70%',
                        justifyContent: 'center',
                    }}
                >
                    <View style={[styles.imageWrapper,{bottom: 0, right: 0 }]}>
                        <ImageBackground style={{ width: '100%', height: '100%' }} source={{ uri: this.state.slideData[2].uri }}>
                        </ImageBackground>
                    </View>
                    <View style={[styles.imageWrapper,{bottom: 15, right: 15 }]}>
                        <ImageBackground style={{ width: '100%', height: '100%' }} source={{ uri: this.state.slideData[1].uri }}>
                        </ImageBackground>
                    </View>
                    <View style={[styles.imageWrapper,{bottom: 30, right: 30 }]}>
                        <ImageBackground style={{ width: '100%', height: '100%' }} source={{ uri: this.state.slideData[0].uri }}>
                            <View style={styles.textBlock}>
                                <View style={[styles.section, styles.sectionTop]}>
                                    <View style={styles.wrapperBlock}>
                                        <View style={styles.wrapper}>
                                            <Text style={styles.title}>{this.state.slideData[0].title}</Text>
                                            <Text style={styles.desc}>{this.state.slideData[0].count}կգ {this.state.slideData[0].day} օրում</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={[styles.section, styles.sectionBottom]}>
                                    <View style={styles.wrapperBlock}>
                                        <View style={styles.wrapper}>
                                            <View style={[styles.topInfoBlock, styles.topSection]}>
                                                <View style={styles.infoBlockCol}>
                                                    <Text style={styles.textVal}>{this.state.slideData[0].count}կգ</Text>
                                                    <Text style={styles.textDesc}>Գնել են</Text>
                                                </View>
                                                <View style={styles.infoBlockCol}>
                                                    <Text style={styles.textVal}>{this.state.slideData[0].day}օր</Text>
                                                    <Text style={styles.textDesc}>Ավարտ</Text>
                                                </View>

                                            </View>
                                            <View style={[styles.topRangeBlock, styles.topSection]}>
                                                <View style={styles.rangeBlock}>
                                                    <View style={[styles.rangeActive, { width: this.state.slideData[0].percent + '%' }]}></View>
                                                    <View style={[styles.rangeDisabled, { width: 100 - this.state.slideData[0].percent + '%' }]}></View>
                                                </View>
                                                <Text style={styles.textInfo}>{this.state.slideData[0].percent}% գնված է</Text>
                                            </View>

                                        </View>
                                    </View>
                                </View>
                            </View>
                        </ImageBackground>
                    </View>
                </GestureRecognizer>
            </View>
        );
    }
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


