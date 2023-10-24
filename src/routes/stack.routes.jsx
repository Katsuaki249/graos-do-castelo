import { createStackNavigator } from '@react-navigation/stack'

import Acount from '../screens/Acount'
import Login from '../screens/Login'

const Stack = createStackNavigator()

const getIsSignedIn = () => {
  // Lógica que valida o login
  return false
}

export default function StackRoutes() {

  const isSignedIn = getIsSignedIn()

  return (
    <Stack.Navigator>
      {isSignedIn ? (
        <>
          <Stack.Screen
            name='acount'
            component={Acount}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name='login'
            component={Login}
          />
        </>
      )}
    </Stack.Navigator>
  )
}
