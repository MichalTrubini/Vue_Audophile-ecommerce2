import { cartItem } from "../types/types";
import { ActionContext, ActionTree } from 'vuex';
import { RootState } from './index';

const actions: ActionTree<RootState, RootState> = {
  addToCart(context: ActionContext<RootState, RootState>, payload: cartItem) {
    context.commit('addToCart', payload);
  },
  // Add other actions as needed
};

export default actions;