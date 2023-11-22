import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// ERRO EM LER O ARQUIVO ABAIXO
// import { LogIn } from '../screens/Inicial';
import { Home } from '../screens/Home';

const { Screen, Navigator } = createNativeStackNavigator();


export function StackRoutes() {
  return (
    <Navigator>
      {/* <Screen name="login" component={LogIn} /> */}
      <Screen name="home" component={Home} />
    </Navigator>
  )
}
