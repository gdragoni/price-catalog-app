import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapScreen from "../screens/Map";
import MarketListScreen from '../screens/MarketList';
import UserScreen from '../screens/User';
const Tab = createBottomTabNavigator();

function TabScreen() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: 'white',
                inactiveTintColor: '#DFB233',
                activeBackgroundColor: '#2F0781',
                inactiveBackgroundColor: '#2F0781',
                showLabel: false,
                style: { backgroundColor: '#2F0781' }
            }}>
            <Tab.Screen 
                name="Mapa" 
                component={MapScreen} 
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return <Image style={{ height: size, resizeMode: 'contain', tintColor: color }} source={require('../../assets/images/tab/place.png')} />
                    },
                }}
            />
            <Tab.Screen 
                name="Lista" 
                component={MarketListScreen} 
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return <Image style={{ height: size, resizeMode: 'contain', tintColor: color }} source={require('../../assets/images/tab/market.png')} />
                    }
                }}
            />
            <Tab.Screen 
                name="Usuário" 
                component={UserScreen} 
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return <Image style={{ height: size, resizeMode: 'contain', tintColor: color }} source={require('../../assets/images/tab/user.png')} />
                    }
                }}
            />
        </Tab.Navigator>
    )
}

export default function MainRoute({ Stack }) {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleStyle: {
                    fontFamily: 'OpenSans-Bold',
                    fontSize: 30,
                },
                headerStyle: {
                    backgroundColor: '#2F0781',
                },
                headerTintColor: 'white',
                headerBackTitle: " ",
            }}>
            <Stack.Screen name="Home" options={{ headerTitle: "Offer" }} component={TabScreen} />
        </Stack.Navigator>
    )
}