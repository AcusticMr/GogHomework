import Vue from 'vue';
import Vuex from 'vuex';
// import the auto exporter
import modules from './modules';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules
})

export default store