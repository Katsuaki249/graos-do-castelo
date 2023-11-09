import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../screens/Home'
import Store from '../screens/Store'
import Cart from '../screens/Cart'

import { getCart } from '../screens/Cart'

import { Entypo } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()


export default function TabRoutes() {
  const cart = getCart()

  return(
    <Tab.Navigator
      initialRouteName='home'
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#397E01',
        tabBarInactiveTintColor: '#D9D9D9',
        tabBarStyle:{
          paddingTop: 15,
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 3,
          backgroundColor: '#FFFFFF',
          borderRadius: 15,
          height: 90
        }
      }}
    >
      <Tab.Screen
        name='tabhome'
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo name='home' size={size} color={color} />
          )
        }}
      />

      <Tab.Screen
        name='store'
        component={Store}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo name='shopping-basket' size={size} color={color} />
          )
        }}
      />

      <Tab.Screen
        name='cart'
        component={Cart}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo name='shopping-cart' size={size} color={color} />
          ),
          tabBarBadge: [cart],
          tabBarBadgeStyle: {
            backgroundColor: '#FF5800'
          }
        }}
      />

    </Tab.Navigator>
  )
}
