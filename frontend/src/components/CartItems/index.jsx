import * as S from './styles'

export default function CartItems({ name, image, category, price, quantity }) {
  return (
    <S.Container>
      <S.Img source={{ uri: image }} />
      <S.Container $column $center>
        <S.Container>
          <S.Name>{name}</S.Name>
          <S.Category>{category}</S.Category>
        </S.Container>
        <S.Container>
          <S.Name>Qtd: {quantity}</S.Name>
        </S.Container>
        <S.Name>Total: R${price}</S.Name>
        <S.Button>
          <S.BtnText>remover</S.BtnText>
        </S.Button>
      </S.Container>
    </S.Container>
  )
}
