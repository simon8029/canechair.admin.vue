import Vue from 'vue';
import Vuex from 'vuex';
import login from './modules/login';
import user from './modules/user';
import leftSideBar from './modules/leftSideBar';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    login,
    user,
    leftSideBar
  }
})
