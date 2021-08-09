import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Homec';
import Login from '../Screens/Login';
import signup from '../Screens/signup';
const MyStack = createStackNavigator();

function MyStack(){
    <NavigationContainer>
    <Stack.Screen name="Home" component={Home}/>
    <Stack.Screen name="Login" component={Login }/>
    <Stack.Screen name="Signup" component={signup}/>
    </NavigationContainer>
     
}
