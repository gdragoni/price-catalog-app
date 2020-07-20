import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { SafeAreaView, Text, TouchableHighlight, Alert, View, Image } from 'react-native';
import styles from './styles';
import LoadingView from '../Loading';
import MapMarker from '../../components/mapMarker.component';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import api from '../../network/api';

export default function MapScreen({ navigation }) {
    const dispatch = useDispatch();
    const mapMarkets = useSelector(state => state.market.mapMarkets);
    const [userLocation, setUserLocation] = useState(null);

    useEffect(() => {
        const watchID = Geolocation.watchPosition(info => {
                const {
                    latitude, longitude,
                } = info.coords;
                setUserLocation({latitude, longitude});
            },
            error => Alert.alert('Erro', JSON.stringify(error)),
        { 
            timeout: 300000,
            enableHighAccuracy: true, 
            timeout: 20000, 
            maximumAge: 1000 
        });
        return () => {
            Geolocation.clearWatch(watchID);
        }
    }, []);

    useEffect(() => {
        const fetchMarkets = async (location) => {
            try {
                const response = await api.get(`/loja?latitude=${location.latitude}&longitude=${location.longitude}&range=10`);
                dispatch({type: 'SET_MAP_MARKETS', payload: response.data});
            } catch(err) {
                console.log("Erro fetchMarkets "+err);
                Alert.alert("Erro", err.response ? err.response.data.message : err);
            }
        }
        
        if(userLocation) {
            fetchMarkets(userLocation);
        }
    }, [userLocation]);

    if(!userLocation) {
        return <LoadingView />
    }
    
    return (
        <View style={styles.container}>
        <SafeAreaView style={styles.container}>
            <MapView
            showsCompass={false}
            style={styles.mapView}
            region={{
                ...userLocation,
                latitudeDelta: 0.03,
                longitudeDelta: 0.03,
            }}
            >
            { mapMarkets.map(mapMarket => (
                <MapMarker market={mapMarket} onSelect={() => console.log(mapMarket)} key={mapMarket._id} />
            )) }
            </MapView>
        </SafeAreaView>
        </View>
    );
}
