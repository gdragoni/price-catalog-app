import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableHighlight, Image, Dimensions, ActivityIndicator } from 'react-native';
import moment from 'moment';
import 'moment/locale/pt-br';

export default function CommentCard({ comment }) {
    const [imageLoading, setImageLoading] = useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.userNameText}>{comment.userName}</Text>
                <Text style={styles.text}>{comment.comment}</Text>
                <Text style={styles.dateText}>{moment(comment.date).locale('pt-br').fromNow()}</Text>
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
    commentInfoView: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', 
    },
    text: {
        width: '100%',
        color: 'white',
        fontFamily: 'OpenSans-SemiBold',
        fontSize: 15,
    },
    userNameText: {
        width: '100%',
        color: '#DFB233',
        fontFamily: 'OpenSans-Regular',
        fontSize: 15,
        textAlign: 'left',
        marginBottom: 9,
    },
    dateText: {
        width: '100%',
        marginTop: 9,
        color: '#DFB233',
        fontFamily: 'OpenSans-Regular',
        fontSize: 15,
        textAlign: 'right',
    }
});