import { ActionTypes } from "../constants/ActionTypes";

const initialState = {
  product: [],
  cart: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SHOW_DETAILS:
      return {
        ...state,
        product: payload,
      };
    case ActionTypes.CART_DETAILS:
      return { ...state, cart: payload };
    default:
      return state;
  }
};
