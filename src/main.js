import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
require('bulma/css/bulma.css');
require('font-awesome/css/font-awesome.min.css');

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});
