import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

export default function CustomButton(props) {
  return (
    <View style={{backgroundColor: props.color, paddingVertical: 8, paddingHorizontal: 10, borderRadius: 8}}>
      <Text style={styles.font}>{props.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  font: {
    color: '#FFF',
    fontSize: 18
  }
})
