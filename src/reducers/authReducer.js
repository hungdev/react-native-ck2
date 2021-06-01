import { onLogin } from '../services/Api'
const initState = {
  token: null
};

export const login = (params) => async (dispatch) => {
  const result = await onLogin(params);
  dispatch({ type: "LOGIN", token: result?.data });
};

export default function authReducer(state = initState, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        token: action.token
      };

    default:
      return state;
  }
}
