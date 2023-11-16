import * as S from './styles'

export function Products({ name, image, category, price }) {
  return (
    <S.Container>
      <S.Name>{name}</S.Name>
      <S.Img source={{ uri: image }} />
      <S.Description>{category}</S.Description>
      <S.Price>R${price}/Kg</S.Price>
      <S.Button>
        <S.BtnText>Comprar</S.BtnText>
      </S.Button>
    </S.Container>
  )
}
