import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableHighlight, Image, Dimensions, ActivityIndicator } from 'react-native';
import ImagePin from '../utils/imagePin';

const DistanceMessage = (km) => {
    if(km == null || isNaN(km)) { return "" }
    if(km < 0.05) {
        return "Está próximo de você!";
    } else if (km >= 1 && km < 1.1) {
        return `Há 1 kilômetro de você!`;
    } else if(km >= 1) {
        return `Há ${km.toFixed(1)} kilômetros de você!`;
    } else {
        return `Há ${(km*100).toFixed(0)} metros de você!`;
    }
}

export default function MarketCard({ market, onSelect }) {
    const [imageLoading, setImageLoading] = useState(false);
    return (
        <TouchableHighlight onPress={onSelect} style={styles.container}>
            <View style={styles.card}>
                <Image 
                onLoadStart={() => setImageLoading(true)}
                onLoad={() => setImageLoading(false)}
                source={{ uri: market.logo }} 
                style={styles.logo} />
                { imageLoading ? <ActivityIndicator color={"white"} type={"large"} style={styles.loadingImage} /> : null }
                <View style={styles.pinView}>
                    <Image source={ImagePin(market.type)} style={styles.pinImage} />
                </View>
                <View style={styles.textsView}>
                    <Text style={styles.textName}>{market.name}</Text>
                    <Text style={styles.text}>{market.address}</Text>
                    <Text style={styles.distanceText}>{DistanceMessage(market.distance)}</Text>
                </View>
            </View>
        </TouchableHighlight>
    )
}

const halfWidthScreen = Dimensions.get('window').width/2

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 9,
        paddingVertical: 5,
    },
    card: {
        paddingHorizontal: 18,
        paddingVertical: 9,
        flexDirection: 'row',
        backgroundColor: '#2F0781',
        alignItems: 'center',
        borderRadius: 12,
    },
    logo: {
        height: 80,
        width: 100,
        resizeMode: 'cover',
        borderRadius: 8,
    },
    pinView: { 
        width: 30, 
        height: 30, 
        backgroundColor: '#2F0781', 
        borderRadius: 15, 
        padding: 5,
        position: 'absolute',
        top: 0,
        left: 0,
    },
    pinImage: { 
        tintColor: 'white', 
        width: '100%', 
        height: '100%',
    },
    loadingImage: {
        position: 'absolute',
        left: 55,
    },
    textsView: {
        flex: 1,
        paddingHorizontal: 18,
    },
    textName: {
        color: 'white',
        fontFamily: 'OpenSans-SemiBold',
        fontSize: 18,
    },
    text: {
        color: 'white',
        fontFamily: 'OpenSans-Regular',
        fontSize: 15,
    },
    distanceText: {
        color: '#DFB233',
        fontFamily: 'OpenSans-Regular',
        fontSize: 15,
    }, 
});