import { GetterTree } from "vuex";
import { RootState } from "./index";
import { cartItem } from "../types/types";

const getters: GetterTree<RootState, RootState> = {
  cartItems(state: RootState): cartItem[] {
    return state.cart;
  },
  getCartProductsQty(state: RootState): number {
    return state.cart.length;
  },
  getItemsTotalPrice(state: RootState): number {
    return state.cart.reduce(
      (total, item) =>
        total + Number(item.productPrice) * Number(item.quantity),
      0
    );
  },
};

export default getters;
