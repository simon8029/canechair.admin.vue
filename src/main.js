import Vue from 'vue';
import App from './app/App.vue';
import store from './app/store';
import router from './app/router';
require('bulma/css/bulma.css');
require('font-awesome/css/font-awesome.min.css');

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});
