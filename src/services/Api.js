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


const productList = Array(10).fill(null).map((e, i) => ({
  _id: i,
  img: 'https://itcafe.vn/wp-content/uploads/2021/01/anh-gai-xinh-4.jpg',
  name: 'T Shirt Women Funny Print',
  heart: i % 2,
  size: 'L',
  price: 10 + i
}))

export const onLogin = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: { token: 'abcxyz' }
      });
    }, 300);
  });
};

export const getProductData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: productList
      });
    }, 300);
  });
};

export const getProductDetail = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: {
          _id: 1,
          img: 'https://itcafe.vn/wp-content/uploads/2021/01/anh-gai-xinh-4.jpg',
          name: 'T Shirt Women Funny Print',
          heart: 5 % 2,
          size: 'L',
          price: 10 + 1,
          comments: [
            { id: 1, user: 'google', content: 'This product is great!' },
            { id: 2, user: 'john', content: 'This product is nice!' },
          ]
        }
      });
    }, 300);
  });
};
