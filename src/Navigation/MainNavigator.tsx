import React from 'react';
import {TabParamList} from './types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Main from '../Screens/MainScreen';
import People from '../Screens/PeopleScreen';
import Coin from '../Screens/CoinScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<TabParamList>();

function Home() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#2C374A',
        },
        headerStyle: {
          backgroundColor: '#2C374A',
        },
        headerTitleStyle: {
          color: 'white',
        },
      }}>
      <Tab.Screen
        name="Main"
        component={Main}
        options={{
          headerTitle: 'Ana Sayfa',
          headerTitleStyle: {
            color: 'white',
          },
          tabBarIcon: () => (
            <Ionicons name="ios-home" size={24} color="white" />
          ),
          tabBarLabel: 'Ana Sayfa',
        }}
      />
      <Tab.Screen
        name="People"
        component={People}
        options={{
          headerTitle: 'Kullanıcılar',
          headerTitleStyle: {
            color: 'white',
          },
          tabBarIcon: () => (
            <Ionicons name="ios-person" size={24} color="white" />
          ),
          tabBarLabel: 'Kullanıcılar',
        }}
      />
      <Tab.Screen
        name="Coins"
        component={Coin}
        options={{
          headerTitle: 'Coinler',
          headerTitleStyle: {
            color: 'white',
          },
          tabBarIcon: () => (
            <Ionicons name="logo-bitcoin" size={24} color="white" />
          ),
          tabBarLabel: 'Coinler',
        }}
      />
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
