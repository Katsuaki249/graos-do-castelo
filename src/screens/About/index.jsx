 import Footer from '../../components/Footer'

import { Feather } from '@expo/vector-icons'

import * as S from './styles'

export default function About() {
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

      <S.Title>Variedade de Produtos.</S.Title>
      <S.Paragraph>Uma ampla variedade de opções para atender às necessidades de todos os clientes.</S.Paragraph>

      <S.Title $orange>Compromisso com a Qualidade</S.Title>
      <S.Paragraph>Uma ampla variedade de opções para atender às necessidades de todos os clientes.</S.Paragraph>

      <S.Title>Localização e Contato</S.Title>
      <S.Icon>
        <Feather name='map-pin' size={25} color={''} />
      </S.Icon>
      <S.Paragraph>Av. Dr. Alberto Sarmento 1060, Campinas, SP, 13032-385</S.Paragraph>
      <Footer />
    </S.Container>
  )
}
