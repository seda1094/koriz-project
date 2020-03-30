import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import { SwipingCard } from '../components/SwipingCard';




export class CurrentPostScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            slideData: [],
        };
    }


    componentDidMount() {
        const url = `https://calm-everglades-49836.herokuapp.com/data/1/5`
        fetch(url).then(res => res.json())
            .then(res => {
                this.setState({
                    slideData: res
                })
            })
    }


    swipeForwardHandler = () => {
        const cloneOfArray = [...this.state.slideData]
        let r = cloneOfArray.shift();
        cloneOfArray.push(r)
        this.setState((prev) => ({ ...prev, slideData: cloneOfArray }));
    }

    swipeBackHandler = () => {
        const cloneOfArray = [...this.state.slideData]
        let r = cloneOfArray.pop();
        cloneOfArray.unshift(r)
        this.setState((prev) => ({ ...prev, slideData: cloneOfArray }));
    }

    onSwipeUp(gestureState) {
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

        let i = 0
        return (
            <View style={styles.container}>
                <GestureRecognizer
                    // onSwipe={(direction, state) => this.onSwipe(direction, state)}
                    onSwipeUp={(state) => this.onSwipeUp(state)}
                    onSwipeDown={(state) => this.onSwipeDown(state)}
                    onSwipeLeft={(state) => this.onSwipeLeft(state)}
                    onSwipeRight={(state) => this.onSwipeRight(state)}
                    config={config}
                    style={styles.guestWrapper}
                >

                    {this.state.slideData.map(data => <SwipingCard data={data} position={i += 15} />)}
                </GestureRecognizer>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'flex-end', 
        backgroundColor: '#fff'
    },
    guestWrapper:{
        width: '70%',
        height: '70%',
        justifyContent: 'center',
    }
})


