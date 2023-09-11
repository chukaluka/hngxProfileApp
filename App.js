import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './screens/home';
import DetailWebView from './screens/detailWebView';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
    <Stack.Screen name='Home' component={Home} options={{ headerShown: false }}/>
    <Stack.Screen name='DetailWebView' component={DetailWebView} options={{ headerShown: false }}/>
  </Stack.Navigator>
  </NavigationContainer>
  )
}

const styles = StyleSheet.create({})