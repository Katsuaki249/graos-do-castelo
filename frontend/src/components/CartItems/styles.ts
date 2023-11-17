import { Dimensions } from 'react-native'
import styled from 'styled-components/native'

const screenWidth = Math.round(Dimensions.get('window').width)

export const Container = styled.View<{ $column?: boolean; $center: boolean }>`
  flex-direction: ${(props) => (props.$column ? 'column' : 'row')};
  justify-content: ${(props) => (props.$center ? 'center' : 'space-around')};
  border-radius: 8px;
  margin-bottom: 2px;
  padding: 8px;
  background-color: #fff;
`

export const Name = styled.Text`
  align-self: center;
  margin-bottom: 6px;
  font-size: 16px;
  font-weight: 700;
`

export const Img = styled.Image`
  object-fit: cover;
  width: ${screenWidth / 2 - 25}px;
  height: 150px;
  border-radius: 8px;
  margin-bottom: 6px;
`

export const Category = styled.Text`
  font-size: 14px;
  align-self: center;
`

export const Quantity = styled.TextInput`
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
`

export const Price = styled.Text`
  align-self: center;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 6px;
`

export const Button = styled.TouchableOpacity`
  width: 100%;
  padding: 4px 0;
  display: flex;
  align-items: center;
  border-radius: 6px;
  background-color: #ff5800;
`

export const BtnText = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: 600;
`
