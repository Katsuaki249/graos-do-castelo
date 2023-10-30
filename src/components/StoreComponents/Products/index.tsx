import * as S from './styles'

export function Products({ name, image, description, price }) {
  return (
    <S.Container>
      <S.Name>{name}</S.Name>
      <S.Img source={{ uri: image }} />
      <S.Description>{description}</S.Description>
      <S.Price>R${price}/Kg</S.Price>
      <S.Button>
        <S.BtnText>Comprar</S.BtnText>
      </S.Button>
    </S.Container>
  )
}
