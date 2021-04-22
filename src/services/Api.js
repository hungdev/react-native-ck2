import axios from 'axios'

export const instance = axios.create({
  baseURL: 'http://ecommerce.hungvu.net',
  timeout: 60000, // 1min
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
});

export const getProduct = (params) => instance.get('/get-products', params)

