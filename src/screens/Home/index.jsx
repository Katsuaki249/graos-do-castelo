import React from 'react'
import { ScrollView, View, Text } from 'react-native'

import Carrousel from '../../components/Carrousel'

import styles from './styles'

export default function Home({ navigation }) {
  return(
    <ScrollView>
      <View style={styles.container}>
        <Carrousel navigation={navigation} />
        <Text style={{fontSize: 28, fontWeight: 'bold', alignSelf: 'flex-start', paddingLeft: 25, color: '#58626C' }}>Categorias</Text>
      </View>
    </ScrollView>
  )
}
