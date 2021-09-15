import React from 'react';
import {RootStackParamList} from './types';
import {NavigatorScreenParams} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import Main from '../Screens/MainScreen';
import People from '../Screens/PeopleScreen';
import Coin from '../Screens/CoinScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<TabParamList>();

type TabParamList = {
  Home: NavigatorScreenParams<RootStackParamList>;
};

function Home() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#2C374A',
        },
      }}>
      <Tab.Screen name="Main" component={Main} />
      <Tab.Screen name="People" component={People} />
      <Tab.Screen name="Coins" component={Coin} />
    </Tab.Navigator>
  );
}

function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigator;
