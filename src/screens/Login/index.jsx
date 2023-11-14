import React, { useState } from 'react'
import { Text, Image } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import {
  Container,
  Logo,
  TitleBox,
  Title,
  Button,
  Input,
  MyText,
} from './styles'

export default function Login({ atualizarEstado }) {

  const navigation = useNavigation()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)
  const [loginError, setLoginError] = useState(false)

  const handleLogin = () => {
    if (username !== '' && password !== '') {
      if (username === 'admin@mail.com' && password === '123456') {
        setLoggedIn(true)
        atualizarEstado(true)
      } else {
        setLoggedIn(false)
        setLoginError(true)
      }
    } else {
      setLoginError(true)
    }
  }

  return (
    <Container>
      <Logo>
        <Image
          source={require('../../assets/images/graos-do-castelo-logo.png')}
        />
        <TitleBox>
          <Title>Grãos</Title>
          <Title $orange>do Castelo</Title>
        </TitleBox>
      </Logo>
      <Input
        placeholder="Digite seu email"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <Input
        secureTextEntry={true}
        placeholder="Digite sua senha"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button onPress={handleLogin}>
        <MyText $bold>Login</MyText>
      </Button>
      {loginError && (
        <Text>Não foi possível fazer login. Verifique seu email e senha.</Text>
      )}
      {loggedIn && <Text>Logado com sucesso!</Text>}

      <Button onPress={() => navigation.navigate('register')}>
        <MyText>Cadastrar</MyText>
      </Button>
    </Container>
  )
}
