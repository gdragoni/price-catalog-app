import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { SafeAreaView, Text, View, FlatList, TouchableHighlight, Image } from 'react-native';
import ProductCard from '../../components/productCard.component';
import ImageView from "react-native-image-viewing";
import styles from './styles';
import api from '../../network/api';

export default function ProductListScreen({ route, navigation }) {
    const { market } = route.params;
    const [isLoading, setIsLoading] = useState(false);
    const [imagesIsVisible, setImagesIsVisible] = useState(false);
    const [imageIndex, setImageIndex] = useState(0);
    const productList = useSelector(state => state.products);
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        try {
            setIsLoading(true);
            const response = await api.get(`/produto?marketID=${market._id}`);
            dispatch({type: 'SET_PRODUCTS', payload: response.data});
            setIsLoading(false);
        } catch(err) {
            setIsLoading(false);
            Alert.alert("Erro", err.response ? err.response.data.message : err);
        }
    }

    useEffect(() => {
        fetchProducts();
        return () => {
            dispatch({ type: 'SET_CLEAR_PRODUCTS' });
        }
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <View style={{...styles.container, width: '100%'}}>
                <FlatList
                    style={styles.flatlist}
                    data={productList}
                    refreshing={isLoading}
                    contentContainerStyle={{ paddingBottom: 70, }}
                    onRefresh={async () => fetchProducts()}
                    keyExtractor={(item) => item._id}
                    renderItem={({item, index}) => <ProductCard 
                                                product={item}
                                                market={market}
                                                navigation={navigation}
                                                onImageTapped={() => {
                                                    setImageIndex(index);
                                                    setImagesIsVisible(true);
                                                }}
                    />}
                />
                <ImageView 
                    imageIndex={imageIndex}
                    images={productList.map((p) => ({ uri: p.image }))}
                    visible={imagesIsVisible}
                    onRequestClose={() => setImagesIsVisible(false)}
                />
                <View style={styles.addButtonContainer}>
                    <TouchableHighlight onPress={() => navigation.push('PublishProductScreen', route.params)} style={styles.addButtonView}>
                        <>
                            <Text style={styles.addButtonText}>Publicar</Text>
                            <Image style={styles.addButtonImage} source={require('../../../assets/images/product/add.png')} />
                        </>
                    </TouchableHighlight>
                </View>
            </View>
        </SafeAreaView>
    );
}