import { Dimensions } from 'react-native'
import styled from 'styled-components/native'

const screenWidth = Math.round(Dimensions.get('window').width)

export const Container = styled.View`
  margin: 8px 8px;
  width: ${screenWidth / 2 - 25}px;
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
`

export const Name = styled.Text`
  align-self: center;
  margin-bottom: 6px;
  font-size: 16px;
  font-weight: 700;
`

export const Img = styled.Image`
  object-fit: cover;
  width: 100%;
  height: 150px;
  border-radius: 8px;
  margin-bottom: 6px;
`

export const Description = styled.Text`
  font-size: 14px;
  align-self: center;
`

export const PriceContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
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
