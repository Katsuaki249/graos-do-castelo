import { Linking } from 'react-native'

import Footer from '../../components/Footer'
import MapScreen from '../../components/MapScreen'

import { Feather } from '@expo/vector-icons'

import * as S from './styles'

export default function About() {

  const makeCall = () => {
    const url = `tel:${551932416338}`;
    Linking.openURL(url);
  };

  const openFacebook = () => {
    const url = 'https://www.facebook.com/graosdocatelo/'
    Linking.openURL(url)
  }

  return (
    <S.Container>
      <S.BannerBackground
        source={require('../../assets/images/store_image.jpg')}
        imageStyle={{
          objectFit: 'cover',
        }}
      >
        <S.Overlay>
          <S.BannerText> Bem-vindo à Grãos do Castelo - Sua Jornada para uma Vida Saudável!</S.BannerText>
        </S.Overlay>
      </S.BannerBackground>
      <S.Title>Quem Somos</S.Title>
      <S.Paragraph>Somos uma loja dedicada a oferecer produtos naturais e saudáveis para promover o bem-estar físico e mental, localizada no balão do Castelo.</S.Paragraph>

      <S.Title $orange>Nossa Missão</S.Title>
      <S.Paragraph>Oferecer produtos de alta qualidade que incentivem um estilo de vida saudável, promovendo a conexão com a natureza e o bem-estar.</S.Paragraph>

      <S.Title>Variedade de Produtos</S.Title>
      <S.Paragraph>Uma ampla variedade de opções para atender às necessidades de todos os clientes.</S.Paragraph>

      <S.Title $orange>Compromisso com a Qualidade</S.Title>
      <S.Paragraph>Produtos orgânicos, sem aditivos artificiais, diretamente da natureza para sua mesa.</S.Paragraph>

      <S.Title>Localização e Contato</S.Title>
      <MapScreen />
      <S.IconTextContainer>
        <Feather style={{paddingRight: 10}} name="phone" size={24} color={'#397e01'} />
        <S.IconText onPress={makeCall}>(19) 3241-6338</S.IconText>
      </S.IconTextContainer>
      <S.IconTextContainer style={{marginBottom: 10}}>
        <Feather style={{paddingRight: 10}} name="facebook" size={24} color={'#397e01'} />
        <S.IconText onPress={openFacebook}>/graosdocatelo</S.IconText>
      </S.IconTextContainer>

      <Footer />
    </S.Container>
  )
}
