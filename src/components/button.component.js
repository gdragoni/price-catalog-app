import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight, ActivityIndicator, Image } from 'react-native';

function ButtonContent({isLoading, text, icon}) {
    if(isLoading) {
        return (
            <View>
                <ActivityIndicator color="#FFFFFF" />
            </View>
        )
    }
    return (
        <View style={styles.buttonView}>
            <Text style={styles.textButton}>{text}</Text>
            { icon ? <Image source={icon} style={styles.image} /> : null }
        </View>
    )
}

export default function Button({text, onTap, isLoading, icon}) {
    return (
        <TouchableHighlight
            style={styles.button}
            onPress={isLoading ? () => null : onTap}
        >
             <ButtonContent 
                isLoading={isLoading} 
                text={text}
                icon={icon}
             />
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2F0781',
        marginVertical: 8,
        borderRadius: 12,
        height: 60,
        width: '100%',
    },
    buttonView: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButton: {
        color: "white",
        fontFamily: 'OpenSans-Bold',
        fontSize: 15,
    },
    image: {
        height: 30,
        width: 30,
        position: 'absolute',
        right: 0,
        marginRight: 18,
        tintColor: 'white',
    },
});