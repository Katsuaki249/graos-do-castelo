import { FlatList } from 'react-native-gesture-handler'

import * as S from './styles'

const data = [
  {
    id: 1,
    category: 'Castanhas',
    image: require('../../assets/images/banner-img-1.jpg'),
    route: 'store',
  },
  {
    id: 2,
    category: 'Ervas',
    image: require('../../assets/images/banner-img-1.jpg'),
    route: 'store',
  },
  {
    id: 3,
    category: 'Chás',
    image: require('../../assets/images/banner-img-1.jpg'),
    route: 'store',
  },
  {
    id: 4,
    category: 'Temperos',
    image: require('../../assets/images/banner-img-1.jpg'),
    route: 'store',
  },
]

const Categories = ({ navigation }) => {
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
            opacity: 0.7,
            objectFit: 'contain',
          }}
        >
          <S.Overlay>
            <S.BannerBadge>{item.badge}</S.BannerBadge>
            <S.BannerTitle>{item.title}</S.BannerTitle>
            <S.BannerSubtitle>{item.subtitle}</S.BannerSubtitle>
            <S.Button
              onPress={() => {
                navigation.navigate(item.route)
              }}
            >
              <S.ButtonText>{item.buttonText}</S.ButtonText>
            </S.Button>
          </S.Overlay>
        </S.BannerBackground>
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  )
}

export default Carousel
