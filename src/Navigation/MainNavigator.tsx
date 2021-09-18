import React from 'react';
import {RootStackParamList} from './types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Main from '../Screens/MainScreen';
import People from '../Screens/PeopleScreen';
import Coin from '../Screens/CoinScreen';
import Tweet from '../Screens/TweetScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();

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
        tabBarActiveTintColor: 'white',
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
  const {Navigator} = Stack;
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Tweet"
          component={Tweet}
          options={{
            headerStyle: {
              backgroundColor: '#2C374A',
            },
            headerTitleStyle: {
              color: 'white',
            },
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}

export default MainNavigator;
