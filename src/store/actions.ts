import { cartItem } from "../types/types";
import { ActionContext, ActionTree } from 'vuex';
import { RootState } from './index';

const actions: ActionTree<RootState, RootState> = {
  addToCart(context: ActionContext<RootState, RootState>, payload: cartItem) {
    context.commit('addToCart', payload);
  },
  emptyCart(context: ActionContext<RootState, RootState>) {
    context.commit('emptyCart');
  },
  increaseProductQuantity(context: ActionContext<RootState, RootState>, productId: number) {
    context.commit('increaseProductQuantity', productId);
  },
  decreaseProductQuantity(context: ActionContext<RootState, RootState>, productId: number) {
    context.commit('decreaseProductQuantity', productId);
  },
};

export default actions;