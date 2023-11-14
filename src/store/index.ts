import { createStore } from 'vuex';

import rootMutations from './mutations';
import rootActions from './actions';
import rootGetters from './getters';
import { cartItem } from '../types/types';

export interface RootState {
  cart: cartItem[];
}

const store = createStore({
  state(): RootState {
    return {
      cart: []
    };
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters
});

export default store;