import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {Ionicons, Feather } from 'react-native-vector-icons';




import { CurrentPostScreen } from '../screens/CurrentPostScreen'
import { CompletedPostScreen } from '../screens/CompletedPostScreen'
import { THEME } from '../theme';



const Tab = createMaterialTopTabNavigator();



export function TopTabNavigation() {
  return (
    <Tab.Navigator

    navigationOptions={
           { gesturesEnabled: false,
            swipeEnabled: false}
        }
    tabBarOptions= {
      {tabStyle: {
        backgroundColor: THEME.WHITE,
        paddingTop: 42,
        flexDirection: 'row',
      },
      indicatorStyle: {
        backgroundColor: THEME.WHITE
      },
      labelStyle:{
        fontSize:16,
        fontWeight: 'bold'
      },
      showIcon: true,
      allowFontScaling: false
    }
    }

    initialRouteName="Current"
     activeColor={THEME.BLACK}
     inactiveColor={THEME.DARK_GREY}
     barStyle={{ backgroundColor: THEME.WHITE }}
     >
      <Tab.Screen 
        name="Current" 
        component={CurrentPostScreen}
        options={{
            tabBarLabel: 'ընթացիք',
            tabBarIcon: ({ color }) => (
              <Ionicons name="ios-timer" color={color} size={24}/>
            ),
          }}
        />
      <Tab.Screen name="Completed" component={CompletedPostScreen} 
      options={{
            tabBarLabel: 'ավարտված',
            tabBarIcon: ({ color }) => (
              <Feather name="check" color={color} size={24}/>
            ),
          }}/>
    </Tab.Navigator>
  );
}