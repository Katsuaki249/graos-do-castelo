import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const Logo = styled.View`
  flex-direction: row;
  align-items: center;
`

export const TitleBox = styled.View`
  padding-left: 8px;
`

export const Title = styled.Text<{ $orange?: boolean }>`
  font-size: 30px;
  color: #397e01;
  font-weight: bold;

  ${(props) =>
    props.$orange &&
    css`
      color: #ff5800;
    `}
`

export const MyText = styled.Text<{ $bold?: boolean; $dark?: boolean }>`
  color: white;
  text-align: center;
  font-size: 12px;

  ${(props) =>
    props.$bold &&
    css`
      font-weight: bold;
      font-size: 16px;
    `}
  ${(props) =>
    props.$dark &&
    css`
      color: #58626c;
    `}
`

export const Link = styled.TouchableOpacity`
  color: #ff5800;
`

export const Input = styled.TextInput`
  margin-top: 10px;
  padding: 10px 10px;
  width: 300px;
  background-color: white;
  font-size: 16px;
  font-weight: bold;
  border-radius: 6px;
  border: 2px solid #d9d9d9;
`

export const Button = styled.TouchableOpacity<{ $orange?: boolean }>`
  margin-top: 10px;
  width: 300px;
  padding: 10px 10px;
  background-color: ${(props) => (props.$orange ? '#ff5800' : '#397e01')};
  border-radius: 6px;
`
