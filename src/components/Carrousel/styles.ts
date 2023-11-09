import { Dimensions } from 'react-native'
import styled from 'styled-components/native'

const screenWidth = Math.round(Dimensions.get('window').width)

export const BannerBackground = styled.ImageBackground`
  margin-top: 20px;
  width: ${screenWidth - 50}px;
  height: 450px;
  margin: 25px;
  overflow: hidden;
`

export const Overlay = styled.View`
  flex: 1;
  justify-content: center;
  border-radius: 10px;
  padding: 25px;
`

export const BannerBadge = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  padding: 2px 20px;
  border-radius: 5px;
  align-self: flex-start;
  margin-bottom: 20px;
`

export const BannerTitle = styled.Text`
  font-size: 34px;
  font-weight: bold;
`

export const BannerSubtitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin-top: 5px;
`

export const Button = styled.TouchableOpacity`
  margin-top: 20px;
  padding: 10px 20px;
  border-radius: 8px;
  align-self: flex-start;
  flex-direction: row;
`

export const ButtonText = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: bold;
`
