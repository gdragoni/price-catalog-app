import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { SafeAreaView, Alert, View, PermissionsAndroid, Platform, Image, TouchableHighlight } from 'react-native';
import styles from './styles';
import LoadingView from '../Loading';
import MapMarker from '../../components/mapMarker.component';
import MapView from "react-native-map-clustering";
import Geolocation from '@react-native-community/geolocation';
import MarketModal from '../../components/marketModal.component';
import api from '../../network/api';

export default function MapScreen({ navigation }) {
    const dispatch = useDispatch();
    const mapMarkets = useSelector(state => state.market.mapMarkets);
    const userLocation = useSelector(state => state.location);
    const range = useSelector(state => state.filter.range);
    const [isLoading, setIsLoading] = useState(false);
    const [grantedPermission, setGrantedPermission] = useState(false);
    const [selectedMarket, setSelectedMarket] = useState(null);

    useEffect(() => {
        
        const requestAndroidLocationPermission = async () => {
            const granted = await PermissionsAndroid.check( PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION );
            if(granted === PermissionsAndroid.RESULTS.GRANTED){
                setGrantedPermission(true);
            } else {
                const grantedRequested = await PermissionsAndroid.request(
                  PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                  {
                    'title': 'Offer',
                    'message': 'Usamos sua localização para procurar ofertas próximas de você!',
                  }
                );
                setGrantedPermission(grantedRequested === PermissionsAndroid.RESULTS.GRANTED);
                if(grantedRequested !== PermissionsAndroid.RESULTS.GRANTED) {
                    Alert.alert("O aplicativo necessita de permissão para usar a localização para buscar ofertas próximas de você!");
                }
            }
        }

        if(Platform.OS === 'ios') {
            setGrantedPermission(true);
        } else {
            requestAndroidLocationPermission();
        }
    }, []);

    useEffect(() => {
        if(grantedPermission) {
            const watchID = Geolocation.watchPosition(info => {
                    const {
                        latitude, longitude,
                    } = info.coords;
                    dispatch({ type: 'SET_LOCATION', payload: {latitude, longitude} });
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
        }
    }, [grantedPermission])

    useEffect(() => {
        const fetchMarkets = async (location) => {
            try {
                setIsLoading(true);
                const response = await api.get(`/loja?latitude=${location.latitude}&longitude=${location.longitude}&range=${range}`);
                dispatch({type: 'SET_MAP_MARKETS', payload: response.data});
                setIsLoading(false);
            } catch(err) {
                setIsLoading(false);
                Alert.alert("Erro", err.response ? err.response.data.message : err);
            }
        }
        
        if(userLocation) {
            fetchMarkets(userLocation);
        }
    }, [userLocation, range]);

    if(!userLocation || isLoading) {
        return <LoadingView />
    }
    
    return (
        <View style={styles.container}>
        <SafeAreaView style={styles.container}>
            <MarketModal  
                market={selectedMarket}
                onTap={() => navigation.push('ProductListScreen', { title: selectedMarket.name, market: selectedMarket })}
            />
            <MapView
            showsCompass={false}
            onPress={() => setSelectedMarket(null)}
            clusterColor={"#2F0781"}
            style={styles.mapView}
            initialRegion={{
                ...userLocation,
                latitudeDelta: 0.03,
                longitudeDelta: 0.03,
            }}
            >
            { mapMarkets.map(mapMarket => (
                <MapMarker 
                market={mapMarket}
                tracksViewChanges={false}
                setSelectedMarket={setSelectedMarket}
                coordinate={{
                    latitude: mapMarket.latitude,
                    longitude: mapMarket.longitude,
                }}
                onSelect={() => navigation.push('ProductListScreen', { title: mapMarket.name, market: mapMarket })} 
                key={mapMarket._id} 
                />
            )) }
            </MapView>
        </SafeAreaView>
        </View>
    );
}
