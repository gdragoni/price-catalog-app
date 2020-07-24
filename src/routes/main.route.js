import React from 'react';
import { Image, TouchableHighlight } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HeaderButton from '../components/headerButton.component';
import MapScreen from "../screens/Map";
import MarketListScreen from '../screens/MarketList';
import UserScreen from '../screens/User';
import MapFilterScreen from '../screens/MapFilter';
import ProductListScreen from '../screens/ProductList';
import CommentScreen from '../screens/Comment';
import PublishProductScreen from '../screens/PublishProduct';

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
            <Stack.Screen 
                name="Home" 
                options={({ navigation }) => ({ 
                    headerTitle: "Offer",
                    headerRight: () => ( <HeaderButton 
                        icon={require('../../assets/images/location/map-radius.png')}
                        onPress={() => navigation.push('MapFilterScreen')}
                    /> )
                })} 
                component={TabScreen} />
            <Stack.Screen 
                name="MapFilterScreen" 
                options={({ navigation }) => ({ 
                    headerTitle: "Filtro",
                })} 
                component={MapFilterScreen} />
            <Stack.Screen 
                options={({ route }) => ({
                    headerTitle: route.params.title,
                    headerTitleStyle: {
                        fontSize: 16,
                    },
                })}
                name="ProductListScreen" 
                component={ProductListScreen} />
            <Stack.Screen 
                options={({ route }) => ({
                    headerTitle: route.params.title,
                    headerTitleStyle: {
                        fontSize: 16,
                    },
                })}
                name="CommentScreen" 
                component={CommentScreen} />
            <Stack.Screen 
                options={({ route }) => ({
                    headerTitle: route.params.title,
                    headerTitleStyle: {
                        fontSize: 16,
                    },
                })}
                name="PublishProductScreen" 
                component={PublishProductScreen} />
        </Stack.Navigator>
    )
}