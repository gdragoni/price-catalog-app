import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { StyleSheet, View, Text, TouchableHighlight, Image, Platform, ActivityIndicator } from 'react-native';
import Share from "react-native-share";
import api from '../network/api';

export default function MarketModal({ market, onTap }) {
    const [isLoading, setIsLoading] = useState(false);

    if(market == null || Platform.OS === 'ios') {
        return null
    }

    return (
        <TouchableHighlight 
            onPress={onTap} 
            style={styles.container}>
                <View style={styles.modalView}>
                    { isLoading ? <ActivityIndicator style={styles.loading} color={"#DFB233"} /> : null }
                    <Image 
                    onLoadStart={() => setIsLoading(true)}
                    onLoadEnd={() => setIsLoading(false)}
                    style={styles.modalImage} 
                    source={{ uri: market.logo }} />
                </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute', 
        width: '100%', 
        height: 150, 
        zIndex: 1,
        borderBottomLeftRadius: 12, 
        borderBottomRightRadius: 12, 
        backgroundColor: '#2F0781', 
    },
    modalView: {
        height: '100%',
        width: '100%', 
        justifyContent: 'center', 
        alignItems: 'center',
        paddingVertical: 9,
    },
    modalImage: {
        height: "100%", 
        width: 200, 
        resizeMode: "contain",
    },
    loading: {
        position: 'absolute',
        zIndex: 1,
    },
});