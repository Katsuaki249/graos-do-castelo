import React from "react";
import { View, Text, TouchableHighlight } from 'react-native'

import styles from './styles'

import Icon from 'react-native-vector-icons/FontAwesome'

export function Navbar() {
  return(
    <View style={styles.container}>
      <View style={styles.navbar}>
        <View style={styles.navBtn}>
          <Icon name='home' size={25} color='#fff' />
          <TouchableHighlight>
            <Text style={styles.button}>
              Início
            </Text>
          </TouchableHighlight>
        </View>

        <View style={styles.navBtn}>
          <Icon name='shopping-bag' size={25} color='#fff' />
          <TouchableHighlight>
            <Text style={styles.button}>
              Loja
            </Text>
          </TouchableHighlight>
        </View>

        <View style={styles.navBtn}>
          <Icon name='shopping-cart' size={25} color='#fff' />
          <TouchableHighlight>
            <Text style={styles.button}>
              Carrinho
            </Text>
          </TouchableHighlight>
        </View>

        <View style={styles.navBtn}>
          <Icon name='user' size={25} color='#fff' />
          <TouchableHighlight>
            <Text style={styles.button}>
              Conta
            </Text>
          </TouchableHighlight>
        </View>

      </View>
    </View>
  )
}
