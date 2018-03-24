import Vue from 'vue';
import Vuex from 'vuex';
import login from './modules/login';
import product from './modules/product';
import cart from './modules/cart';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    login,
    product,
    cart
  }
})
