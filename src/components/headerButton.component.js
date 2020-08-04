import React from 'react';
import { StyleSheet, TouchableHighlight, Image } from 'react-native';

export default function HeaderButton({ icon, onPress }) {
    return (
        <TouchableHighlight onPress={onPress} style={styles.buttonContainer}>
            <Image style={styles.image} source={icon} />
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    buttonContainer: { 
        height: 40, 
        width: 40, 
        alignItems: 'center', 
        justifyContent: 'center',
        marginRight: 9,
    },
    image: { 
        height: 25, 
        width: 25, 
        tintColor: 'white' 
    },
});