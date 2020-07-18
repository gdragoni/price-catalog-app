import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import LoginScreen from "../screens/Login";

export default function AuthRoute() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" options={{ headerShown: false }} component={LoginScreen} />
        </Stack.Navigator>
    )
}