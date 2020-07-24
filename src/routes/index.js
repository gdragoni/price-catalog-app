import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthRoute from './auth.route';
import MainRoute from './main.route';
import TutorialScreen from '../screens/Tutorial';

const Stack = createStackNavigator();

export default function Route() {
  const authenticated = useSelector(state => state.user.token).length;
  const showTutorialScreen = useSelector(state => state.config.showTutorialScreen);
  const alreadyShowInitialTutorial = useSelector(state => state.config.alreadyShowInitialTutorial);
  const dispatch = useDispatch();

  useEffect(() => {
    if(!alreadyShowInitialTutorial) {
      dispatch({ type: 'SET_INITIAL_TUTORIAL_SCREENS' })
    }
  }, [alreadyShowInitialTutorial])

  if(showTutorialScreen) {
    return (
      <TutorialScreen />
    )
  }

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