import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { SafeAreaView, Text, TouchableHighlight, Alert } from 'react-native';
import styles from './styles';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import api from '../../network/api';

export default function HomeScreen() {
    const dispatch = useDispatch();
    const mapMarkets = useSelector(state => state.market.mapMarkets);
    const [userLocation, setUserLocation] = useState(null);

    useEffect(() => {
        const fetchMarkets = async (location) => {
            try {
                const response = await api.get('/loja', {
                    ...location,
                    range: 30,
                });
                dispatch({type: 'SET_MAP_MARKETS', payload: response.data});
            } catch(err) {
                console.log(err);
                Alert.alert("Erro", err.response.data.message || err);
            }
        }
        if(userLocation) {
            fetchMarkets(userLocation);
        }
    }, [userLocation]);

    useEffect(() => {
        Geolocation.getCurrentPosition(info => {
                const {
                    latitude, longitude,
                } = info.coords;
                setUserLocation({latitude, longitude});
            },
            error => Alert.alert('Erro', JSON.stringify(error)),
        { 
            enableHighAccuracy: true, 
            timeout: 20000, 
            maximumAge: 1000 
        });
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <MapView
            style={styles.mapView}
            region={{
                ...userLocation,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }}
            >
            { mapMarkets.map(mapMarket => (
                <MapView.Marker 
                    ref={mark => mapMarket.mark = mark}
                    title={mapMarket.name}
                    key={mapMarket.id}
                    coordinate={{
                        latitude: mapMarket.latitude,
                        longitude: mapMarket.longitude,
                    }}
                />
            )) }
            </MapView>
        </SafeAreaView>
    );
}
