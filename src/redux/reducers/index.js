import { combineReducers } from "redux";
import { productReducer } from "./ProductReducer";

const reducers = combineReducers({
  details: productReducer,
});

export default reducers;
