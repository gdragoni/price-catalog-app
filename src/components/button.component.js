import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight, ActivityIndicator } from 'react-native';

function ButtonContent({isLoading, text}) {
    if(isLoading) {
        return (
            <View>
                <ActivityIndicator color="#FFFFFF" />
            </View>
        )
    }
    return (
        <View>
            <Text style={styles.textButton}>{text}</Text>
        </View>
    )
}

export default function Button({text, onTap, isLoading}) {
    return (
        <TouchableHighlight
            style={styles.button}
            onPress={isLoading ? () => null : onTap}
        >
             <ButtonContent 
                isLoading={isLoading} 
                text={text}
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
    textButton: {
        color: "white",
        fontFamily: 'OpenSans-Bold',
        fontSize: 15,
    },
});