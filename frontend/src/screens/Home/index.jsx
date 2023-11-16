import React from 'react'
import { ScrollView, Text } from 'react-native'

import Carrousel from '../../components/Carrousel'
import Categories from '../../components/Categories'
import Footer from '../../components/Footer'

export default function Home({ navigation }) {
  return(
    <ScrollView>
      <Carrousel navigation={navigation} />
      <Text style={{fontSize: 28, fontWeight: 'bold', alignSelf: 'flex-start', paddingLeft: 25, color: '#58626C' }}>Categorias</Text>
      <Categories navigation={navigation}/>
      <Text style={{fontSize: 28, fontWeight: 'bold', alignSelf: 'flex-start', paddingLeft: 25, color: '#58626C' }}>Produtos populares</Text>
      <Categories />
      <Footer />
    </ScrollView>
  )
}
