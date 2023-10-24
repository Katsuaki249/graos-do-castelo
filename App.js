import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes'
import Login from './src/screens/Login'

export default function App() {
  return(
    <Login />
    // <NavigationContainer>
    //   <Routes />
    // </NavigationContainer>
  )
}
