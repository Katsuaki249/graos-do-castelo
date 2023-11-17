import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
})

export const getProducts = () => api.get('/products')
export const getUsers = () => api.get('/users')

export default api
