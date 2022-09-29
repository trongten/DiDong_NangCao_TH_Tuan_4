import { StatusBar } from 'expo-status-bar';
import {  SafeAreaView,Text, View,Image,TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Tiki from './views/tiki';
import Phone from './views/phone';
import Picker from './views/pickcolor';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Tiki" component={Tiki} />
        <Stack.Screen name="Phone" component={Phone} />
        <Stack.Screen name="Picker" component={Picker} />
      </Stack.Navigator>
    </NavigationContainer>
  
  );
}

