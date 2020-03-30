import React, { Component } from 'react';
import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import { THEME } from '../theme';
import { SwipingCard } from '../components/SwipingCard';




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
        console.log(gestureState);
        
        this.swipeForwardHandler()
    }

    onSwipeDown() {
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
                    <SwipingCard data={this.state.slideData[2]} position={0}/>
                    <SwipingCard data={this.state.slideData[1]} position={15}/>
                    <SwipingCard data={this.state.slideData[0]} position={30}/>
                </GestureRecognizer>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    
})


