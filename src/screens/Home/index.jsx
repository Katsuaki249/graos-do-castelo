import React from 'react'
import { ScrollView, View, Text } from 'react-native'

import Banner from '../../components/Banner'

import styles from './styles'

export default function Home() {
  return(
    <ScrollView>
      <View style={styles.container}>
        <Banner />
      </View>
    </ScrollView>
  )
}