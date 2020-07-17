import * as React from 'react';
import { StyleSheet, SafeAreaView, View, Text, ImageBackground, Image, Dimensions } from 'react-native';

export default function LoginScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('../../../assets/images/login/login-background.jpg')} style={styles.imageBackground}>
                <View style={styles.topSpaceView}>
                    <Image source={require('../../../assets/images/logo/offer-logo-purple.png')} style={styles.logo} />
                </View>
                <View style={styles.bottomSpaceView}>

                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}

const halfWidthScreen = Dimensions.get('window').width/2
const logoProportion = 616/792 

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
    },
    imageBackground: {
      flex: 1,
      resizeMode: 'cover',
      width: '100%',
      height: '100%',
    },
    topSpaceView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: halfWidthScreen,
        height: halfWidthScreen*logoProportion,
        resizeMode: 'cover',
        borderRadius: 12,
        overflow: 'hidden',
    },
    bottomSpaceView: {
        flex: 1,
    },
});