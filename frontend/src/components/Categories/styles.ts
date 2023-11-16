import { Dimensions } from 'react-native'
import styled from 'styled-components/native'

const screenWidth = Math.round(Dimensions.get('window').width)

export const BannerBackground = styled.ImageBackground`
  margin-top: 20px;
  width: ${screenWidth / 2 - 50}px;
  height: 200px;
  margin: 25px;
  overflow: hidden;
`

export const Overlay = styled.TouchableOpacity`
  flex: 1;
  justify-content: flex-end;
  border-radius: 10px;
  padding: 20px;
`

export const Category = styled.Text`
  background: #ff5800;
  border-radius: 10px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`
