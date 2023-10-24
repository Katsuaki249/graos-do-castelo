import { View, Text, Image } from 'react-native'
import {
  Container,
  Logo,
  TitleBox,
  Title,
  Button,
  Input,
  MyText,
} from './styles'

export default function Login() {
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
      <Input placeholder="Digite seu email" />
      <Input secureTextEntry={true} placeholder="Digite sua senha" />
      <Button
        onPress={() => {
          this.clicou()
        }}
      >
        <MyText $bold>Login</MyText>
      </Button>
    </Container>
  )
}
