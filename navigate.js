import React from 'react'
import Login from './components/Login'
import User from './components/User'


import {NavigationContainer} from '@react-navigation/native'

import { createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function MyStack(){
  return (
    <NavigationContainer>    
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
            <Stack.Screen name="User" component={User} options={{headerShown: false}}/>
        </Stack.Navigator>
    </NavigationContainer>    
  );
}