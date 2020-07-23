import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableHighlight, Image, Dimensions, Platform, ActivityIndicator } from 'react-native';
import { Marker, Callout } from 'react-native-maps';
import ImagePin from '../utils/imagePin';

function MapCallout({ market, onSelect }) {

    if(Platform.OS === 'ios') {
        return (
            <Callout onPress={onSelect}>
                <View style={styles.calloutView}>
                    { market.logo ? <Image style={styles.calloutImage} source={{ uri: market.logo }} /> : null }
                    <Text style={styles.calloutText}>{market.name}</Text>
                </View>
            </Callout>
        )
    }
    return (
        <Callout style={{ flex: -1, position: 'absolute', width: 200}} onPress={onSelect}>
            <View style={styles.calloutContainerAndroidView}>
                <View style={styles.calloutAndroidView}>
                    <Text style={styles.calloutText}>{market.name}</Text>
                </View>
            </View>
        </Callout>
    )
}

export default function MapMarker({ market, onSelect, setSelectedMarket }) {

    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <Marker
            id={market._id}
            title={market.name}
            tracksViewChanges={!imageLoaded}
            onPress={() => setSelectedMarket(market)}
            coordinate={{
                latitude: market.latitude,
                longitude: market.longitude,
        }}>
        <View style={styles.markerView}>
            <Image 
            onLoadStart={() => setImageLoaded(false)}
            onLoadEnd={() => setImageLoaded(true)}
            source={ImagePin(market.type)} 
            style={styles.markerImage} />
        </View>
        <MapCallout onSelect={onSelect} market={market} />
        </Marker>
    )
}

const halfWidthScreen = Dimensions.get('window').width/2

const styles = StyleSheet.create({
    markerView: { 
        width: 30, 
        height: 30, 
        backgroundColor: '#2F0781', 
        borderRadius: 15, 
        padding: 5,
    },
    markerImage: { 
        tintColor: 'white', 
        width: '100%', 
        height: '100%',
    },
    calloutTouchable: {
        width: halfWidthScreen, 
        height: 150,
    },
    calloutView: { 
        width: halfWidthScreen, 
        borderRadius: 15, 
        padding: 9,
    },
    calloutText: {
        width: '100%',
        fontFamily: 'OpenSans-SemiBold',
        fontSize: 15,
        color: '#2F0781',
        textAlign: 'center',
        marginTop: 5,
    },
    calloutImage: {
        width: '100%',
        height: 100,
        resizeMode: 'cover',
    },
    calloutContainerAndroidView: {
        height: 50,
        width: 200,
        backgroundColor: 'white',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    calloutAndroidView: {
        height: 50,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
});