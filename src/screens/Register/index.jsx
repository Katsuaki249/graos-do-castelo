import { Text, StyleSheet } from 'react-native'

export default function Register() {
  return (
    <Text style={style.container}>Tela de Cadastro</Text>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
