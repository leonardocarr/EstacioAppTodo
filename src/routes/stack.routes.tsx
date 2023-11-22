import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { Home } from '../screens/Home';
import { Welcome } from '../screens/Inicial/index.js';

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator>
      <Screen name="login" component={Welcome} options={{ headerShown: false }} />
      <Screen name="home" component={Home} options={{ headerShown: false }}/> 
    </Navigator>
  )
}
