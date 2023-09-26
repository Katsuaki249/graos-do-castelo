import React from 'react'
import { View, Text, ImageBackground, Image, Button } from 'react-native'
import styles from './styles'

import CustomButton from '../CustomButton'

export default function Banner() {

  const banner = {
    banner_1:{
      small: 'Descontos de até 50%',
      title: 'Oferecemos produtos de ótima qualidade',
      subTitle: 'Encontre mais de 100 variedades de grãos em um único lugar',
      buttonText: 'Comprar',
      bg_image: '../../assets/images/banner-img-1.jpg'
    },
    banner_2:{
      small: 'Descontos de até 50%',
      title: 'Oferecemos produtos de ótima qualidade',
      subTitle: 'Encontre mais de 100 variedades de grãos em um único lugar',
      buttonText: 'Comprar'
    }
  }

  return(
    <View style={styles.container}>
      <Image style={styles.image} source={banner.banner_1.image} />
        <View>
            <Text>{banner.banner_1.small}</Text>
        </View>
        <View>
            <Text>
              {banner.banner_1.title}
            </Text>
            <Text>
              {banner.banner_1.subTitle}
            </Text>
        </View>
        <CustomButton name='Cadastrar' color='#FF5800' />
    </View>
  )
}
