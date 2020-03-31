import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';

import { SwipingCard } from '../components/SwipingCard';
import { Spinner } from '../components/UI/Spinner';


export class CurrentPostScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slideData: [],
            loading: true,
        };
    }

    componentDidMount() {
        const url = `https://calm-everglades-49836.herokuapp.com/data/1/10`
        fetch(url).then(res => res.json())
            .then(res => {
                this.setState({
                    loading: false,
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

    onSwipeUp() {
        this.swipeForwardHandler()
    }

    onSwipeDown() {
        this.swipeBackHandler()
    }

    onSwipeLeft() {
        this.swipeForwardHandler()
    }

    onSwipeRight() {
        this.swipeBackHandler()
    }


    render() {
        let i = 30
        const config = {
            velocityThreshold: 0.1,
            directionalOffsetThreshold: 80
        };

        return (
            <View style={styles.container}>
                {this.state.loading ?
                    <Spinner size='large' />
                    : <GestureRecognizer
                        onSwipeUp={(state) => this.onSwipeUp(state)}
                        onSwipeDown={(state) => this.onSwipeDown(state)}
                        onSwipeLeft={(state) => this.onSwipeLeft(state)}
                        onSwipeRight={(state) => this.onSwipeRight(state)}
                        config={config}
                        style={styles.guestWrapper}
                    >
                        {this.state.slideData.map((data, index) => {
                            if (index >= 3) {
                                return;
                            }
                            return (<SwipingCard data={data} key={data.id.toString()} position={i -= 15} />)
                        })}
                    </GestureRecognizer>}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },

    guestWrapper: {
        width: '80%',
        height: '80%',
        justifyContent: 'center',
    }
})


