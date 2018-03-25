import axios from 'axios';

const state = {
  leftSideBarOpen: true
}
const mutations = {
  TOGGLE_LEFT_SIDE_BAR(state, payload) {
    state.leftSideBarOpen = payload
  }
}

const actions = {
  openLeftSideBar({ commit }) {
    commit('TOGGLE_LEFT_SIDE_BAR', true);
  },

  closeLeftSideBar({ commit }) {
    commit('TOGGLE_LEFT_SIDE_BAR', false);
  },

  toggleLeftSideBar({ commit }) {
    commit('TOGGLE_LEFT_SIDE_BAR', !state.leftSideBarOpen);
  }
}

const getters = {
  leftSideBarOpen: state => state.leftSideBarOpen
}

const leftSideBarModule = {
  state,
  mutations,
  actions,
  getters
}

export default leftSideBarModule;