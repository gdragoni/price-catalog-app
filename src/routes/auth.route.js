import React from 'react';
import LoginScreen from "../screens/Login";
import RegisterScreen from '../screens/Register';

export default function AuthRoute({ Stack }) {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleStyle: {
                    fontFamily: 'OpenSans-Bold',
                    fontSize: 16,
                },
                headerStyle: {
                    backgroundColor: '#2F0781',
                },
                headerTintColor: 'white',
                headerBackTitle: " ",
            }}
        >
            <Stack.Screen name="Login" options={{ headerShown: false }} component={LoginScreen} />
            <Stack.Screen name="Register" options={{ headerTitle: "Primeiro acesso" }} component={RegisterScreen} />
        </Stack.Navigator>
    )
}