import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { SimpleLineIcons } from 'react-native-vector-icons';

import { InfoScreen } from '../screens/InfoScreen'
import { ProfileScreen } from '../screens/ProfileScreen'
import {TopTabNavigation } from './TopTabNavigation'
import { THEME } from '../theme';

const Tab = createMaterialBottomTabNavigator();

export function BottomTabNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
     initialRouteName="Main"
     activeColor={THEME.MAIN_GREEN}
     inactiveColor={THEME.MAIN_GREY}
     barStyle={{ backgroundColor: THEME.WHITE }}>
        <Tab.Screen 
        name="Main" 
        component={TopTabNavigation} 
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name="home" color={color} size={26} />
          ),
        }}/>
        <Tab.Screen 
        name="Info" 
        component={InfoScreen} 
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name="info" color={color} size={26} />
          ),
        }}/>
        <Tab.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name="user" color={color} size={26} />
          ),
        }}/>
      </Tab.Navigator>
      </NavigationContainer>
        );
}