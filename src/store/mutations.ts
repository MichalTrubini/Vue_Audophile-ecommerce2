import { MutationTree } from 'vuex';
import { RootState } from './index'; 
import { cartItem } from "../types/types";

const mutations: MutationTree<RootState> = {
  addToCart(state: RootState, payload: cartItem) {
    const index = state.cart.findIndex((item) => item.id === payload.id);

    if (index !== -1) {
      // If the item exists, update the quantity
      state.cart[index].quantity += payload.quantity;
    } else {
      // If the item does not exist, add it to the cart
      state.cart.push(payload);
    }
  },
  // Add other mutations as needed
};

export default mutations;