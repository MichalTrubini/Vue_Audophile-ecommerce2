import { GetterTree } from 'vuex';
import { RootState } from './index'; 
import { cartItem } from '../types/types';

const getters: GetterTree<RootState, RootState> = {
  cartItems(state: RootState): cartItem[] {
    return state.cart;
  },
  getCartItemsQty(state: RootState): number {
    return state.cart.length;
  }
};

export default getters;