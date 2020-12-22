import Vue from 'vue';
import App from './App.vue';
import store from './store/index';
import router from './router';
import feather from 'vue-icon';

Vue.config.productionTip = false

Vue.use(feather, 'v-icon');

// custom filters
import './filters/index';

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
