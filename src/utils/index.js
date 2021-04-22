export const getImage = (imgUrl) => {
  return `http://ecommerce.hungvu.net/${imgUrl.replace('uploads', '')}`
}