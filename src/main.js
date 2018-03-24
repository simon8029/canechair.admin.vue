import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import 'vue-awesome/icons';
import Icon from 'vue-awesome/components/Icon';
require('bulma/css/bulma.css');
require('bulma-extensions/dist/bulma-extensions.min.css');

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});

Vue.component('icon', Icon);