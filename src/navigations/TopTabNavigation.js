import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SimpleLineIcons } from 'react-native-vector-icons';
import { Icon } from 'react-native-vector-icons';



import { CurrentPostScreen } from '../screens/CurrentPostScreen'
import { CompletedPostScreen } from '../screens/CompletedPostScreen'
import { THEME } from '../theme';



const Tab = createMaterialTopTabNavigator();

export function TopTabNavigation() {
  return (
    <Tab.Navigator
    initialRouteName="Completed"
     activeColor={THEME.BLACK}
     inactiveColor={THEME.DARK_GREY}
     barStyle={{ backgroundColor: THEME.WHITE }}
     >
      <Tab.Screen 
        name="Current" 
        component={CurrentPostScreen}
        options={{
            tabBarLabel: '↻ ընթացիք',
          }}
        />
      <Tab.Screen name="Completed" component={CompletedPostScreen} 
      options={{
            tabBarLabel: '✔ ավարտված',
          }}/>
    </Tab.Navigator>
  );
}