import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { SafeAreaView, Alert, FlatList } from 'react-native';
import styles from './styles';
import LoadingView from '../Loading';
import MarketCard from '../../components/marketCard.component';
import api from '../../network/api';

export default function MarketListScreen({ navigation }) {
    const dispatch = useDispatch();
    const listMarkets = useSelector(state => state.market.listMarkets);
    const userLocation = useSelector(state => state.location);
    const range = useSelector(state => state.filter.range);
    const [isLoading, setIsLoading] = useState(false);

    const fetchMarkets = async (location) => {
        try {
            setIsLoading(true);
            const response = await api.get(`/loja?latitude=${location.latitude}&longitude=${location.longitude}&range=${range}`);
            dispatch({type: 'SET_LIST_MARKETS', payload: response.data});
            setIsLoading(false);
        } catch(err) {
            setIsLoading(false);
            Alert.alert("Erro", err.response ? err.response.data.message : err);
        }
    }

    useEffect(() => {
        if(userLocation) {
            fetchMarkets(userLocation);
        }
    }, [userLocation, range]);

    if(!userLocation) {
        return <LoadingView />
    }
    
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={listMarkets}
                refreshing={isLoading}
                onRefresh={async () => fetchMarkets(userLocation)}
                keyExtractor={(item) => item._id}
                renderItem={({item}) => <MarketCard onSelect={() => navigation.push('ProductListScreen', { market: item, title: item.name })} market={item} />}
            />
        </SafeAreaView>
    );
}
