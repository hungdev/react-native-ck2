import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import productReducer from "./productReducer";
import authReducer from "./authReducer";

// ket noi cac reducer lai voi nhau
const rootReducer = combineReducers({
  cartReducer,
  productReducer,
  authReducer
});

export default rootReducer;
