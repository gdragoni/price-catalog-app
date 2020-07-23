import * as React from 'react';

import { SafeAreaView, Image, ActivityIndicator, StyleSheet, Dimensions } from 'react-native';

const halfWidthScreen = Dimensions.get('window').width/2
const logoProportion = 616/792 

export default function LoadingScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Image source={require('../../../assets/images/logo/offer-logo.png')} style={styles.logo} />
            <ActivityIndicator size="large" color="white" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: '#2F0781',
    },
    logo: {
        width: halfWidthScreen,
        height: halfWidthScreen*logoProportion,
        resizeMode: 'cover',
        borderRadius: 12,
        overflow: 'hidden',
    },
});