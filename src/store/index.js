
import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(Vuex);
Vue.use(VueAxios, axios);

Vue.axios.defaults.baseURL = "http://localhost:3000/";

export default new Vuex.Store({
  plugins: [createPersistedState({
    storage: window.sessionStorage,
  })],
  state: {
    ui: {
      monitors: false,
      currentDevice: null,
      currentPrototype: "",
      user: {
        loggedIn: false,
        viewedProducts: []
      },
      selectedProduct: {},
      primaryNavigation: {
        visible: false
      },
      modal: {
        visible: null
      } 
    },
    data: {
    }
  },
  actions: {
    setMonitors({commit}, monitors) {
      commit('SET_MONITORS', monitors);
    },
    setCurrentDevice({commit}, device) {
      commit('SET_CURRENT_DEVICE', device);
    },
    setCurrentPrototype({commit}, prototype) {
      commit('SET_CURRENT_PROTOTYPE', prototype);
    },
    loadData({commit}, endpoint) {
      Vue.axios.get(endpoint).then(result => {
        let payload = {'endpoint': endpoint, 'result': result.data};
        commit('SAVE_DATA', payload);
      }).catch(error => {
        throw new Error(`API ${error}`);
      });
    },
    logInUser({commit}, id) {
      commit('ADD_LOGGED_USER', id);
    },
    logOutUser({commit}) {
      commit('REMOVE_USER', "");
    },
    selectProduct({commit}, product) {
      commit('ADD_SELECTED_PRODUCT', product);
    }
  },
  mutations: {
    SET_MONITORS(state, payload) {
      state.ui.monitors = payload;
    },
    SET_CURRENT_DEVICE(state, payload) {
      state.ui.currentDevice = payload;
    },
    SET_CURRENT_PROTOTYPE(state, payload) {
      state.ui.currentPrototype = payload;
    },
    SAVE_DATA(state, payload) {
      if(payload.endpoint === "users"){
        state.data.users = payload.result;
      } else if(payload.endpoint === "products"){
        state.data.products = payload.result;
      }
    },
    ADD_LOGGED_USER(state, payload){
      state.ui.user.loggedIn = payload;
    },
    REMOVE_USER(state, payload){
      state.ui.user.loggedIn = payload;
    },
    ADD_SELECTED_PRODUCT(state, payload){
      state.ui.selectedProduct = payload;
    }
  },
  getters: {
    monitors: (state) => {
      return state.ui.monitors;
    },
    currentDevice: (state) => {
      return state.ui.currentDevice;
    },
    currentPrototype: (state) => {
      return state.ui.currentPrototype;
    },
    loggedInUser: (state) => {
      return state.data.users.find(user => user.id === state.ui.user.loggedIn);
    },
    allProducts: (state) => {
      return state.data.products;
    },
    selectedProduct: (state) => {
      return state.ui.selectedProduct;
    }
  }
})

