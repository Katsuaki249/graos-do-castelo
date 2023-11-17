import { useNavigation } from '@react-navigation/native'

import { Container, MyText } from './styles'

export default function Footer() {
  const navigation = useNavigation()

  return (
    <Container onPress={() => navigation.navigate('payment')}>
      <MyText>Finalizar Pedido</MyText>
    </Container>
  )
}
