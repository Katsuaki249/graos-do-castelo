import { FlatList } from 'react-native-gesture-handler'

import { Feather } from '@expo/vector-icons'
import * as S from './styles'

const data = [
  {
    id: 1,
    badge: 'Descontos de até 20%',
    title: 'Oferecemos produtos de ótima qualidade',
    subtitle: 'Aqui você encontra os mais variados produtos',
    buttonText: 'Comprar Agora',
    image: require('../../assets/images/banner-img-1.jpg'),
    route: 'store',
    badgeColor: '#ff5800',
    titleColor: '#397e01',
    subtitleColor: '#262626',
    buttonColor: '#397e01',
  },
  {
    id: 2,
    badge: 'Entregamos até a sua casa',
    title: 'Preçoes naturais para produtos naturais',
    subtitle: 'Economize enquanto cuida de sua saúde',
    buttonText: 'Faça seu cadastro',
    image: require('../../assets/images/banner-img-2.png'),
    route: 'register',
    badgeColor: '#397e01',
    titleColor: '#ff5800',
    subtitleColor: '#ffffff',
    buttonColor: '#ff5800',
  },
]

const Carousel = ({ navigation }) => {
  return (
    <FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <S.BannerBackground
          source={item.image}
          imageStyle={{
            borderRadius: 10,
            objectFit: 'cover',
          }}
        >
          <S.Overlay>
            <S.BannerBadge style={{ backgroundColor: item.badgeColor }}>
              {item.badge}
            </S.BannerBadge>
            <S.BannerTitle style={{ color: item.titleColor }}>
              {item.title}
            </S.BannerTitle>
            <S.BannerSubtitle style={{ color: item.subtitleColor }}>
              {item.subtitle}
            </S.BannerSubtitle>
            <S.Button
              style={{ backgroundColor: item.buttonColor }}
              onPress={() => {
                navigation.navigate(item.route)
              }}
            >
              <S.ButtonText>{item.buttonText}</S.ButtonText>
              <Feather
                style={{
                  color: '#fff',
                  fontSize: 28,
                  paddingLeft: 10,
                }}
                name="arrow-right"
              />
            </S.Button>
          </S.Overlay>
        </S.BannerBackground>
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  )
}

export default Carousel
