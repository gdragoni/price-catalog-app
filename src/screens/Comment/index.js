import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { SafeAreaView, Text, View, TextInput, Image, TouchableHighlight, FlatList, Alert } from 'react-native';
import CommentCard from '../../components/comment.component';
import styles from './styles';
import api from '../../network/api';

export default function CommentScreen({ route }) {
    const dispatch = useDispatch();
    const { product } = route.params
    const [isLoading, setIsLoading] = useState(false);
    const [comment, setComment] = useState("");
    const comments = useSelector(state => state.comments);

    const fetchComments = async () => {
        try {
            setIsLoading(true);
            const response = await api.get(`/comment?productID=${product._id}`);
            dispatch({type: 'SET_COMMENTS', payload: response.data});
            setIsLoading(false);
        } catch(err) {
            setIsLoading(false);
            Alert.alert("Erro", err.response ? err.response.data.message : err);
        }
    }

    const sendComment = async () => {
        try {
            setIsLoading(true);
            const response = await api.post("/comment/add", {
                comment,
                productID: product._id,
            });
            dispatch({type: 'SET_COMMENTS', payload: response.data});
            setIsLoading(false);
            setComment("");
        } catch(err) {
            setIsLoading(false);
            Alert.alert("Erro", err.response ? err.response.data.message : err);
        }
    }

    useEffect(() => {
        fetchComments();
        return () => {
            dispatch({ type: 'SET_CLEAR_COMMENTS' });
        }
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                style={styles.flatList}
                data={comments}
                refreshing={isLoading}
                inverted={true}
                onRefresh={async () => fetchComments()}
                keyExtractor={(item) => item._id}
                renderItem={({item, index}) => <CommentCard 
                                                product={product}
                                                comment={item} />}
            />
            <View style={styles.bottomContainer}>
                <TextInput
                    style={styles.commentTextInput}
                    placeholder={"Digite aqui"}
                    placeholderTextColor={'white'}
                    value={comment}
                    onChangeText={setComment}
                />
                <TouchableHighlight onPress={sendComment} style={styles.commentButtonView}>
                    <Image source={require('../../../assets/images/comment/send.png')} style={styles.commentImageButton} />
                </TouchableHighlight>
            </View>
        </SafeAreaView>
    );
}