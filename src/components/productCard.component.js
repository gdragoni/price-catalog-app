import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { StyleSheet, View, Text, TouchableHighlight, Image, Dimensions, ActivityIndicator, Alert } from 'react-native';
import Share from "react-native-share";
import api from '../network/api';
import moment from 'moment';
import 'moment/locale/pt-br';

function ProductCardButton({ text, icon, onTap, isSelected }) {
    return (
        <TouchableHighlight style={styles.buttonView} onPress={onTap}>
            <>
            <Image style={{ ...styles.buttonImage, tintColor: isSelected ? "white" : "#DFB233" }} source={icon} />
            <Text style={{ ...styles.textButton, color: isSelected ? "white" : "#DFB233" }}>{text}</Text>
            </>
        </TouchableHighlight>
    )
}

export default function ProductCard({ product, market, navigation, onImageTapped }) {
    const [isLoading, setIsLoading] = useState(false);
    const userID = useSelector(state => state.user.id);
    const dispatch = useDispatch();
    const userLiked = product.likes && product.likes.includes(userID);

    const handleShare = async () => {
        Share.open({
            title: market.name,
            message: `${product.description}.\n${market.name}.\n${market.address}`,
            url: product.image,
        }).then(console.log).catch(console.log);
    }

    const handleLike = async () => {
        try {
            setIsLoading(true);
            const response = await api.post(`/produto/like?id=${product._id}`);
            dispatch({type: 'UPDATE_PRODUCT', payload: response.data});
            setIsLoading(false);
        } catch(err) {
            console.log(err);
            setIsLoading(false);
            Alert.alert("Erro", err.response ? err.response.data.message : err);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.dateText}>{moment(product.date).locale('pt-br').fromNow()}</Text>
                <TouchableHighlight style={{ width: '100%' }} onPress={onImageTapped}>
                    <Image
                    onLoadStart={() => setIsLoading(true)}
                    onLoad={() => setIsLoading(false)}
                    source={{ uri: product.image }} 
                    style={styles.image} />
                </TouchableHighlight>
                { isLoading ? <ActivityIndicator color={"white"} type={"large"} style={styles.loadingImage} /> : null }
                <View style={styles.textsView}>
                    <Text style={styles.textName}>{product.description}</Text>
                </View>
                { !product.likeMessage ? null : 
                <View style={styles.likeView}>
                    <Text style={styles.likeText}>{product.likeMessage}</Text>
                </View> 
                }
                <View style={styles.buttonsContainerView}>
                    <ProductCardButton
                        text={"Curtir"}
                        isSelected={userLiked}
                        icon={require('../../assets/images/product/like.png')}
                        onTap={handleLike}
                    />
                    <ProductCardButton 
                        text={"Comentar"}
                        icon={require('../../assets/images/product/comment.png')}
                        onTap={() => navigation.push('CommentScreen', { title: product.description, product })}
                    />
                    <ProductCardButton 
                        text={"Compartilhar"}
                        icon={require('../../assets/images/product/share.png')}
                        onTap={handleShare}
                    />
                </View>
            </View>
        </View>
    )
}

const widthScreen = Dimensions.get('window').width

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 9,
        paddingVertical: 5,
    },
    card: {
        paddingHorizontal: 18,
        paddingTop: 18,
        backgroundColor: '#2F0781',
        alignItems: 'center',
        borderRadius: 12,
        justifyContent: 'center',
    },
    image: {
        height: widthScreen/2,
        width: '100%',
        resizeMode: 'cover',
        borderRadius: 8,
    },
    textsView: {
        flex: 1,
        paddingHorizontal: 18,
    },
    textName: {
        color: 'white',
        fontFamily: 'OpenSans-SemiBold',
        fontSize: 18,
        marginTop: 18,
    },
    loadingImage: {
        position: 'absolute',
        paddingBottom: 30,
    },
    buttonsContainerView: { 
        flexDirection: 'row',
        width: '100%',
        borderTopWidth: 1,
        borderTopColor: "#eee",
        justifyContent: 'space-between',
    },
    buttonView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
    },
    textButton: {
        color: "#DFB233",
        marginLeft: 9,
        fontFamily: 'OpenSans-SemiBold',
    },
    buttonImage: {
        width: 20,
        height: 20,
    },
    likeView: {
        width: '100%',
        marginVertical: 9,
    },
    likeText: {
        color: 'white',
        fontFamily: 'OpenSans-Regular',
    },
    dateText: {
        width: '100%',
        color: '#DFB233',
        fontFamily: 'OpenSans-Regular',
        fontSize: 15,
        textAlign: 'left',
        marginBottom: 9,
    },
});