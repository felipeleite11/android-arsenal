//https://facebook.github.io/react-native/docs/easing

//https://facebook.github.io/react-native/docs/animations

import React, { useState, useEffect } from 'react'
import { StyleSheet, Animated, Text, View } from 'react-native'

const FadeInView = props => {
    const [fadeAnim] = useState(new Animated.Value(0))
    const [topAnim] = useState(new Animated.Value(-200))

    useEffect(() => {
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 3000
            }),
            Animated.timing(topAnim, {
                toValue: 0,
                duration: 3000
            })
        ]).start()
    }, [])

    return (
        <Animated.View                
            style={{
                ...props.style,
                opacity: fadeAnim,
                marginTop: topAnim       
            }}
        >
            {props.children}
        </Animated.View>
    )
}

export default function AnimatedScreen() {
    return (
        <View style={styles.container}>
            <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
                <Text style={styles.text}>Fadein</Text>
            </FadeInView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    text: {
        fontSize: 28, 
        textAlign: 'center', 
        margin: 10
    }
})