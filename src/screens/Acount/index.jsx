import React from 'react'
import { View, Text, Button } from 'react-native'

import styles from './styles'

export default function Acount({ atualizarEstado }) {

  const handleLogout = () => {
    atualizarEstado(false)
  }

  return(
    <View style={styles.container}>
      <Text style={styles.text}>Tela de Dados</Text>
      <Text style={styles.text}>da Conta do Usuário</Text>
      <Button title='Sair' onPress={handleLogout}/>
    </View>
  )
}
