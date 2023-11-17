import React from 'react'
import { Text, View, FlatList } from 'react-native'

import CartItems from '../../components/CartItems'
import FinishOrderButton from '../../components/FinishOrderButtom'

import { Container, ListContainer } from './styles'

const cart = [
  {
    id: 1,
    name: 'Aveia 300g',
    category: 'Chás',
    quantity: '2',
    image: 'https://images.unsplash.com/photo-1622542086073-dcdc3350cc2b?auto=format&fit=crop&q=80&w=2080&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 35,
  },
  {
    id: 2,
    name: 'Aveia 300g',
    category: 'Chás',
    quantity: '2',
    image: 'https://images.unsplash.com/photo-1622542086073-dcdc3350cc2b?auto=format&fit=crop&q=80&w=2080&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 35,
  },
  {
    id: 3,
    name: 'Aveia 300g',
    category: 'Chás',
    quantity: '2',
    image: 'https://images.unsplash.com/photo-1622542086073-dcdc3350cc2b?auto=format&fit=crop&q=80&w=2080&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 35,
  },
  {
    id: 4,
    name: 'Aveia 300g',
    category: 'Chás',
    quantity: '2',
    image: 'https://images.unsplash.com/photo-1622542086073-dcdc3350cc2b?auto=format&fit=crop&q=80&w=2080&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 35,
  },
  {
    id: 5,
    name: 'Aveia 300g',
    category: 'Chás',
    quantity: '2',
    image: 'https://images.unsplash.com/photo-1622542086073-dcdc3350cc2b?auto=format&fit=crop&q=80&w=2080&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 35,
  },
]

export default function Cart({navigation}) {

  const numColumns = 1

  return(
    <Container>
      <ListContainer>
        <FlatList
          keyExtractor={(item) => item.id}
          data={cart}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <CartItems {...item}/>}
          numColumns={numColumns}
        />
      </ListContainer>
      <FinishOrderButton />
    </Container>
  )
}
