import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from '@expo/vector-icons'

import TabRoutes from "./tab.routes";
import StackRoutes from "./stack.routes";
import About from '../screens/About'
import Config from "../screens/Config";

const Drawer = createDrawerNavigator()

export default function DrawerRoutes() {
  return(
    <Drawer.Navigator screenOptions={{ title: '' }}>
      <Drawer.Screen
        name="home"
        component={TabRoutes}
        options={{
          drawerIcon: ({color, size}) => <Feather name="home" color={color} size={size} />,
          drawerLabel: 'início'
        }}
      />
      <Drawer.Screen
        name="about"
        component={About}
        options={{
          drawerIcon: ({color, size}) => <Feather name="info" color={color} size={size} />,
          drawerLabel: 'Sobre nós'
        }}
      />
      <Drawer.Screen
        name="acount"
        component={StackRoutes}
        options={{
          drawerIcon: ({color, size}) => <Feather name="user" color={color} size={size} />,
          drawerLabel: 'Conta'
        }}
      />
      <Drawer.Screen
        name="config"
        component={Config}
        options={{
          drawerIcon: ({color, size}) => <Feather name="settings" color={color} size={size} />,
          drawerLabel: 'Configurações'
        }}
      />
    </Drawer.Navigator>
  )
}
