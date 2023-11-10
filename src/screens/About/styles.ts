import styled from 'styled-components/native'

export const Container = styled.ScrollView``

export const BannerBackground = styled.ImageBackground`
  height: 300px;
  overflow: hidden;
`

export const Overlay = styled.View`
  width: 100%;
  padding: 0 10px;
  background: rgba(0, 0, 0, 0.5);
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const BannerText = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #fff;
`

export const Title = styled.Text<{ $orange?: boolean }>`
  padding-top: 20px;
  padding-left: 25px;
  font-size: 32px;
  font-weight: bold;
  color: ${(props) => (props.$orange ? '#FF5800' : '#397e01')};
`
export const Paragraph = styled.Text`
  font-size: 24px;
  font-weight: 400;
  margin: 0 25px;
  color: #58626c;
  margin-bottom: 25px;
`
export const Icon = styled.View`
  flex: 1;
  flex-direction: row;
  padding-top: 10px;
  padding-left: 24px;
`
