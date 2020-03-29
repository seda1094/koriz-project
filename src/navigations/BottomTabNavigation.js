import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { InfoScreen } from '../screens/InfoScreen'
import { ProfileScreen } from '../screens/ProfileScreen'
import {TopTabNavigation } from './TopTabNavigation'

const Tab = createBottomTabNavigator();

export function BottomTabNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Main" component={TopTabNavigation} />
        <Tab.Screen name="Info" component={InfoScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
      </NavigationContainer>
        );
}