import React, { useState, useCallback } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Acount from '../screens/Acount'
import Login from '../screens/Login'
import Register from '../screens/Register'

const Stack = createStackNavigator()

export default function StackRoutes({navigation}) {

  const [ meuEstado, setMeuEstado ] = useState(false)

  const atualizarEstado = useCallback((novaEstado) => {
    setMeuEstado(novaEstado);
  }, []);


  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {meuEstado ? (
        <>
          <Stack.Screen
            name='userdata'
            options={{title: 'userdata'}}
            children={() => <Acount atualizarEstado={atualizarEstado} />}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name='login'
            options={{title: 'login'}}
            children={() => <Login atualizarEstado={atualizarEstado } />}
          />
        </>
      )}

      <Stack.Screen
        name='register'
        options={{title: 'register'}}
        children={() => <Register navigation={navigation} />}
      />
    </Stack.Navigator>
  )
}
