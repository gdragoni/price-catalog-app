import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, Dimensions, ActivityIndicator, TouchableHighlight } from 'react-native';
import ImageView from "react-native-image-viewing";

export default function ToninhoEasterEgg() {
    const [tapCounter, setTapCounter] = useState(0);
    const [easterEggVisible, setEasterEggVisible] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setTapCounter(0);
        }, 1000);
        if(tapCounter == 20) {
            setEasterEggVisible(true);
        }
        return () => {
            clearTimeout(timeout);
        }
    }, [tapCounter]);

    return (
        <TouchableHighlight
            style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}
            onPress={() => setTapCounter(tapCounter+1)}>
            <>
            <Image source={require('../../assets/images/logo/offer-logo-purple.png')} style={styles.logo} />
            <ImageView
                imageIndex={0}
                images={[
                    require('../../assets/images/tonim/1.jpeg'),
                    require('../../assets/images/tonim/2.jpeg'),
                    require('../../assets/images/tonim/3.jpeg'),
                    require('../../assets/images/tonim/4.jpeg'),
                    require('../../assets/images/tonim/5.jpeg'),
                    require('../../assets/images/tonim/6.jpeg'),
                    ]}
                visible={easterEggVisible}
                onRequestClose={() => setEasterEggVisible(false)}
            />
            </>
        </TouchableHighlight>
    )
}

const halfWidthScreen = Dimensions.get('window').width/2
const logoProportion = 616/792 

const styles = StyleSheet.create({
    logo: {
        width: halfWidthScreen,
        height: halfWidthScreen*logoProportion,
        resizeMode: 'cover',
        borderRadius: 12,
        overflow: 'hidden',
        marginTop: 20,
    },
});