import { getProductData, getProductDetail } from '../services/Api'
const initState = {
  products: [],
  productDetail: null
};

export const getProduct = (params) => async (dispatch) => {
  const result = await getProductData(params);
  dispatch({ type: "GET_DATA", product: result?.data });
};

export const getProductDetailApi = (id) => async (dispatch) => {
  const result = await getProductDetail(id);
  dispatch({ type: "GET_DETAIL", productDetail: result?.data });
};

export default function cartReducer(state = initState, action) {
  switch (action.type) {
    case "GET_DATA":
      return {
        ...state,
        products: action.product
      };
    case "GET_DETAIL":
      return {
        ...state,
        productDetail: action.productDetail
      };

    default:
      return state;
  }
}
