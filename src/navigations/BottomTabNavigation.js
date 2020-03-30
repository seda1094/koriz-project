import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { SimpleLineIcons } from 'react-native-vector-icons';

import { InfoScreen } from '../screens/InfoScreen'
import { ProfileScreen } from '../screens/ProfileScreen'
import { TopTabNavigation } from './TopTabNavigation'
import { THEME } from '../theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Tab = createMaterialBottomTabNavigator();

export function BottomTabNavigation() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Main"
          activeColor={THEME.MAIN_GREEN}
          inactiveColor={THEME.MAIN_GREY}
          barStyle={{
            backgroundColor: THEME.WHITE,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 10,
            },
            shadowOpacity: 0.71,
            shadowRadius: 13.16,
            elevation: 20,
          }}>
          <Tab.Screen
            name="Main"
            component={TopTabNavigation}
            options={{
              tabBarLabel: '',
              tabBarIcon: ({ color }) => (
                <SimpleLineIcons name="home" color={color} size={24} />
              ),
            }} />
          <Tab.Screen
            name="Info"
            component={InfoScreen}
            options={{
              tabBarLabel: '',
              tabBarIcon: ({ color }) => (
                <SimpleLineIcons name="info" color={color} size={24} />
              ),
            }} />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarLabel: '',
              tabBarIcon: ({ color }) => (
                <SimpleLineIcons name="user" color={color} size={24} />
              ),
            }} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}