import * as S from './styles'

export default function Banner() {

  const banner = [
    {
      small: 'Descontos de até 50%',
      title: 'Oferecemos produtos de ótima qualidade',
      subTitle: 'Encontre mais de 100 variedades de grãos em um único lugar',
      buttonText: 'Comprar',
      bg_image: '../../assets/images/banner-img-1.jpg',
      route: '/',
    },
    {
      small: 'Descontos de até 50%',
      title: 'Oferecemos produtos de ótima qualidade',
      subTitle: 'Encontre mais de 100 variedades de grãos em um único lugar',
      buttonText: 'Comprar',
      bg_image: '',
      route: '',
    }
  ]


  return(
    <S.Container>
      <S.Small>{banner.small}</S.Small>
      <S.Title>{banner.title}</S.Title>
      <S.SubTitle>{banner.subTitle}</S.SubTitle>

    </S.Container>
  )
}
