import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight, Image, Dimensions } from 'react-native';
import { Marker, Callout } from 'react-native-maps';
import ImagePin from '../utils/imagePin';

function MapCallout({ market, onSelect }) {
   
    return (
        <Callout onPress={onSelect}>
            <View style={styles.calloutView}>
                { market.logo ? <Image style={styles.calloutImage} source={{ uri: market.logo }} /> : null }
                <Text style={styles.calloutText}>{market.name}</Text>
            </View>
        </Callout>
    )
}

export default function MapMarker({ market, onSelect }) {

    return (
        <Marker
            id={market._id}
            title={market.name}
            tracksViewChanges={false}
            coordinate={{
                latitude: market.latitude,
                longitude: market.longitude,
        }}>
        <View style={styles.markerView}>
            <Image source={ImagePin(market.type)} style={styles.markerImage} />
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
        height: 150,
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
        resizeMode: 'contain',
    },
});