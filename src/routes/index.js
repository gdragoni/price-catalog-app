import React from 'react';
import { useSelector } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import AuthRoute from './auth.route';
import MainRoute from './main.route';

export default function Route() {
  const authenticated = useSelector(state => state.user.token).length
  if(authenticated) {
    return (
      <NavigationContainer>
        <MainRoute />
      </NavigationContainer>
    )
  }
  return (
    <NavigationContainer>
      <AuthRoute />
    </NavigationContainer>
  )
}