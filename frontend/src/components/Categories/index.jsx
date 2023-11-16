import { FlatList } from 'react-native-gesture-handler'

import * as S from './styles'

const data = [
  {
    id: 1,
    category: 'Castanhas',
    image: require('../../assets/images/category_1.jpg'),
    route: 'store',
  },
  {
    id: 2,
    category: 'Chás',
    image: require('../../assets/images/category_2.jpg'),
    route: 'store',
  },
  {
    id: 3,
    category: 'Ervas',
    image: require('../../assets/images/category_3.jpg'),
    route: 'store',
  },
  {
    id: 4,
    category: 'Temperos',
    image: require('../../assets/images/category_4.jpg'),
    route: 'store',
  },
]

export default Categories = ({ navigation }) => {
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
          <S.Overlay onPress={() => navigation.navigate(item.route)}>
          <S.Category>{item.category}</S.Category>
          </S.Overlay>
        </S.BannerBackground>
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  )
}
