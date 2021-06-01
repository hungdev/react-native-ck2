import { onLogin } from '../services/Api'
import { instance } from '../services/Api'
const initState = {
  token: null,
  userInfo: null,
};

const url = '/verify_mobile'

export const login = (params) => async (dispatch) => {
  const result = await instance.post(url, params)
};

export const verifyCode = (params) => async (dispatch) => {
  const result = await instance.post(url, params)
  console.log('result', result)
  dispatch({ type: "LOGIN", token: result?.data?.token, userInfo: result?.data?.userInfo?.[0] });
};


export default function authReducer(state = initState, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        token: action.token,
        userInfo: action.userInfo
      };

    default:
      return state;
  }
}
