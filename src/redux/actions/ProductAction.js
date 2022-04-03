import { ActionTypes } from "../constants/ActionTypes";

export const setDetails = (product) => {
  return {
    type: ActionTypes.SHOW_DETAILS,
    payload: product,
  };
};

export const cartDetails = (cart) => {
  return {
    type: ActionTypes.CART_DETAILS,
    payload: cart,
  };
};
