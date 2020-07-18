import * as React from 'react';

import { SafeAreaView, Image, TouchableHighlight, StyleSheet, Dimensions } from 'react-native';

const halfWidthScreen = Dimensions.get('window').width/2
const logoProportion = 616/792 

export default function LoadingScreen() {
    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#2F0781' }}>
            <Image source={require('../../../assets/images/logo/offer-logo.png')} style={styles.logo} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    logo: {
        width: halfWidthScreen,
        height: halfWidthScreen*logoProportion,
        resizeMode: 'cover',
        borderRadius: 12,
        overflow: 'hidden',
    },
});