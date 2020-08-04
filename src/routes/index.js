import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthRoute from './auth.route';
import MainRoute from './main.route';

const Stack = createStackNavigator();

export default function Route() {
  const authenticated = useSelector(state => state.user.token).length;

  if(authenticated) {
    return (
      <NavigationContainer>
        <MainRoute Stack={Stack} />
      </NavigationContainer>
    )
  }
  return (
    <NavigationContainer>
      <AuthRoute Stack={Stack} />
    </NavigationContainer>
  )
}