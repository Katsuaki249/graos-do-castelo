import { FlatList } from 'react-native-gesture-handler'
import { Products } from '../../components/StoreComponents/Products'

import { Container } from './styles'

const data = [
  {
    id: 1,
    category: 'Castanhas',
    name: 'Castanha do Pará',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1622542086073-dcdc3350cc2b?auto=format&fit=crop&q=80&w=2080&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 2,
    category: 'Chás',
    name: 'Camomila',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1622542086073-dcdc3350cc2b?auto=format&fit=crop&q=80&w=2080&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 3,
    category: 'Ervas',
    name: 'Manjericão',
    price: 5.99,
    image: 'https://images.unsplash.com/photo-1622542086073-dcdc3350cc2b?auto=format&fit=crop&q=80&w=2080&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 4,
    category: 'Temperos',
    name: 'Açafrão',
    price: 7.99,
    image: 'https://images.unsplash.com/photo-1622542086073-dcdc3350cc2b?auto=format&fit=crop&q=80&w=2080&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 5,
    category: 'Castanhas',
    name: 'Amêndoas',
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1622542086073-dcdc3350cc2b?auto=format&fit=crop&q=80&w=2080&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 6,
    category: 'Chás',
    name: 'Hortelã',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1622542086073-dcdc3350cc2b?auto=format&fit=crop&q=80&w=2080&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 7,
    category: 'Ervas',
    name: 'Sálvia',
    price: 6.99,
    image: 'https://images.unsplash.com/photo-1622542086073-dcdc3350cc2b?auto=format&fit=crop&q=80&w=2080&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 8,
    category: 'Temperos',
    name: 'Cúrcuma',
    price: 10.99,
    image: 'https://images.unsplash.com/photo-1622542086073-dcdc3350cc2b?auto=format&fit=crop&q=80&w=2080&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 9,
    category: 'Castanhas',
    name: 'Nozes',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1622542086073-dcdc3350cc2b?auto=format&fit=crop&q=80&w=2080&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 10,
    category: 'Chás',
    name: 'Erva-Cidreira',
    price: 11.99,
    image: 'https://images.unsplash.com/photo-1622542086073-dcdc3350cc2b?auto=format&fit=crop&q=80&w=2080&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
]

export const numColumns = 2

export default function Store() {

  return(
    <Container>
      <FlatList
        keyExtractor={(item) => item.id}
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Products {...item} />}
        numColumns={numColumns}
      />
    </Container>
  )
}
