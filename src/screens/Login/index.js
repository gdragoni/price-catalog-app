import * as React from 'react';
import { StyleSheet, SafeAreaView, View, Text, Image } from 'react-native';

export default function LoginScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Image source={require('../../../assets/images/login/login-background.jpg')} style={styles.backgroundImage} />

            <Text style={{
                fontFamily: 'OpenSans-Bold'
            }}>Login Screen</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        
    },
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
    },
});