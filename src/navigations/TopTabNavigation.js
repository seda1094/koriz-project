import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { CurrentPostScreen } from '../screens/CurrentPostScreen'
import { CompletedPostScreen } from '../screens/CompletedPostScreen'



const Tab = createMaterialTopTabNavigator();

export function TopTabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Current" component={CurrentPostScreen} />
      <Tab.Screen name="Completed" component={CompletedPostScreen} />
    </Tab.Navigator>
  );
}