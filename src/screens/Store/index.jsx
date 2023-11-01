import { FlatList } from 'react-native-gesture-handler'
import { Products } from '../../components/StoreComponents/Products'

import { Container } from './styles'

const data = [
  {
    id: 1,
    category: 'Grãos',
    name: 'Aveia',
    description: 'Aveia em flocos.',
    price: 18.99,
    image:
      'https://images.unsplash.com/photo-1614961233913-a5113a4a34ed?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    category: 'Cereais',
    name: 'Granola',
    description: 'Granola',
    price: 22.99,
    image:
      'https://images.unsplash.com/photo-1622542086073-dcdc3350cc2b?auto=format&fit=crop&q=80&w=2080&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    category: 'Cereais',
    name: 'Granola',
    description: 'Granola',
    price: 22.99,
    image:
      'https://images.unsplash.com/photo-1622542086073-dcdc3350cc2b?auto=format&fit=crop&q=80&w=2080&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 4,
    category: 'Cereais',
    name: 'Granola',
    description: 'Granola',
    price: 22.99,
    image:
      'https://images.unsplash.com/photo-1622542086073-dcdc3350cc2b?auto=format&fit=crop&q=80&w=2080&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 5,
    category: 'Cereais',
    name: 'Granola',
    description: 'Granola',
    price: 22.99,
    image:
      'https://images.unsplash.com/photo-1622542086073-dcdc3350cc2b?auto=format&fit=crop&q=80&w=2080&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 6,
    category: 'Cereais',
    name: 'Granola',
    description: 'Granola',
    price: 22.99,
    image:
      'https://images.unsplash.com/photo-1622542086073-dcdc3350cc2b?auto=format&fit=crop&q=80&w=2080&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
]

export const numColumns = 2

export default function Store() {

  return(
    <Container>
      <FlatList
        keyExtractor={(item) => item.id}
        data={data}
        renderItem={({ item }) => <Products {...item} />}
        numColumns={numColumns}
      />
    </Container>
  )
}
