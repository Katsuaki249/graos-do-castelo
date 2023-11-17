import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../screens/Home'
import Store from '../screens/Store'
import Cart from '../screens/Cart'

import { Feather } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()


export default function TabRoutes() {

  return(
    <Tab.Navigator
      initialRouteName='home'
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#397E01',
        tabBarInactiveTintColor: '#D9D9D9',
        tabBarStyle:{
          position: 'absolute',
          backgroundColor: '#FFFFFF',
          borderTopWidth: 0,
          paddingTop: 15,
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 3,
          borderRadius: 15,
          height: 75
        }
      }}
    >
      <Tab.Screen
        name='tabhome'
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({ size, color }) => (
            <Feather name='home' size={size} color={color} />
          )
        }}
      />

      <Tab.Screen
        name='store'
        component={Store}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ size, color }) => (
            <Feather name='shopping-bag' size={size} color={color} />
          )
        }}
      />

      <Tab.Screen
        name='cart'
        component={Cart}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ size, color }) => (
            <Feather name='shopping-cart' size={size} color={color} />
          ),
          tabBarBadge: [5],
          tabBarBadgeStyle: {
            backgroundColor: '#FF5800'
          }
        }}
      />

    </Tab.Navigator>
  )
}
