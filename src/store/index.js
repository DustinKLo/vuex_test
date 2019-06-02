import Vue from 'vue';
import Vuex from 'vuex';

// modules holds all the states, mutations actions and getters for the component (or app)
import todos from './modules/todos.js';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    todos
  },
  // state: {

  // },
  // mutations: {

  // },
  // actions: {

  // }
});
