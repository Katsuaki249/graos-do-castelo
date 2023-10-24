import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from './screens/Home'
import Store from './screens/Store'
import Cart from './screens/Cart'
import Acount from './screens/Acount'

import { Entypo } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

export default function Routes() {
  return(
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        tabBarActiveTintColor: '#397E01',
        tabBarInactiveTintColor: '#D9D9D9',
        tabBarStyle:{
          paddingTop: 15,
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#FFFFFF',
          borderRadius: 15,
          height: 90
        }
      }}
    >
      <Tab.Screen
        name='Início'
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo name='home' size={size} color={color} />
          )
        }}
      />

      <Tab.Screen
        name='Loja'
        component={Store}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo name='shopping-basket' size={size} color={color} />
          )
        }}
      />

      <Tab.Screen
        name='Carrinho'
        component={Cart}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo name='shopping-cart' size={size} color={color} />
          ),
          tabBarBadge: 3,
          tabBarBadgeStyle: {
            backgroundColor: '#FF5800'
          }
        }}
      />

      <Tab.Screen
        name='Conta'
        component={Acount}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo name='user' size={size} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  )
}
