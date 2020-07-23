import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableHighlight, Image, Dimensions, ActivityIndicator } from 'react-native';

export default function CommentCard({ comment }) {
    const [imageLoading, setImageLoading] = useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.text}>{comment.comment}</Text>
                <Text style={styles.userNameText}>{comment.userName}</Text>
            </View>
        </View>
    )
}

const halfWidthScreen = Dimensions.get('window').width/2

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 9,
        paddingVertical: 5,
    },
    card: {
        width: '100%',
        paddingHorizontal: 18,
        paddingVertical: 18,
        backgroundColor: '#2F0781',
        alignItems: 'center',
        borderRadius: 12,
    },
    text: {
        width: '100%',
        color: 'white',
        fontFamily: 'OpenSans-SemiBold',
        fontSize: 15,
    },
    userNameText: {
        marginTop: 9,
        width: '100%',
        color: '#DFB233',
        fontFamily: 'OpenSans-Regular',
        fontSize: 15,
        textAlign: 'right',
    },
});