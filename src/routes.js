import React from 'react'
import { View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from './screens/Home'
import Store from './screens/Store'
import Category from './screens/Category'
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
        name='Categoria'
        component={Category}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ size, focused }) => (
            <View
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                position: 'absolute',
                top: -20,
                backgroundColor: focused ? '#FF5800' : '#D9D9D9', // Define a cor ativa e inativa
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Entypo name="grid" size={size + 8} color={'#FFFFFF'} />
            </View>
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
