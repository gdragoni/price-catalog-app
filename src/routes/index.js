import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from "../screens/Login";
import HomeScreen from "../screens/Home";

const Stack = createStackNavigator();

export default function Route() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Login"
          options={{
            headerShown: false
          }} 
          component={LoginScreen} />
        <Stack.Screen 
          name="Home"
          options={{
            headerShown: false
          }} 
          component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}